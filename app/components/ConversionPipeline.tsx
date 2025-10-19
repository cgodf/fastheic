'use client';

import { useState, useCallback, useEffect } from 'react';
import { ConversionFile, ConversionProgress } from '../../types/libheif';
import { heicConverter, ConversionResult } from '../services/heicConverter';
import { trackConversion, trackError } from './Analytics';
import FileDropzone from './FileDropzone';
import ConversionQueue from './ConversionQueue';
import DownloadManager from './DownloadManager';
import { HeaderAd, BelowResultsAd } from './AdPlaceholder';

type AppState = 'idle' | 'processing' | 'completed';

export default function ConversionPipeline() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [files, setFiles] = useState<ConversionFile[]>([]);
  const [progress, setProgress] = useState<ConversionProgress>({ total: 0, completed: 0, failed: 0 });
  const [browserSupported, setBrowserSupported] = useState(true);
  const [supportMessage, setSupportMessage] = useState<string>('');

  // Check browser support on component mount
  useEffect(() => {
    const supportCheck = heicConverter.checkBrowserSupport();
    setBrowserSupported(supportCheck.supported);
    if (!supportCheck.supported) {
      setSupportMessage(supportCheck.message || 'Browser not supported');
    }
  }, []);

  // Handle files being added from dropzone
  const handleFilesAdded = useCallback((newFiles: ConversionFile[]) => {
    setFiles(newFiles);
    setAppState('processing');
    setProgress({ total: newFiles.length, completed: 0, failed: 0 });
    
    // Start conversion process
    processFiles(newFiles);
  }, []);

  // Process files sequentially to avoid memory issues
  const processFiles = async (filesToProcess: ConversionFile[]) => {
    const updatedFiles = [...filesToProcess];
    let completedCount = 0;
    let failedCount = 0;

    for (let i = 0; i < updatedFiles.length; i++) {
      const file = updatedFiles[i];
      
      // Update file status to converting
      file.status = 'converting';
      setFiles([...updatedFiles]);

      try {
        // Convert the file
        const result: ConversionResult = await heicConverter.convertFile(file.file, 0.9);
        
        if (result.success && result.blob && result.thumbnail) {
          // Success
          file.status = 'done';
          file.convertedBlob = result.blob;
          file.thumbnail = result.thumbnail;
          completedCount++;
          
          // Track successful conversion
          trackConversion(1, updatedFiles.length > 1 ? 'bulk' : 'single');
        } else {
          // Conversion failed
          file.status = 'failed';
          file.error = result.error?.message || 'Conversion failed';
          failedCount++;
          
          // Track error
          if (result.error) {
            trackError(result.error.type, result.error.message);
          }
        }
      } catch (error) {
        // Unexpected error
        file.status = 'failed';
        file.error = error instanceof Error ? error.message : 'Unexpected error occurred';
        failedCount++;
        
        // Track error
        trackError('UNKNOWN_ERROR', file.error);
      }

      // Update progress
      setProgress({ 
        total: updatedFiles.length, 
        completed: completedCount, 
        failed: failedCount 
      });
      
      // Update files array
      setFiles([...updatedFiles]);
    }

    // All files processed
    setAppState('completed');
  };

  // Reset to initial state
  const handleReset = useCallback(() => {
    setFiles([]);
    setAppState('idle');
    setProgress({ total: 0, completed: 0, failed: 0 });
  }, []);

  // Remove a specific file from the list
  const handleRemoveFile = useCallback((fileId: string) => {
    setFiles(prevFiles => {
      const updatedFiles = prevFiles.filter(f => f.id !== fileId);
      
      // If no files left, reset to idle
      if (updatedFiles.length === 0) {
        setAppState('idle');
        setProgress({ total: 0, completed: 0, failed: 0 });
      } else {
        // Update progress
        const completed = updatedFiles.filter(f => f.status === 'done').length;
        const failed = updatedFiles.filter(f => f.status === 'failed').length;
        setProgress({ total: updatedFiles.length, completed, failed });
      }
      
      return updatedFiles;
    });
  }, []);

  // Retry conversion for failed files
  const handleRetryFailed = useCallback(() => {
    const failedFiles = files.filter(f => f.status === 'failed');
    if (failedFiles.length === 0) return;

    // Reset failed files to waiting status
    const updatedFiles = files.map(f => 
      f.status === 'failed' 
        ? { ...f, status: 'waiting' as const, error: undefined }
        : f
    );

    setFiles(updatedFiles);
    setAppState('processing');
    
    // Process only the failed files
    processFiles(failedFiles.map(f => ({ ...f, status: 'waiting' as const, error: undefined })));
  }, [files]);

  // Show browser not supported message
  if (!browserSupported) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <HeaderAd className="mb-8" />
        
        <div className="glass rounded-2xl p-12 text-center border-destructive/50">
          <div className="mx-auto w-16 h-16 glass rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Browser Not Supported</h2>
          <p className="text-muted-foreground text-lg mb-6">{supportMessage}</p>
          <p className="text-sm text-muted-foreground">
            This tool requires WebAssembly support for HEIC conversion.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header Ad */}
      <HeaderAd />

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Main Conversion Area */}
        <div className="flex-1 space-y-6">
          {appState === 'idle' && (
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Free HEIC to JPG Converter
                </h1>
                <p className="text-xl text-muted-foreground">
                  Convert Apple HEIC photos to JPG format instantly in your browser
                </p>
              </div>
              
              <FileDropzone onFilesAdded={handleFilesAdded} />
            </div>
          )}

          {(appState === 'processing' || appState === 'completed') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {appState === 'processing' ? 'Converting Files...' : 'Conversion Complete'}
                  </h2>
                  <p className="text-muted-foreground">
                    {progress.completed} of {progress.total} files converted
                    {progress.failed > 0 && ` • ${progress.failed} failed`}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  {progress.failed > 0 && appState === 'completed' && (
                    <button
                      onClick={handleRetryFailed}
                      className="glass glass-hover px-4 py-2 rounded-lg text-sm font-medium text-foreground"
                    >
                      Retry Failed
                    </button>
                  )}
                  <button
                    onClick={handleReset}
                    className="glass glass-hover px-4 py-2 rounded-lg text-sm font-medium text-foreground"
                  >
                    Convert More Files
                  </button>
                </div>
              </div>

              <ConversionQueue 
                files={files} 
                onRemoveFile={handleRemoveFile}
              />

              {appState === 'completed' && progress.completed > 0 && (
                <DownloadManager files={files.filter(f => f.status === 'done')} />
              )}
            </div>
          )}
        </div>

        {/* Sidebar with ads - only show on larger screens */}
        <div className="hidden lg:block w-80">
          <div className="sticky top-8">
            {/* Sidebar content can go here */}
          </div>
        </div>
      </div>

      {/* Below Results Ad */}
      {appState === 'completed' && (
        <BelowResultsAd className="mt-8" />
      )}
    </div>
  );
}
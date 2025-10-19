'use client';

import { useState } from 'react';
import { ConversionFile } from '../../types/libheif';
import { trackDownload } from './Analytics';

interface DownloadManagerProps {
  files: ConversionFile[];
}

export default function DownloadManager({ files }: DownloadManagerProps) {
  const [isCreatingZip, setIsCreatingZip] = useState(false);

  const downloadIndividualFile = (file: ConversionFile) => {
    if (!file.convertedBlob) return;

    const url = URL.createObjectURL(file.convertedBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${file.name}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Track download
    trackDownload('individual', 1);
  };

  const downloadAllAsZip = async () => {
    if (files.length === 0 || isCreatingZip) return;

    setIsCreatingZip(true);

    try {
      // Dynamic import of jszip
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();

      // Add all converted files to zip
      for (const file of files) {
        if (file.convertedBlob) {
          zip.file(`${file.name}.jpg`, file.convertedBlob);
        }
      }

      // Generate zip file
      const zipBlob = await zip.generateAsync({ type: 'blob' });

      // Download zip file
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `converted-heic-files-${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Track download
      trackDownload('zip', files.length);

    } catch (error) {
      console.error('Error creating zip file:', error);
      alert('Failed to create zip file. Please try downloading files individually.');
    } finally {
      setIsCreatingZip(false);
    }
  };

  if (files.length === 0) {
    return null;
  }

  const validFiles = files.filter(f => f.convertedBlob);
  const totalSize = validFiles.reduce((sum, file) => sum + (file.convertedBlob?.size || 0), 0);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Downloads Ready
          </h3>
          <p className="text-muted-foreground">
            {validFiles.length} file{validFiles.length !== 1 ? 's' : ''} converted • {formatFileSize(totalSize)} total
          </p>
        </div>

        {/* Download All Button */}
        {validFiles.length > 1 && (
          <button
            onClick={downloadAllAsZip}
            disabled={isCreatingZip}
            className="glass glass-hover px-6 py-3 rounded-xl font-semibold text-foreground bg-primary/20 border-primary/50 hover:bg-primary/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreatingZip ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Creating ZIP...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download All (.zip)
              </span>
            )}
          </button>
        )}
      </div>

      {/* Individual Files */}
      <div className="space-y-3">
        {validFiles.map((file) => (
          <div key={file.id} className="flex items-center justify-between p-4 glass rounded-xl">
            <div className="flex items-center gap-4">
              {/* Thumbnail */}
              <div className="w-12 h-12 rounded-lg overflow-hidden glass">
                {file.thumbnail ? (
                  <img 
                    src={file.thumbnail} 
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* File Info */}
              <div>
                <h4 className="font-medium text-foreground">
                  {file.name}.jpg
                </h4>
                <p className="text-sm text-muted-foreground">
                  {file.convertedBlob && formatFileSize(file.convertedBlob.size)}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={() => downloadIndividualFile(file)}
              className="glass glass-hover px-4 py-2 rounded-lg font-medium text-foreground hover:bg-primary/10 transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Privacy Notice */}
      <div className="mt-6 p-4 glass rounded-lg">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>
            All files were processed locally in your browser. No data was uploaded to any server.
          </span>
        </div>
      </div>
    </div>
  );
}
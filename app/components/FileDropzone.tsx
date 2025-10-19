'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ConversionFile } from '../../types/libheif';

interface FileDropzoneProps {
  onFilesAdded: (files: ConversionFile[]) => void;
  disabled?: boolean;
  maxFiles?: number;
  maxFileSize?: number;
  maxTotalSize?: number;
}

const DEFAULT_MAX_FILES = 10;
const DEFAULT_MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const DEFAULT_MAX_TOTAL_SIZE = 200 * 1024 * 1024; // 200MB

export default function FileDropzone({
  onFilesAdded,
  disabled = false,
  maxFiles = DEFAULT_MAX_FILES,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  maxTotalSize = DEFAULT_MAX_TOTAL_SIZE,
}: FileDropzoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validateFiles = (files: File[]): { validFiles: File[]; errors: string[] } => {
    const validFiles: File[] = [];
    const newErrors: string[] = [];

    // Check file count
    if (files.length > maxFiles) {
      newErrors.push(`Maximum ${maxFiles} files allowed. Selected ${files.length} files.`);
      return { validFiles: [], errors: newErrors };
    }

    let totalSize = 0;

    for (const file of files) {
      // Check file type
      const isHeic = file.name.toLowerCase().match(/\.(heic|heif)$/);
      if (!isHeic) {
        newErrors.push(`${file.name}: Only HEIC and HEIF files are supported.`);
        continue;
      }

      // Check individual file size
      if (file.size > maxFileSize) {
        const sizeMB = Math.round(file.size / (1024 * 1024));
        const maxSizeMB = Math.round(maxFileSize / (1024 * 1024));
        newErrors.push(`${file.name}: File too large (${sizeMB}MB). Maximum ${maxSizeMB}MB per file.`);
        continue;
      }

      totalSize += file.size;
      validFiles.push(file);
    }

    // Check total size
    if (totalSize > maxTotalSize) {
      const totalSizeMB = Math.round(totalSize / (1024 * 1024));
      const maxTotalSizeMB = Math.round(maxTotalSize / (1024 * 1024));
      newErrors.push(`Total files too large (${totalSizeMB}MB). Maximum ${maxTotalSizeMB}MB total.`);
      return { validFiles: [], errors: newErrors };
    }

    return { validFiles, errors: newErrors };
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setErrors([]);
    
    const { validFiles, errors: validationErrors } = validateFiles(acceptedFiles);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Convert to ConversionFile format
    const conversionFiles: ConversionFile[] = validFiles.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      name: file.name.replace(/\.(heic|heif)$/i, ''),
      size: file.size,
      status: 'waiting',
    }));

    onFilesAdded(conversionFiles);
    setDragActive(false);
  }, [onFilesAdded, maxFiles, maxFileSize, maxTotalSize]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/heic': ['.heic'],
      'image/heif': ['.heif'],
    },
    disabled,
    multiple: true,
    maxFiles,
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          glass glass-hover rounded-2xl p-12 text-center cursor-pointer
          transition-all duration-300 ease-in-out
          ${isDragActive ? 'scale-105 bg-primary/20 border-primary/50' : ''}
          ${disabled ? 'cursor-not-allowed opacity-50' : ''}
          ${errors.length > 0 ? 'border-destructive/50' : ''}
        `}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
      >
        <input {...getInputProps()} />
        
        <div className="space-y-4">
          {/* Upload Icon */}
          <div className="mx-auto w-16 h-16 glass rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* Main Text */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {isDragActive
                ? 'Drop your HEIC files here'
                : 'Drag & Drop Your HEIC Files Here'
              }
            </h3>
            <p className="text-muted-foreground text-lg">
              or click to select files from your device
            </p>
          </div>

          {/* File Limits Info */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Supports HEIC and HEIF files</p>
            <p>
              Maximum {maxFiles} files • {Math.round(maxFileSize / (1024 * 1024))}MB per file • {Math.round(maxTotalSize / (1024 * 1024))}MB total
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="glass rounded-lg p-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              100% Private - Files never leave your device
            </span>
          </div>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mt-4 space-y-2">
          {errors.map((error, index) => (
            <div
              key={index}
              className="glass rounded-lg p-3 border-destructive/50 bg-destructive/10"
            >
              <p className="text-sm text-destructive font-medium">{error}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
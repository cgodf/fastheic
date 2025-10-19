import { ConversionFile } from '../../types/libheif';

// Error types for better error handling
export type ConversionError = 
  | 'INVALID_FILE'
  | 'CONVERSION_FAILED' 
  | 'BROWSER_NOT_SUPPORTED'
  | 'MEMORY_ERROR'
  | 'UNKNOWN_ERROR';

export interface ConversionResult {
  success: boolean;
  blob?: Blob;
  thumbnail?: string;
  error?: {
    type: ConversionError;
    message: string;
  };
}

export class HeicConverterService {
  private heic2any: any = null;
  private isLoading = false;
  private loadPromise: Promise<void> | null = null;

  /**
   * Lazy load heic2any library
   */
  private async loadHeic2any(): Promise<void> {
    if (this.heic2any) return;
    
    if (this.isLoading && this.loadPromise) {
      await this.loadPromise;
      return;
    }

    this.isLoading = true;
    this.loadPromise = this.performLoad();
    
    try {
      await this.loadPromise;
    } finally {
      this.isLoading = false;
      this.loadPromise = null;
    }
  }

  private async performLoad(): Promise<void> {
    try {
      const module = await import('heic2any');
      this.heic2any = module.default;
      console.log('heic2any loaded successfully');
    } catch (error) {
      console.error('Failed to load heic2any:', error);
      throw new Error('Failed to load HEIC converter');
    }
  }

  /**
   * Check if the browser supports HEIC conversion
   */
  public checkBrowserSupport(): { supported: boolean; message?: string } {
    // Check for WebAssembly support (required by heic2any)
    if (typeof WebAssembly !== 'object') {
      return {
        supported: false,
        message: 'WebAssembly is not supported. Please use Chrome 57+, Firefox 52+, Safari 11+, or Edge 16+.'
      };
    }

    // Check for Blob support
    if (typeof Blob !== 'function') {
      return {
        supported: false,
        message: 'Blob API is not supported. Please update your browser.'
      };
    }

    // Check for Canvas support (for thumbnail generation)
    if (typeof HTMLCanvasElement === 'undefined') {
      return {
        supported: false,
        message: 'Canvas API is not supported. Please update your browser.'
      };
    }

    return { supported: true };
  }

  /**
   * Convert a single HEIC file to JPG
   */
  public async convertFile(file: File, quality: number = 0.9): Promise<ConversionResult> {
    // Check browser support first
    const browserCheck = this.checkBrowserSupport();
    if (!browserCheck.supported) {
      return {
        success: false,
        error: {
          type: 'BROWSER_NOT_SUPPORTED',
          message: browserCheck.message || 'Browser not supported'
        }
      };
    }

    try {
      // Load heic2any if not already loaded
      await this.loadHeic2any();

      // Validate file type
      if (!this.isHeicFile(file)) {
        return {
          success: false,
          error: {
            type: 'INVALID_FILE',
            message: 'File must be HEIC or HEIF format'
          }
        };
      }

      // Convert file to blob if it isn't already
      const blob = file instanceof Blob ? file : new Blob([file]);

      // Perform conversion
      const convertedBlob = await this.heic2any({
        blob,
        toType: 'image/jpeg',
        quality,
        multiple: false // We handle one file at a time
      }) as Blob;

      // Generate thumbnail
      const thumbnail = await this.generateThumbnail(convertedBlob);

      return {
        success: true,
        blob: convertedBlob,
        thumbnail
      };

    } catch (error: any) {
      console.error('HEIC conversion failed:', error);
      
      // Determine error type
      let errorType: ConversionError = 'UNKNOWN_ERROR';
      let errorMessage = 'An unknown error occurred during conversion';

      if (error?.message?.includes('memory') || error?.message?.includes('Memory')) {
        errorType = 'MEMORY_ERROR';
        errorMessage = 'Not enough memory to convert this file. Try a smaller file.';
      } else if (error?.message?.includes('Invalid') || error?.message?.includes('corrupt')) {
        errorType = 'INVALID_FILE';
        errorMessage = 'This HEIC file appears to be corrupted or invalid.';
      } else if (error?.message) {
        errorType = 'CONVERSION_FAILED';
        errorMessage = `Conversion failed: ${error.message}`;
      }

      return {
        success: false,
        error: {
          type: errorType,
          message: errorMessage
        }
      };
    }
  }

  /**
   * Generate a thumbnail from the converted JPG blob
   */
  private async generateThumbnail(blob: Blob, maxSize: number = 200): Promise<string> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Calculate thumbnail dimensions
        let { width, height } = img;
        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Draw and convert to data URL
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };

      img.onerror = () => {
        reject(new Error('Failed to generate thumbnail'));
      };

      img.src = URL.createObjectURL(blob);
    });
  }

  /**
   * Check if a file is a HEIC file
   */
  private isHeicFile(file: File): boolean {
    const extension = file.name.toLowerCase();
    return extension.endsWith('.heic') || extension.endsWith('.heif');
  }

  /**
   * Format file size for display
   */
  public static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Get user-friendly error message
   */
  public static getErrorMessage(error: ConversionError): string {
    switch (error) {
      case 'INVALID_FILE':
        return 'Invalid HEIC file. Please select a valid HEIC or HEIF file.';
      case 'CONVERSION_FAILED':
        return 'Conversion failed. Please try again or select a different file.';
      case 'BROWSER_NOT_SUPPORTED':
        return 'Your browser does not support HEIC conversion. Please use Chrome 57+, Firefox 52+, Safari 11+, or Edge 16+.';
      case 'MEMORY_ERROR':
        return 'Not enough memory to convert this file. Try selecting smaller files.';
      case 'UNKNOWN_ERROR':
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
}

// Export singleton instance
export const heicConverter = new HeicConverterService();

// Export utility functions
export const formatFileSize = HeicConverterService.formatFileSize;
export const getErrorMessage = HeicConverterService.getErrorMessage;

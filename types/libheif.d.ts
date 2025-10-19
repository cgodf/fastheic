declare module 'heic2any' {
  interface ConversionOptions {
    blob: Blob;
    toType?: 'image/jpeg' | 'image/png' | 'image/gif';
    quality?: number; // 0 to 1
    multiple?: boolean;
  }

  function heic2any(options: ConversionOptions): Promise<Blob | Blob[]>;
  export default heic2any;
}

// Additional types for file processing
export interface ConversionFile {
  id: string;
  file: File;
  name: string;
  size: number;
  status: 'waiting' | 'converting' | 'done' | 'failed';
  error?: string;
  convertedBlob?: Blob;
  thumbnail?: string;
}

export interface ConversionProgress {
  total: number;
  completed: number;
  failed: number;
}
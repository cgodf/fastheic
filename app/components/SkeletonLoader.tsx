'use client';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width, height }: SkeletonProps) {
  return (
    <div
      className={`glass animate-pulse ${className}`}
      style={{ width, height }}
    />
  );
}

export function FileCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-card p-4 animate-slide-up ${className}`}>
      <div className="flex items-center gap-4">
        {/* Thumbnail skeleton */}
        <Skeleton className="flex-shrink-0 w-16 h-16 rounded-lg" />
        
        {/* Content skeleton */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-4 w-12 rounded-full" />
          </div>
          <Skeleton className="h-3 w-20 rounded" />
        </div>
        
        {/* Status skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="w-4 h-4 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function DropzoneSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-card p-12 text-center ${className}`}>
      <div className="space-y-4">
        {/* Icon skeleton */}
        <Skeleton className="mx-auto w-16 h-16 rounded-full" />
        
        {/* Title skeleton */}
        <Skeleton className="mx-auto h-8 w-80 rounded" />
        
        {/* Subtitle skeleton */}
        <Skeleton className="mx-auto h-5 w-64 rounded" />
        
        {/* Info text skeletons */}
        <div className="space-y-2">
          <Skeleton className="mx-auto h-4 w-48 rounded" />
          <Skeleton className="mx-auto h-4 w-72 rounded" />
        </div>
        
        {/* Privacy notice skeleton */}
        <div className="mx-auto w-80">
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function DownloadManagerSkeleton({ fileCount = 3, className = '' }: { fileCount?: number; className?: string }) {
  return (
    <div className={`glass-intense rounded-2xl p-6 ${className}`}>
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-40 rounded" />
          <Skeleton className="h-4 w-56 rounded" />
        </div>
        <Skeleton className="h-12 w-36 rounded-xl" />
      </div>
      
      {/* Files skeleton */}
      <div className="space-y-3">
        {Array.from({ length: fileCount }).map((_, index) => (
          <div key={index} className="flex items-center justify-between p-4 glass rounded-xl">
            <div className="flex items-center gap-4">
              {/* Thumbnail skeleton */}
              <Skeleton className="w-12 h-12 rounded-lg" />
              
              {/* File info skeleton */}
              <div className="space-y-1">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-3 w-16 rounded" />
              </div>
            </div>
            
            {/* Download button skeleton */}
            <Skeleton className="h-9 w-24 rounded-lg" />
          </div>
        ))}
      </div>
      
      {/* Privacy notice skeleton */}
      <div className="mt-6">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </div>
  );
}

export function ProgressSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-40 rounded" />
        <Skeleton className="h-4 w-12 rounded" />
      </div>
      <Skeleton className="h-3 w-full rounded-full" />
    </div>
  );
}

// Shimmer effect overlay for better loading indication
export function ShimmerOverlay({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 glass rounded-inherit">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer" />
        </div>
      )}
    </div>
  );
}

export default Skeleton;
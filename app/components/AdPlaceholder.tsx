'use client';

interface AdPlaceholderProps {
  size: 'leaderboard' | 'skyscraper' | 'banner' | 'rectangle';
  position: 'header' | 'sidebar' | 'below-results';
  className?: string;
}

const adSizes = {
  leaderboard: { width: '728px', height: '90px', minWidth: '320px' },
  skyscraper: { width: '300px', height: '600px', minWidth: '300px' },
  banner: { width: '728px', height: '90px', minWidth: '320px' },
  rectangle: { width: '300px', height: '250px', minWidth: '300px' },
};

export default function AdPlaceholder({ size, className = '' }: AdPlaceholderProps) {
  const adSize = adSizes[size];
  
  return (
    <div 
      className={`
        border-2 border-dashed border-border/30 rounded-lg 
        flex items-center justify-center
        text-muted-foreground text-sm font-medium
        bg-muted/20
        ${className}
      `}
      style={{
        width: adSize.width,
        height: adSize.height,
        minWidth: adSize.minWidth,
      }}
    >
      <div className="text-center">
        <div className="opacity-60">Advertisement</div>
        <div className="text-xs opacity-40 mt-1">
          {size === 'leaderboard' && '728×90'}
          {size === 'skyscraper' && '300×600'}
          {size === 'banner' && '728×90'}
          {size === 'rectangle' && '300×250'}
        </div>
      </div>
    </div>
  );
}

// Specific ad components for different placements
export function HeaderAd({ className }: { className?: string }) {
  return (
    <div className={`hidden md:flex justify-center ${className}`}>
      <AdPlaceholder size="leaderboard" position="header" />
    </div>
  );
}

export function SidebarAd({ className }: { className?: string }) {
  return (
    <div className={`hidden lg:block ${className}`}>
      <AdPlaceholder size="skyscraper" position="sidebar" />
    </div>
  );
}

export function BelowResultsAd({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="hidden md:block">
        <AdPlaceholder size="banner" position="below-results" />
      </div>
      <div className="md:hidden">
        <AdPlaceholder size="rectangle" position="below-results" />
      </div>
    </div>
  );
}
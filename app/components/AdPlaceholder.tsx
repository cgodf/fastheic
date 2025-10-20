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
    <div className={`flex justify-center ${className}`}>
      {/* Desktop: Leaderboard */}
      <div className="hidden md:block">
        <AdPlaceholder size="leaderboard" position="header" />
      </div>
      {/* Mobile: Rectangle */}
      <div className="md:hidden">
        <AdPlaceholder size="rectangle" position="header" />
      </div>
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

// Sticky sidebar ad (stays visible on scroll)
export function StickySidebarAd({ className }: { className?: string }) {
  return (
    <div className={`hidden xl:block ${className}`}>
      <div className="sticky top-8">
        <AdPlaceholder size="skyscraper" position="sidebar" />
      </div>
    </div>
  );
}

// In-content ad for better engagement
export function InContentAd({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div className="hidden md:block">
        <AdPlaceholder size="leaderboard" position="below-results" />
      </div>
      <div className="md:hidden">
        <AdPlaceholder size="rectangle" position="below-results" />
      </div>
    </div>
  );
}

// Mobile anchor ad (sticky bottom - high CPM on mobile)
export function MobileAnchorAd() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="flex justify-center p-2">
        <AdPlaceholder size="banner" position="below-results" />
      </div>
    </div>
  );
}
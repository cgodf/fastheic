'use client';

import { useEffect, useState } from 'react';

export default function HeicTest() {
  const [libheifLoaded, setLibheifLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testHeic2any = async () => {
      try {
        // Test dynamic import of heic2any
        const heic2any = await import('heic2any');
        console.log('heic2any loaded successfully:', heic2any);
        setLibheifLoaded(true);
      } catch (err) {
        console.error('Error loading heic2any:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    testHeic2any();
  }, []);

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">heic2any Compatibility Test</h3>
      {libheifLoaded && (
        <p className="text-green-600">✅ heic2any loaded successfully! (~2.6MB vs 6.1MB libheif-js)</p>
      )}
      {error && (
        <p className="text-red-600">❌ Error: {error}</p>
      )}
      {!libheifLoaded && !error && (
        <p className="text-yellow-600">⏳ Loading heic2any...</p>
      )}
    </div>
  );
}
'use client';

import { useEffect } from 'react';

/**
 * Initializes Debug Test Utilities on client-side
 * Provides console functions for testing debug systems
 */
export function DebugTestUtilitiesInit() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      try {
        // Dynamically load debug test utilities
        const script = document.createElement('script');
        script.innerHTML = `
          window.__debugTests = {
            simulateFPSDrop: (duration = 2000) => {
              console.log(\`⏱️  Simulating FPS drop for \${duration}ms\`);
              const startTime = Date.now();
              while (Date.now() - startTime < duration) {
                let sum = 0;
                for (let i = 0; i < 1000000; i++) {
                  sum += Math.sqrt(i);
                }
              }
              console.log('✅ FPS drop simulation complete');
            },
            simulateMemoryLeak: (count = 100) => {
              console.log(\`💾 Simulating memory leak with \${count} objects\`);
              const largeArray = [];
              for (let i = 0; i < count; i++) {
                largeArray.push({
                  data: new Array(10000).fill(Math.random()),
                  timestamp: Date.now(),
                });
              }
              window.__leakTestArray = largeArray;
              console.log('✅ Memory leak simulation complete');
            }
          };
        `;
        document.head.appendChild(script);
      } catch (err) {
        console.warn('Failed to load Debug Test Utilities:', err);
      }
    }
  }, []);

  return null; // No UI, just initialization
}

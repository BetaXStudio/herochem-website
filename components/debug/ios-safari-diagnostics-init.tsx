'use client';

import { useEffect } from 'react';

/**
 * Initializes iOS Safari Diagnostics on client-side
 * This must be imported as a client component to load in browser
 */
export function IOSSafariDiagnosticsInit() {
  useEffect(() => {
    // Initialize iOS Safari diagnostics inline to avoid module resolution issues
    try {
      const script = document.createElement('script');
      script.innerHTML = `
        if (typeof window !== 'undefined') {
          const ua = navigator.userAgent;
          const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
          const isIOS = /iPad|iPhone|iPod/.test(ua);
          
          if (isIOS && isSafari) {
            window.__iOSSafariDiagnostics = {
              isIOS: true,
              isSafari: true,
              diagnostics: [],
              recordDiagnostic: function(metric, value) {
                this.diagnostics.push({ timestamp: Date.now(), metric, value });
              }
            };
            
            // Monitor pagehide event
            document.addEventListener('pagehide', () => {
              console.warn('⚠️ iOS Safari: App may be about to crash (pagehide event fired)');
              console.warn('💡 Safari killed the app due to memory pressure');
            });
            
            console.log('📱 iOS Safari Diagnostics enabled');
          }
        }
      `;
      document.head.appendChild(script);
    } catch (err) {
      console.warn('Failed to load iOS Safari Diagnostics:', err);
    }
  }, []);

  return null; // No UI, just initialization
}

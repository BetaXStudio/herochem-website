import Footer from 'components/layout/footer';
import { Navbar } from 'components/layout/navbar';
import { Suspense } from 'react';
import { AuthProvider } from '../components/auth/auth-context';
import { SimpleCartProvider } from '../components/cart/simple-cart-context';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark hide-scrollbar">
      <head>
        {/* Theme Color für verschiedene Browser */}
        <meta name="theme-color" content="#2c2c34" />
        <meta name="msapplication-navbutton-color" content="#2c2c34" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Viewport mit Safe Area Support */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Für Android Chrome */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="HeroChem" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-neutral-950 text-neutral-100 min-h-screen hide-scrollbar">
        <AuthProvider>
          <SimpleCartProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
            </Suspense>
            <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-[47px] hide-scrollbar">{children}</main>
            <Footer />
          </SimpleCartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

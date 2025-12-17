import { cookies } from "next/headers";
import { parseCartCookie } from "../lib/cart-cookie";
import ClientProviders from "./client-providers";
import "./globals.css";

export const metadata = {
  title: "HeroChem",
  description: "Premium supplements and performance enhancement products",
  openGraph: {
    title: "HeroChem",
    description: "Premium supplements and performance enhancement products",
    siteName: "HeroChem",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "HeroChem",
    description: "Premium supplements and performance enhancement products",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read cart from cookies on server-side for hydration
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("herochem-cart");
  const initialCart = parseCartCookie(
    cartCookie ? `herochem-cart=${cartCookie.value}` : undefined
  );
  return (
    <html lang="en" className="dark hide-scrollbar" data-scroll-behavior="smooth">
      <head>
        {/* Theme Color für verschiedene Browser */}
        <meta name="theme-color" content="#2d2d34" />
        <meta name="msapplication-navbutton-color" content="#2d2d34" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Viewport mit Safe Area Support */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no, maximum-scale=1, user-scalable=no"
        />

        {/* Für Android Chrome */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="HeroChem" />

        {/* Disable browser shopping features and image search overlays */}
        <meta name="google" content="noimageindex" />
        <meta name="google-site-verification" content="disabled" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon Links - Using HeroChem icon.jpg converted to various formats */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/jpeg" href="/icon.jpg" />
        <link rel="apple-touch-icon" href="/icon.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Additional favicon formats for better browser support */}
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/icon.jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/icon.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.jpg" />

        {/* Open Graph and Twitter Card images */}
        <meta property="og:image" content="/icon.jpg" />
        <meta name="twitter:image" content="/icon.jpg" />
        <meta name="msapplication-TileImage" content="/icon.jpg" />
      </head>
      <body className="bg-neutral-950 text-neutral-100 min-h-screen hide-scrollbar">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable zoom on iOS
              let lastTouchEnd = 0;
              document.addEventListener('touchend', function(event) {
                let now = new Date().getTime();
                if (now - lastTouchEnd <= 300) {
                  event.preventDefault();
                }
                lastTouchEnd = now;
              }, false);
              
              // Disable pinch zoom
              document.addEventListener('gesturestart', function(event) {
                event.preventDefault();
              });
              
              // Alternative pinch zoom prevention
              document.addEventListener('touchmove', function(event) {
                if (event.touches.length > 1) {
                  event.preventDefault();
                }
              }, { passive: false });
            `,
          }}
        />
        <ClientProviders initialCart={initialCart}>{children}</ClientProviders>
      </body>
    </html>
  );
}

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface CartItemImageProps {
  src: string | undefined;
  alt: string;
  size: number; // Size in pixels (e.g., 48 for 48x48)
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * VRAM-optimized cart item image component.
 * 
 * Uses IntersectionObserver to:
 * - Load images only when visible in the scroll container
 * - UNLOAD images when they scroll out of view to free VRAM
 * 
 * This prevents Safari VRAM crashes when cart has many items.
 */
export default function CartItemImage({
  src,
  alt,
  size,
  scrollContainerRef,
  className = "",
  style = {},
}: CartItemImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // IntersectionObserver for lazy loading AND unloading images
  // This prevents Safari VRAM crashes by unloading images when they scroll out of view
  useEffect(() => {
    const container = containerRef.current;
    const scrollRoot = scrollContainerRef?.current;
    
    // Wait until both container AND scroll root are available
    if (!container || !scrollRoot || !src) {
      return;
    }

    // Disconnect any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isMountedRef.current) return;
          
          if (entry.isIntersecting) {
            // Element is visible in scroll container - load the image
            setIsVisible(true);
            setImageSrc(src);
          } else {
            // Element is NOT visible - IMMEDIATELY unload the image to free VRAM
            setIsVisible(false);
            setImageSrc(null); // This removes the img from DOM, freeing VRAM
            setImageLoaded(false); // Reset for next load
          }
        });
        // IMPORTANT: No observer.unobserve() here! Must keep observing for unload detection
      },
      { 
        root: scrollRoot, // MUST use scroll container as root
        rootMargin: "50px 0px", // Small buffer - load 50px before visible
        threshold: 0 
      }
    );

    observerRef.current = observer;
    observer.observe(container);

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [src, scrollContainerRef]);

  const handleImageLoad = useCallback(() => {
    if (isMountedRef.current) {
      setImageLoaded(true);
    }
  }, []);

  // Check if this is an Astera brand image (they are larger and need 0.8 scaling)
  const isAsteraBrand = src?.toLowerCase().includes("astera") ?? false;

  // CPU-only rendering styles - avoid GPU acceleration to prevent VRAM crashes
  const cpuRenderingStyles: React.CSSProperties = {
    transform: "none",
    willChange: "auto",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    perspective: "none",
    contain: "layout style paint",
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden flex-shrink-0 bg-white flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        ...cpuRenderingStyles,
        ...style,
      }}
    >
      {/* Loading Animation - show when visible but image not loaded yet */}
      {isVisible && !imageLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "rgba(249, 250, 251, 0.9)",
            zIndex: 5,
            ...cpuRenderingStyles,
          }}
        >
          <div
            className="animate-spin rounded-full border-2 border-gray-300"
            style={{
              width: Math.max(16, size / 3),
              height: Math.max(16, size / 3),
              borderTopColor: "rgb(45, 45, 52)",
            }}
          />
        </div>
      )}
      
      {/* Only render img when visible - completely removes from DOM when not visible */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={size}
          height={size}
          className={`object-cover transition-opacity duration-200 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            ...cpuRenderingStyles,
            // Astera images are larger than Deus images, so scale them down to 80%
            width: isAsteraBrand ? size * 0.8 : size,
            height: isAsteraBrand ? size * 0.8 : size,
            margin: isAsteraBrand ? "auto" : undefined, // Center scaled image
          }}
          onLoad={handleImageLoad}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

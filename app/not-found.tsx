"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function NotFoundContent() {
  const [currentBrand, setCurrentBrand] = useState<"deus" | "astera" | null>(
    null,
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    // Prüfe URL Parameter für Brand
    const brandParam = searchParams?.get("brand");
    if (brandParam === "astera") {
      setCurrentBrand("astera");
      document.documentElement.classList.add("astera-brand-active");
    } else {
      setCurrentBrand("deus");
      document.documentElement.classList.remove("astera-brand-active");
    }
  }, [searchParams]);

  const isAstera = currentBrand === "astera";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      {/* 404 Number */}
      <h1
        className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
        style={{
          backgroundImage: isAstera
            ? "linear-gradient(135deg, #d67f3f 0%, #b8682d 100%)"
            : "linear-gradient(135deg, #e91111 0%, #cc0f0f 100%)",
        }}
      >
        404
      </h1>

      {/* Page Not Found Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-300 mb-8 text-center max-w-md text-lg leading-relaxed">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      {/* Divider Line */}
      <div
        className="h-[2px] w-24 mb-8"
        style={{
          background: isAstera
            ? "linear-gradient(90deg, transparent 0%, #d67f3f 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, #e91111 50%, transparent 100%)",
        }}
      />

      {/* Go Back Button */}
      <Link
        href="/"
        className="group relative overflow-hidden text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        style={{
          background: isAstera
            ? "linear-gradient(135deg, rgba(214, 127, 63, 0.9) 0%, rgba(214, 127, 63, 0.7) 100%)"
            : "linear-gradient(135deg, rgba(233, 17, 17, 0.9) 0%, rgba(233, 17, 17, 0.7) 100%)",
          border: `1px solid ${isAstera ? "rgba(214, 127, 63, 0.4)" : "rgba(233, 17, 17, 0.4)"}`,
          backdropFilter: "blur(10px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isAstera
            ? "linear-gradient(135deg, rgba(214, 127, 63, 1) 0%, rgba(184, 104, 45, 1) 100%)"
            : "linear-gradient(135deg, rgba(233, 17, 17, 1) 0%, rgba(204, 15, 15, 1) 100%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isAstera
            ? "linear-gradient(135deg, rgba(214, 127, 63, 0.9) 0%, rgba(214, 127, 63, 0.7) 100%)"
            : "linear-gradient(135deg, rgba(233, 17, 17, 0.9) 0%, rgba(233, 17, 17, 0.7) 100%)";
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </span>
      </Link>

      {/* Background Accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${isAstera ? "rgba(214, 127, 63, 0.03)" : "rgba(233, 17, 17, 0.03)"} 0%, transparent 70%)`,
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          Loading...
        </div>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}

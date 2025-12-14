"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Error({ reset }: { reset: () => void }) {
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
      {/* Error Icon */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{
          background: isAstera
            ? "linear-gradient(135deg, rgba(214, 127, 63, 0.2) 0%, rgba(214, 127, 63, 0.1) 100%)"
            : "linear-gradient(135deg, rgba(233, 17, 17, 0.2) 0%, rgba(233, 17, 17, 0.1) 100%)",
          border: `2px solid ${isAstera ? "rgba(214, 127, 63, 0.3)" : "rgba(233, 17, 17, 0.3)"}`,
        }}
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: isAstera ? "#d67f3f" : "#e91111" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>

      {/* Error Title */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
        style={{
          backgroundImage: isAstera
            ? "linear-gradient(135deg, #d67f3f 0%, #b8682d 100%)"
            : "linear-gradient(135deg, #e91111 0%, #cc0f0f 100%)",
        }}
      >
        Oops!
      </h1>

      {/* Error Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
        Something went wrong
      </h2>

      {/* Description */}
      <p className="text-gray-300 mb-8 text-center max-w-md text-lg leading-relaxed">
        There was an unexpected error. This could be a temporary issue, please
        try again.
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

      {/* Try Again Button */}
      <button
        onClick={() => reset()}
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
            className="w-5 h-5 transition-transform group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try Again
        </span>
      </button>

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

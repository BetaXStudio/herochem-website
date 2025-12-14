"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/modal-context";

type CategoryLabel =
  | "INJECTION"
  | "ORAL"
  | "POST CYCLE"
  | "FAT BURN"
  | "SEXUAL WELLNESS"
  | "PEPTIDES & HGH"
  | "SARMS"
  | "AMINO ACIDS"
  | "ALL PRODUCTS";

const categories: {
  label: CategoryLabel;
  icon: string;
  path: string;
  param: string;
}[] = [
  {
    label: "ALL PRODUCTS",
    icon: "/products.png",
    path: "/categories",
    param: "",
  },
  {
    label: "INJECTION",
    icon: "/inject.png",
    path: "/categories",
    param: "INJECTION",
  },
  { label: "ORAL", icon: "/oral.png", path: "/categories", param: "ORAL" },
  {
    label: "POST CYCLE",
    icon: "/post.png",
    path: "/categories",
    param: "POST CYCLE",
  },
  {
    label: "FAT BURN",
    icon: "/fatburn.png",
    path: "/categories",
    param: "FAT BURN",
  },
  {
    label: "SEXUAL WELLNESS",
    icon: "/sexual.png",
    path: "/categories",
    param: "SEXUAL WELLNESS",
  },
  {
    label: "PEPTIDES & HGH",
    icon: "/peptides.png",
    path: "/categories",
    param: "PEPTIDES %26 HGH",
  },
  { label: "SARMS", icon: "/sarms.png", path: "/categories", param: "SARMS" },
  {
    label: "AMINO ACIDS",
    icon: "/amino.png",
    path: "/categories",
    param: "AMINO ACIDS",
  },
];

export default function SearchSidebar() {
  const { setFAQModalOpen, setContactModalOpen } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to generate category URLs
  const generateCategoryUrl = (category: (typeof categories)[0]) => {
    if (!category.param) {
      return category.path; // ALL PRODUCTS
    }
    return `${category.path}?category=${category.param}`;
  };

  return (
    <>
      <div
        className={`w-64 flex flex-col h-full transition-opacity duration-900 ${mounted ? "opacity-100" : "opacity-0"}`}
        style={{
          paddingTop: "0.25rem",
          background: "white",
          minHeight: "100vh",
          zIndex: 30,
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Sidebar Header */}
        <div className="px-4 mb-8" style={{ paddingTop: "18pt" }}>
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/categories.png"
              alt="Categories Icon"
              className="w-7 h-7 object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
              }}
            />
            <h1 className="text-xl font-bold text-gray-900 uppercase">
              Categories
            </h1>
          </div>
          <div
            className="h-[2px] mt-4"
            style={{
              background:
                "linear-gradient(90deg, #ef4444 0%, rgba(239, 68, 68, 0.1) 100%)",
              width: "100%",
            }}
          />
        </div>

        {/* Navigation Items */}
        <nav className="px-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.label}>
                <Link
                  href={generateCategoryUrl(category)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-gray-700 hover:text-gray-900 hover:transform hover:scale-[1.02] hover:shadow-lg block"
                  style={{
                    background: "rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(239, 68, 68, 0.05)";
                    e.currentTarget.style.border =
                      "1px solid rgba(239, 68, 68, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                    e.currentTarget.style.border =
                      "1px solid rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <img
                    src={category.icon}
                    alt={`${category.label} Icon`}
                    className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
                    }}
                  />
                  <span className="truncate">{category.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* FAQ and Contact Section */}
        <div className="px-4 mt-8 pb-8">
          <div
            className="h-[2px] mb-4"
            style={{
              background:
                "linear-gradient(90deg, #ef4444 0%, rgba(239, 68, 68, 0.1) 100%)",
              width: "100%",
            }}
          />
          <ul className="space-y-2">
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://deusmedical.com/verify/verify-product/",
                    "_blank",
                  )
                }
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-gray-700 hover:text-gray-900 hover:transform hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239, 68, 68, 0.05)";
                  e.currentTarget.style.border =
                    "1px solid rgba(239, 68, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.border =
                    "1px solid rgba(0, 0, 0, 0.05)";
                }}
              >
                <span className="truncate">VERIFY DEUS</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => window.open("https://asteracheck.com", "_blank")}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-gray-700 hover:text-gray-900 hover:transform hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239, 68, 68, 0.05)";
                  e.currentTarget.style.border =
                    "1px solid rgba(239, 68, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.border =
                    "1px solid rgba(0, 0, 0, 0.05)";
                }}
              >
                <span className="truncate">VERIFY ASTERA</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setFAQModalOpen(true)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-gray-700 hover:text-gray-900 hover:transform hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 50,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239, 68, 68, 0.05)";
                  e.currentTarget.style.border =
                    "1px solid rgba(239, 68, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.border =
                    "1px solid rgba(0, 0, 0, 0.05)";
                }}
              >
                <span className="truncate">FAQ</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-gray-700 hover:text-gray-900 hover:transform hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: 50,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239, 68, 68, 0.05)";
                  e.currentTarget.style.border =
                    "1px solid rgba(239, 68, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.border =
                    "1px solid rgba(0, 0, 0, 0.05)";
                }}
              >
                <span className="truncate">CONTACT</span>
              </button>
            </li>
            <li>
              <Link
                href="/about"
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-gray-700 hover:text-gray-900 hover:transform hover:scale-[1.02] hover:shadow-lg block"
                style={{
                  background: "rgba(0, 0, 0, 0.02)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239, 68, 68, 0.05)";
                  e.currentTarget.style.border =
                    "1px solid rgba(239, 68, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                  e.currentTarget.style.border =
                    "1px solid rgba(0, 0, 0, 0.05)";
                }}
              >
                <span className="truncate">ABOUT</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

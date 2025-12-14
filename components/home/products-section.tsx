"use client";

import {
  ArrowRightIcon,
  BeakerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const productCategories = [
  {
    id: "injectables",
    title: "Injektionspräparate",
    description: "Hochreine Injektionslösungen für optimale Bioverfügbarkeit",
    icon: "💉",
    featured: true,
    image: "/inject.png",
    productCount: 24,
  },
  {
    id: "orals",
    title: "Orale Präparate",
    description: "Hochwertige orale Formulierungen für einfache Anwendung",
    icon: "💊",
    featured: true,
    image: "/oral.png",
    productCount: 18,
  },
  {
    id: "peptides",
    title: "Peptide",
    description: "Synthetische Peptide für Forschung und Entwicklung",
    icon: "🧬",
    featured: false,
    image: "/peptides.png",
    productCount: 12,
  },
  {
    id: "sarms",
    title: "SARMs",
    description: "Selektive Androgenrezeptor-Modulatoren",
    icon: "⚗️",
    featured: false,
    image: "/sarms.png",
    productCount: 8,
  },
  {
    id: "fatburner",
    title: "Fat Burner",
    description: "Effektive Lösungen für Körperkomposition",
    icon: "🔥",
    featured: false,
    image: "/fatburn.png",
    productCount: 6,
  },
  {
    id: "post-cycle",
    title: "Post Cycle",
    description: "PCT-Protokolle für optimale Regeneration",
    icon: "🔄",
    featured: false,
    image: "/post.png",
    productCount: 10,
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "TestoMax Elite 250mg",
    category: "Injektionspräparate",
    price: 45.0,
    image: "/products/testomax.jpg",
    purity: "99.7%",
    inStock: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "AnaMax 50mg",
    category: "Orale Präparate",
    price: 65.0,
    image: "/products/anamax.jpg",
    purity: "99.4%",
    inStock: true,
    bestseller: false,
  },
  {
    id: 3,
    name: "TrenMax 100mg",
    category: "Injektionspräparate",
    price: 85.0,
    image: "/products/trenmax.jpg",
    purity: "99.8%",
    inStock: true,
    bestseller: true,
  },
];

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

function ProductsModal({ isOpen, onClose, category }: ProductsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur - darker background */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          animation: "backdropFadeIn 0.3s ease-out",
        }}
        onClick={onClose}
      />

      {/* Modal with animation */}
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden"
        style={{
          backgroundColor: "white",
          border: "2px solid rgb(45,45,52)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="sticky top-0 flex items-center justify-between p-6 border-b"
          style={{
            borderColor: "rgb(45,45,52)",
            backgroundColor: "rgb(45,45,52)",
          }}
        >
          <div>
            <h2
              className="text-xl font-semibold text-white"
              style={{ fontFamily: "Calibri, Arial, sans-serif" }}
            >
              {category ? `${category} - Produkte` : "Alle Produkte"}
            </h2>
            <p className="text-gray-300 text-sm">
              Entdecken Sie unsere pharmazeutischen Lösungen
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-600 rounded-md transition-colors duration-200 text-white text-xl"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">💊</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    {product.bestseller && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        Bestseller
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600">{product.category}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      €{product.price}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Reinheit: {product.purity}
                    </span>
                  </div>

                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Zum Warenkorb
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              Mehr Produkte in unserem vollständigen Katalog
            </p>
            <Link
              href="/categories"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Vollständigen Katalog anzeigen
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const openModal = (category?: string) => {
    setSelectedCategory(category || "");
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BeakerIcon className="h-4 w-4" />
              <span>Produktkategorien</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Unser<span className="text-red-600"> Produktsortiment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie unsere umfassende Auswahl an pharmazeutischen
              Produkten, alle laborgeprüft und in höchster Qualität gefertigt.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  category.featured ? "lg:col-span-1" : ""
                }`}
                onClick={() => openModal(category.title)}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Category Image */}
                  <div className="relative w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    {category.icon}
                    {category.featured && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span>{category.productCount} Produkte</span>
                      <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Products */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Bestseller Produkte
              </h3>
              <p className="text-gray-600 text-lg">
                Unsere meistverkauften und am besten bewerteten Produkte
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal()}
                >
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl">💊</span>
                    {product.bestseller && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Bestseller
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600">{product.category}</p>

                    {/* Product Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">
                        Reinheit: {product.purity}
                      </span>
                      <span
                        className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}
                      >
                        {product.inStock ? "Auf Lager" : "Ausverkauft"}
                      </span>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xl font-bold text-gray-900">
                        €{product.price}
                      </span>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Alle Produkte anzeigen
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={selectedCategory}
      />
    </>
  );
}

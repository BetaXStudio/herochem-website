"use client";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { type ProductDetail } from '../../lib/product-details-database';
import { useSimpleCart } from '../cart/simple-cart-context';

interface SearchProductModalProps {
  product: ProductDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SearchProductModal({ product, isOpen, onClose }: SearchProductModalProps) {
  const { addItem } = useSimpleCart();

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      onClose();
    }
  };

  if (!isOpen || !product) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2 md:p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-red-600 transition-colors duration-200 z-10"
        style={{
          background: 'rgba(233, 17, 17, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        ✕
      </button>

      {/* Modal Content */}
      <div 
        className="w-full max-w-[95vw] md:max-w-4xl max-h-[85vh] md:max-h-[80vh] overflow-y-auto overflow-x-hidden p-3 md:p-6 hide-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Product Image and Basic Info - No white background */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg mx-auto md:mx-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.2) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{product.name}</h2>
            <p className="text-gray-300 mb-3 text-sm md:text-base">{product.description}</p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl md:text-3xl font-bold text-white">€{product.price.toFixed(2)}</span>
              {product.filterType && (
                <span className="bg-[#e91111] text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                  {product.filterType}
                </span>
              )}
            </div>
            <div className="flex gap-2 text-xs md:text-sm mb-4">
              <span className="bg-gray-800 text-white px-2 py-1 rounded capitalize">
                {product.category.toLowerCase()}
              </span>
              <span className="bg-gray-800 text-white px-2 py-1 rounded capitalize">
                {product.brand}
              </span>
            </div>
            
            {/* Add to Cart Button - Mobile optimized */}
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-[#e91111] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              style={{
                minHeight: '48px' // Touch-friendly height
              }}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 8.5M7 13l-2.5-8.5m0 0L4.6 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" 
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Details - With white background container */}
        <div 
          className="text-gray-700 leading-relaxed mt-6 rounded-2xl p-4 md:p-6"
          style={{ 
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
        >
          <style dangerouslySetInnerHTML={{ 
            __html: `
              .product-details {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 0;
                line-height: 1.6;
                background: transparent !important;
                border-radius: 0;
                box-shadow: none !important;
              }
              .product-title {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                color: #1a1a1a;
                border-bottom: 3px solid #3b82f6;
                padding-bottom: 0.75rem;
                text-align: center;
              }
              .chemical-description {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 2rem;
                color: #374151;
                background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
                padding: 1.5rem;
                border-radius: 8px;
                border-left: 5px solid #3b82f6;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .product-description {
                font-size: 1rem;
                color: #4b5563;
              }
              .product-description p {
                margin-bottom: 1.25rem;
                text-align: justify;
                padding: 0.75rem;
                background: #f9fafb !important;
                border-radius: 6px;
                border-left: 3px solid #e5e7eb;
              }
              .product-description p:last-child {
                margin-bottom: 0;
              }
              .product-description strong {
                color: #1f2937;
                font-weight: 600;
              }
            `
          }} />
          <div 
            className="product-details"
            dangerouslySetInnerHTML={{ 
              __html: product.details
                .replace(/<style[\s\S]*?<\/style>/gi, '') // Remove embedded style tags only
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

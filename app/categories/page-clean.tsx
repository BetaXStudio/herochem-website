"use client";
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSimpleCart } from '../../components/cart/simple-cart-context';
import CategoriesSidebar from './CategoriesSidebar';
import { 
  products, 
  getFilteredProducts, 
  getAvailableFilters,
  type CategoryLabel,
  type Brand,
  type Product 
} from '../../lib/products-database';

export const dynamic = 'force-dynamic';

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>}>
      <CategoriesContent />
    </Suspense>
  );
}

function CategoriesContent() {
  const [currentCategory, setCurrentCategory] = useState<CategoryLabel>('ALL PRODUCTS');
  const [selectedBrand, setSelectedBrand] = useState<'deus' | 'astera' | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [mounted, setMounted] = useState(false);
  const [detailsContent, setDetailsContent] = useState<string>("");

  const searchParams = useSearchParams();
  const { addItem } = useSimpleCart();

  // Ensure component is mounted before rendering dynamic content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter products based on category, brand, filter type, and search
  const filteredProducts = useMemo(() => {
    let filtered = getFilteredProducts(currentCategory, selectedBrand, selectedFilter, sortBy);
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [currentCategory, selectedBrand, selectedFilter, searchTerm, sortBy]);

  // Pagination
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, productsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get unique filter types for the current category
  const availableFilters = useMemo(() => {
    return getAvailableFilters(currentCategory);
  }, [currentCategory]);

  // Handle URL parameters
  useEffect(() => {
    if (!mounted) return;
    
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam !== currentCategory) {
      setCurrentCategory(categoryParam as CategoryLabel);
    }
  }, [searchParams, currentCategory, mounted]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory, selectedBrand, selectedFilter, searchTerm, sortBy]);

  // Add to cart functionality
  const handleAddToCart = useCallback((e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, [addItem]);

  // Show product details
  const showProductDetails = useCallback((product: Product) => {
    setSelectedProduct(product);
    setDetailsContent(product.description);
    setShowDetailsModal(true);
  }, []);

  // Don't render dynamic content until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex min-h-screen bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 shadow-lg">
          <CategoriesSidebar 
            currentCategory={currentCategory}
            onSelectCategory={setCurrentCategory}
          />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-3xl mb-6">
              {currentCategory === 'ALL PRODUCTS' ? 'All Products' : currentCategory}
              <span className="text-gray-400 text-base ml-2">
                ({filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''})
              </span>
            </h1>
            
            {/* Search and Sort Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price-low' | 'price-high')}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:border-red-500"
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {/* Filters */}
            <div className="mb-6 space-y-4">
              {/* Brand Selection */}
              <div>
                <h3 className="text-white text-lg mb-3">Brand</h3>
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-2 rounded ${
                      selectedBrand === null
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedBrand(null)}
                  >
                    All Brands
                  </button>
                  <button
                    className={`px-4 py-2 rounded ${
                      selectedBrand === 'deus'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedBrand('deus')}
                  >
                    Deus Medical
                  </button>
                  <button
                    className={`px-4 py-2 rounded ${
                      selectedBrand === 'astera'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedBrand('astera')}
                  >
                    Astera Labs
                  </button>
                </div>
              </div>

              {/* Filter Type Selection */}
              {availableFilters.length > 0 && (
                <div>
                  <h3 className="text-white text-lg mb-3">Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-4 py-2 rounded ${
                        selectedFilter === ''
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                      onClick={() => setSelectedFilter('')}
                    >
                      All Types
                    </button>
                    {availableFilters.map(filter => (
                      <button
                        key={filter}
                        className={`px-4 py-2 rounded ${
                          selectedFilter === filter
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                        onClick={() => setSelectedFilter(filter || '')}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {paginatedProducts.map(product => (
                <div key={product.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 group">
                  <div className="aspect-square bg-gray-600 rounded mb-3 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <button 
                        onClick={(e) => handleAddToCart(e, product)}
                        className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                      >
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => showProductDetails(product)}
                        className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors text-sm"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-300 text-xs mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-bold">€{product.price.toFixed(2)}</span>
                    {product.filterType && (
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                        {product.filterType}
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded ${
                        currentPage === page
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg mb-4">No products found for the selected filters.</p>
                <button 
                  onClick={() => {
                    setSelectedBrand(null);
                    setSelectedFilter('');
                    setSearchTerm('');
                    setSortBy('name');
                  }}
                  className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Product Details Modal - Only render after mount */}
      {mounted && showDetailsModal && selectedProduct && createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowDetailsModal(false)}
        >
          <div 
            className="bg-gray-800 rounded-lg p-6 max-w-lg w-full mx-4 max-h-96 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-xl font-bold">{selectedProduct.name}</h2>
              <button 
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-square bg-gray-600 rounded mb-4 flex items-center justify-center">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-300 mb-4">{detailsContent}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-xl font-bold">€{selectedProduct.price.toFixed(2)}</span>
              {selectedProduct.filterType && (
                <span className="bg-red-600 text-white px-3 py-1 rounded">
                  {selectedProduct.filterType}
                </span>
              )}
            </div>
            <button 
              onClick={(e) => {
                handleAddToCart(e, selectedProduct);
                setShowDetailsModal(false);
              }}
              className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* Cart Toast - Only render after mount */}
      {mounted && showToast && createPortal(
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Product added to cart!
        </div>,
        document.body
      )}
    </>
  );
}

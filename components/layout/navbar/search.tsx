'use client';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Form from 'next/form';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getProductStats, searchProductsDatabase } from '../../../lib/search-products';
export default function Search() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams?.get('q') || '');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle search query changes using the new product database
  useEffect(() => {
    if (query.trim()) {
      const results = searchProductsDatabase(query, 8); // Limit to 8 results
      setSearchResults(results);
      setIsDropdownOpen(results.length > 0 && isFocused);
      
      // Debug: Log search results and stats
      console.log(`🔍 Search "${query}" found ${results.length} results`);
      if (query.length > 2) {
        const stats = getProductStats();
        console.log(`📊 Product Database Stats:`, stats);
      }
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  }, [query, isFocused]);

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (searchResults.length > 0) {
      setIsDropdownOpen(true);
    }
    
    e.target.style.boxShadow = 'inset 0 3px 6px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.7), inset 0 -1px 0 rgba(255, 255, 255, 0.08), 0 0 0 1px rgba(233, 17, 17, 0.3)';
    e.target.style.backgroundColor = 'rgba(40, 40, 47, 0.9)';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Delay to allow clicking on dropdown items
    setTimeout(() => {
      if (!searchRef.current?.contains(document.activeElement)) {
        setIsFocused(false);
        setIsDropdownOpen(false);
      }
    }, 150);
    
    e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.05)';
    e.target.style.backgroundColor = 'rgba(45, 45, 52, 0.8)';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (product: any) => {
    setQuery('');
    setIsDropdownOpen(false);
    setIsFocused(false);
    
    // Navigate to categories page with the specific category and trigger Details button
    // The URL will include parameters to identify the specific product
    const categoryUrl = `/categories?category=${encodeURIComponent(product.category)}&product=${encodeURIComponent(product.id)}&action=details`;
    window.location.href = categoryUrl;
  };

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className="relative">
      <Form action="/search" className="relative w-full" style={{ maxWidth: '500px', width: '100%' }}>
        <input
          ref={inputRef}
          key={searchParams?.get('q')}
          type="text"
          name="q"
          placeholder="Search for Products..."
          autoComplete="off"
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
          data-ms-editor="false"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="text-md w-full rounded-lg px-4 py-1 pr-20 text-white placeholder:text-neutral-300 md:text-sm focus:outline-none focus:ring-0"
          style={{
            backgroundColor: 'rgba(45, 45, 52, 0.8)',
            border: 'none',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
            minWidth: '380px',
            width: '100%'
          }}
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
          <MagnifyingGlassIcon className="h-4 text-neutral-300" />
        </div>
      </Form>

      {/* Search Results Dropdown */}
      {isDropdownOpen && searchResults.length > 0 && (
        <div 
          className="absolute top-full left-0 right-0 mt-1 rounded-lg z-50 max-h-96 overflow-y-auto overflow-x-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          <div className="py-2">
            {searchResults.map((product) => (
              <button
                key={product.id}
                onClick={() => handleResultClick(product)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:translate-x-2 transition-all duration-200 text-left group relative"
              >
                {/* Custom red border that matches image height */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-[#e91111] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                {/* Product Image */}
                <div 
                  className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, rgba(64,64,74,0.3) 0%, rgba(45,45,52,0.3) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={16}
                    height={16}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white truncate group-hover:text-[#e91111] transition-colors duration-200">
                    {product.name}
                  </h4>
                  <p className="text-xs text-neutral-400 truncate group-hover:text-neutral-300 transition-colors duration-200">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-[#e91111] text-white px-2 py-0.5 rounded-md font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                {/* Price */}
                <div className="text-right flex-shrink-0">
                  <span className="text-sm font-bold text-white group-hover:text-[#e91111] transition-colors duration-200">
                    €{product.price.toFixed(2)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <form className="relative w-full" style={{ maxWidth: '500px', width: '100%' }}>
      <input
        placeholder="Search for Products..."
        className="w-full rounded-lg px-4 py-1 text-sm text-white placeholder:text-neutral-300 focus:outline-none focus:ring-0"
        style={{
          backgroundColor: 'rgba(45, 45, 52, 0.8)',
          border: 'none',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
          minWidth: '380px',
          width: '100%'
        }}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-neutral-300" />
      </div>
    </form>
  );
}

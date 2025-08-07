"use client";
import { useAuth } from 'components/auth/auth-context';
import AuthModal from 'components/auth/auth-modal';
import SimpleCartModal from 'components/cart/simple-cart-modal';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFadeOut, setIsLoadingFadeOut] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  let closeTimeout: NodeJS.Timeout | null = null;

  const handleDropdownEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleCategoryClick = () => {
    setIsLoading(true);
    setIsLoadingFadeOut(false);
    setDropdownOpen(false);
    
    // Loading-Screen für 800ms anzeigen, dann fade-out
    setTimeout(() => {
      setIsLoadingFadeOut(true);
      // Nach fade-out animation loading screen entfernen
      setTimeout(() => {
        setIsLoading(false);
        setIsLoadingFadeOut(false);
      }, 300); // 300ms für fade-out
    }, 500); // 500ms loading time
  };

  // Reset loading state when component mounts
  useEffect(() => {
    setIsLoading(false);
    setIsLoadingFadeOut(false);
  }, []);
  
  const menu = [
    { title: 'Home', path: '/' },
    { title: 'SHOP', path: '/categories' }
  ];
  
  const subCategories = [
    'INJECTION',
    'ORAL',
    'POST CYCLE',
    'FAT BURN',
    'SEXUAL WELLNESS',
    'PEPTIDES & HGH',
    'SARMS',
    'AMINO ACIDS',
    'ALLE PRODUKTE'
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between py-1 px-2 lg:px-4 bg-[rgb(64,64,74)]"
      style={{ 
        boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.5), 0 4px 8px -2px rgba(0, 0, 0, 0.15)',
        zIndex: 10001
      }}
    >
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center gap-2 md:gap-4 lg:gap-6">
        <div className="flex w-full md:w-1/3 gap-2 md:gap-4 lg:gap-6">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            style={{ marginLeft: '6pt' }}
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              <span>hero</span><span style={{ color: '#eb1313' }}>chem</span>
            </div>
          </Link>
          <ul className="hidden gap-2 md:gap-4 lg:gap-6 text-sm md:flex md:items-center">
            {menu.map((item) => (
              <li key={item.title} className="relative">
                {item.title === 'SHOP' ? (
                  <div
                    className="inline-block w-full"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded cursor-pointer flex items-center gap-1"
                      style={{ textDecoration: 'none' }}
                      onClick={handleCategoryClick}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector('img');
                        if (img) {
                          img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector('img');
                        if (img) {
                          img.style.filter = 'brightness(0) invert(1)';
                        }
                      }}
                    >
                      <img 
                        src="/categories.png" 
                        alt="Categories Icon" 
                        className="object-contain transition-[filter] duration-300 ease-in-out" 
                        style={{ 
                          filter: 'brightness(0) invert(1)', 
                          width: '22px !important', 
                          height: '22px !important', 
                          minWidth: '22px', 
                          minHeight: '22px' 
                        }}
                      />
                      {item.title.toUpperCase()}
                    </Link>
                    <div
                      className="dropdown absolute top-full z-50 transition-all duration-600"
                      style={{
                        minWidth: '220px',
                        maxWidth: '340px',
                        width: 'max-content',
                        left: '50%',
                        marginTop: '22pt',
                        opacity: dropdownOpen ? 1 : 0,
                        transform: dropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-16px)',
                        pointerEvents: dropdownOpen ? 'auto' : 'none',
                        transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    >
                      <div className="relative flex flex-col items-center mt-0">
                        <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 60, pointerEvents: 'none' }}>
                          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 16L0 0H32L16 16Z" fill="rgb(64,64,74)"/>
                            <path d="M16 16L0 0H32L16 16Z" fillOpacity=".2"/>
                          </svg>
                        </span>
                        <ul className="flex flex-col items-center bg-[rgb(64,64,74)] shadow-lg shadow-black/30 border-t border-neutral-700 mt-0 pt-4 text-center" style={{ borderRadius: '0 0 10px 10px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.25), 0 -2px 8px 0 rgba(0,0,0,0.15)' }}>
                          {subCategories.map(sub => (
                            <li key={sub} className="w-full">
                              <Link
                                href={`/categories?category=${encodeURIComponent(sub)}`}
                                className={`block px-4 py-2 w-full text-white uppercase transition-colors duration-200 hover:bg-[#e91111] hover:text-white text-center${sub === subCategories[subCategories.length - 1] ? ' rounded-b-lg' : ''}`}
                                style={{ textDecoration: 'none', borderRadius: 0 }}
                                onClick={handleCategoryClick}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                          <li style={{ height: '10pt' }} aria-hidden="true"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    prefetch={true}
                    className={`text-white uppercase hover:text-[#e91111] px-2 py-1 rounded flex items-center gap-1${item.title === 'Über uns' ? ' whitespace-nowrap' : ''}`}
                    style={{ 
                      textDecoration: 'none', 
                      marginLeft: item.title === 'Home' ? '-15px' : undefined,
                      marginRight: item.title === 'Home' ? '-5pt' : undefined
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.filter = 'brightness(0) invert(1)';
                      }
                    }}
                  >
                    <img 
                      src="/home.png" 
                      alt="Home Icon" 
                      className="object-contain transition-[filter] duration-300 ease-in-out" 
                      style={{ 
                        filter: 'brightness(0) invert(1)', 
                        width: '20px !important', 
                        height: '20px !important', 
                        minWidth: '20px', 
                        minHeight: '20px' 
                      }}
                    />
                    {item.title.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3 max-w-xs lg:max-w-md xl:max-w-lg w-full gap-2 md:gap-4 lg:gap-6">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3 gap-2 md:gap-4 lg:gap-6">
          <div className="flex items-center" style={{ gap: 'calc(0.5rem - 5pt)' }}>
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/account"
                  className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded flex items-center gap-1 text-sm whitespace-nowrap"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img');
                    if (img) {
                      img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img');
                    if (img) {
                      img.style.filter = 'brightness(0) invert(1)';
                    }
                  }}
                >
                  <img 
                    src="/login.png" 
                    alt="Account Icon" 
                    className="object-contain transition-[filter] duration-300 ease-in-out" 
                    style={{ 
                      filter: 'brightness(0) invert(1)', 
                      width: '22px !important', 
                      height: '22px !important', 
                      minWidth: '22px', 
                      minHeight: '22px',
                      flexShrink: 0
                    }}
                  />
                  MY ACCOUNT
                </Link>
                <button
                  onClick={signOut}
                  className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded text-sm whitespace-nowrap mr-3"
                  style={{ textDecoration: 'none' }}
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded flex items-center gap-1 text-sm whitespace-nowrap mr-3"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)';
                  }
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'brightness(0) invert(1)';
                  }
                }}
              >
                <img 
                  src="/login.png" 
                  alt="Login Icon" 
                  className="object-contain transition-[filter] duration-300 ease-in-out" 
                  style={{ 
                    filter: 'brightness(0) invert(1)', 
                    width: '22px !important', 
                    height: '22px !important', 
                    minWidth: '22px', 
                    minHeight: '22px',
                    flexShrink: 0
                  }}
                />
                LOGIN / REGISTER
              </button>
            )}
            <SimpleCartModal />
          </div>
        </div>
      </div>
      
      {/* Loading Screen */}
      {isLoading && (
        <div 
          className={`fixed inset-0 backdrop-blur-sm bg-black bg-opacity-20 flex items-center justify-center z-[9999] transition-opacity duration-300 ${
            isLoadingFadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#e91111]"></div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onCloseAction={() => setAuthModalOpen(false)} 
      />
    </nav>
  );
}

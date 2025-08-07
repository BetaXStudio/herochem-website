"use client";
import { useAuth } from 'components/auth/auth-context';
import AuthModal from 'components/auth/auth-modal';
import SimpleCartModal from 'components/cart/simple-cart-modal';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

export function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFadeOut, setIsLoadingFadeOut] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut, isHydrated } = useAuth();
  let closeTimeout: NodeJS.Timeout | null = null;

  // Check if we're on the account page
  const isAccountPage = pathname?.startsWith('/account');

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
    
    // Show loading screen for 800ms, then fade-out
    setTimeout(() => {
      setIsLoadingFadeOut(true);
      // Remove loading screen after fade-out animation
      setTimeout(() => {
        setIsLoading(false);
        setIsLoadingFadeOut(false);
      }, 300); // 300ms for fade-out
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
    'ALL PRODUCTS'
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between py-1 px-2 lg:px-4"
      style={{ 
        background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        zIndex: 10025
      }}
    >
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center gap-0 md:gap-0 lg:gap-0">
        <div className="flex w-full md:w-1/4 gap-0 md:gap-0 lg:gap-0">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex items-center md:w-auto lg:-mr-[18px] ml-[6pt] md:ml-[40pt]"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              <span>hero</span><span style={{ color: '#eb1313' }}>chem</span>
            </div>
          </Link>
          <ul className="hidden gap-0 md:gap-0 lg:gap-0 text-sm md:flex md:items-center">
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
                      className="text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 group"
                      style={{ 
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}
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
                        src="/shop.png" 
                        alt="Shop Icon" 
                        className="object-contain w-[22px] h-[22px] min-w-[22px] min-h-[22px] max-w-[22px] max-h-[22px] flex-shrink-0 transition-all duration-300" 
                        style={{ 
                          filter: 'brightness(0) invert(1)'
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
                        <span style={{ position: 'absolute', top: '-16.5px', left: '50%', transform: 'translateX(-50%) rotate(180deg)', zIndex: 60, pointerEvents: 'none' }}>
                          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(64,64,74,0.95)" />
                                <stop offset="100%" stopColor="rgba(45,45,52,0.95)" />
                              </linearGradient>
                            </defs>
                            <path d="M12 12L0 0H24L12 12Z" fill="url(#arrowGradient)"/>
                            <path d="M12 12L0 0H24L12 12Z" fill="rgba(255,255,255,0.1)"/>
                            <line x1="0" y1="0" x2="12" y2="12" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                            <line x1="24" y1="0" x2="12" y2="12" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                          </svg>
                        </span>
                        <ul className="flex flex-col items-center shadow-lg shadow-black/30 border-t mt-0 pt-4 text-center" style={{ 
                          borderRadius: '0 0 16px 16px', 
                          background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                        }}>
                          {subCategories.map(sub => (
                            <li key={sub} className="w-full">
                              <Link
                                href={`/categories?category=${encodeURIComponent(sub)}`}
                                className={`block px-6 py-3 w-full text-white uppercase text-center hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/30 hover:text-white hover:shadow-lg${sub === subCategories[subCategories.length - 1] ? ' rounded-b-lg' : ''}`}
                                style={{ 
                                  textDecoration: 'none', 
                                  borderRadius: 0,
                                  fontWeight: '500',
                                  fontSize: '14px',
                                  letterSpacing: '0.5px',
                                  transition: 'background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease'
                                }}
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
                    className={`text-white uppercase hover:text-[#e91111] px-4 py-2 rounded-lg flex items-center gap-2 group${item.title === 'Über uns' ? ' whitespace-nowrap' : ''}`}
                    style={{ 
                      textDecoration: 'none', 
                      marginLeft: item.title === 'Home' ? '50px' : undefined,
                      marginRight: item.title === 'Home' ? '-5px' : undefined,
                      fontWeight: '600'
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
                      className="object-contain w-[21px] h-[21px] min-w-[21px] min-h-[21px] max-w-[21px] max-h-[21px] flex-shrink-0 transition-all duration-300" 
                      style={{ 
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                    {item.title.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/2 w-full gap-2 md:gap-4 lg:gap-6" style={{ minWidth: '400px', maxWidth: 'none' }}>
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/4 gap-2 md:gap-4 lg:gap-6">
          <div className="flex items-center" style={{ gap: 'calc(0.5rem - 5pt)' }}>
            {/* Always render the same structure - only functionality changes */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/account"
                  className={`uppercase px-2 py-1 rounded flex items-center gap-1 text-sm whitespace-nowrap group ${
                    isAccountPage 
                      ? 'text-[#e91111]' 
                      : 'text-white hover:text-[#e91111]'
                  }`}
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    if (!isAccountPage) {
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isAccountPage) {
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.filter = 'brightness(0) invert(1)';
                      }
                    }
                  }}
                >
                  <img 
                    src="/login.png" 
                    alt="Account Icon" 
                    className="object-contain w-[22px] h-[22px] min-w-[22px] min-h-[22px] max-w-[22px] max-h-[22px] flex-shrink-0" 
                    style={{ 
                      filter: isAccountPage 
                        ? 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)'
                        : 'brightness(0) invert(1)'
                    }}
                  />
                  MY ACCOUNT
                </Link>
                <button
                  onClick={signOut}
                  className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded text-sm whitespace-nowrap mr-3 max-[800px]:hidden"
                  style={{ textDecoration: 'none' }}
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <button
                onClick={isHydrated ? () => setAuthModalOpen(true) : undefined}
                className="text-white uppercase hover:text-[#e91111] px-2 py-1 rounded flex items-center gap-1 text-sm whitespace-nowrap mr-3 group"
                style={{ textDecoration: 'none' }}
                onMouseEnter={isHydrated ? (e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7490%) hue-rotate(357deg) brightness(97%) contrast(108%)';
                  }
                } : undefined}
                onMouseLeave={isHydrated ? (e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) {
                    img.style.filter = 'brightness(0) invert(1)';
                  }
                } : undefined}
              >
                <img 
                  src="/login.png" 
                  alt="Login Icon" 
                  className="object-contain w-[22px] h-[22px] min-w-[22px] min-h-[22px] max-w-[22px] max-h-[22px] flex-shrink-0 transition-all duration-300" 
                  style={{ 
                    filter: 'brightness(0) invert(1)'
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
      {isHydrated && (
        <AuthModal 
          isOpen={authModalOpen} 
          onCloseAction={() => setAuthModalOpen(false)} 
        />
      )}
    </nav>
  );
}

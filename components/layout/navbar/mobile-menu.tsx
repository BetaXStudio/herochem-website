'use client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, Suspense, useEffect, useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';
import Search, { SearchSkeleton } from './search';
import { FAQModal, ContactModal } from '../../home/community-section';

// Temporary type definition
type Menu = {
  title: string;
  path: string;
};

// Categories mit Icons wie in der Sidebar
const categories: { label: string; icon: string; path: string; param: string }[] = [
  { label: 'ALL PRODUCTS', icon: '/products.png', path: '/categories', param: '' },
  { label: 'INJECTION', icon: '/inject.png', path: '/categories', param: 'INJECTION' },
  { label: 'ORAL', icon: '/oral.png', path: '/categories', param: 'ORAL' },
  { label: 'POST CYCLE', icon: '/post.png', path: '/categories', param: 'POST CYCLE' },
  { label: 'FAT BURN', icon: '/fatburn.png', path: '/categories', param: 'FAT BURN' },
  { label: 'SEXUAL WELLNESS', icon: '/sexual.png', path: '/categories', param: 'SEXUAL WELLNESS' },
  { label: 'PEPTIDES & HGH', icon: '/peptides.png', path: '/categories', param: 'PEPTIDES %26 HGH' },
  { label: 'SARMS', icon: '/sarms.png', path: '/categories', param: 'SARMS' },
  { label: 'AMINO ACIDS', icon: '/amino.png', path: '/categories', param: 'AMINO ACIDS' },
];

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  // Force button styling when menu state changes
  useEffect(() => {
    const button = document.querySelector('[aria-label="Open mobile menu"]') as HTMLElement;
    if (button) {
      if (isOpen) {
        // Aktiver Zustand: Verstärkter innen-Schatten (gedrückt-Effekt) mit rotem Rahmen
        button.style.backgroundColor = 'transparent';
        button.style.boxShadow = 'inset 0 3px 6px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(233, 17, 17, 0.8)';
      } else {
        // Inaktiver Zustand: Normales Styling
        button.style.backgroundColor = 'transparent';
        button.style.boxShadow = 'inset 0 1px 2px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)';
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors md:hidden relative"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: isOpen 
            ? 'inset 0 3px 6px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(233, 17, 17, 0.8)' 
            : 'inset 0 1px 2px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
          zIndex: 10000, // Erhöht von 9999 auf 10000
          transition: 'all 0.3s ease'
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (isOpen) {
            closeMobileMenu();
          } else {
            openMobileMenu();
          }
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'rgba(233, 17, 17, 0.1)';
            e.currentTarget.style.boxShadow = 'inset 0 2px 3px rgba(0, 0, 0, 0.6), inset 0 3px 5px rgba(0, 0, 0, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.08), inset 0 0 6px rgba(233, 17, 17, 0.3), 0 0 0 1px rgba(233, 17, 17, 0.3)';
          }
          // Im aktiven Zustand (isOpen = true) machen wir NICHTS beim MouseEnter
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)';
          } else {
            // Im aktiven Zustand: Verstärkter innen-Schatten (gedrückt-Effekt) mit rotem Rahmen
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'inset 0 3px 6px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(233, 17, 17, 0.8)';
          }
        }}
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[.5px]"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="opacity-100 backdrop-blur-[.5px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div 
            className="fixed bg-black/30" 
            style={{
              top: '41px',
              left: '0',
              right: '0', 
              bottom: '0',
              zIndex: 40
            }}
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
        </Transition.Child>
        
        {/* Menu Panel */}
        <Transition.Child
          as="div"
          className="fixed left-0 right-0 flex w-full flex-col pb-6 overflow-hidden"
          style={{ 
            top: '41px',
            height: 'calc(100vh - 41px)',
            background: 'linear-gradient(135deg, rgb(64,64,74) 0%, rgb(45,45,52) 100%)',
            zIndex: 100
          }}
          enter="transition-all ease-in-out duration-300"
          enterFrom="translate-x-[-100%]"
          enterTo="translate-x-0"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[-100%]"
        >
                <div 
                  className="p-4 overflow-y-auto flex-1 relative"
                  style={{
                    overscrollBehavior: 'contain',
                    WebkitOverflowScrolling: 'touch',
                    zIndex: 101
                  }}
                >
                {/* Search Bar */}
                <div className="mb-4 w-full" style={{ marginTop: '8px' }}>
                  <Suspense fallback={<SearchSkeleton />}>
                    <Search />
                  </Suspense>
                </div>

                {/* Main Navigation (HOME, SHOP) */}
                {menu.length ? (
                  <div className="mb-4">
                    <div 
                      className="h-[2px] mb-4"
                      style={{ 
                        background: 'linear-gradient(90deg, #e91111 0%, rgba(233, 17, 17, 0.1) 100%)',
                        width: '100%'
                      }}
                    />
                    <ul className="space-y-2">
                      {menu.map((item: Menu) => {
                        const isActive = pathname === item.path;
                        return (
                          <li key={item.title}>
                            <Link 
                              href={item.path} 
                              prefetch={true} 
                              onClick={(e) => {
                                // Navigation erst erlauben, dann Menu schließen
                                setTimeout(() => {
                                  closeMobileMenu();
                                }, 100);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden block ${
                                isActive
                                  ? 'text-white'
                                  : 'text-neutral-300 hover:text-white'
                              }`}
                              style={{
                                background: isActive
                                  ? 'linear-gradient(135deg, rgba(233, 17, 17, 0.9) 0%, rgba(233, 17, 17, 0.7) 50%, rgba(233, 17, 17, 0.5) 100%)'
                                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                                border: isActive
                                  ? '1px solid rgba(233, 17, 17, 0.3)'
                                  : '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                              }}
                              onMouseEnter={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.3) 0%, rgba(233, 17, 17, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)';
                                  e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.4)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                                }
                              }}
                            >
                              <span className="truncate">{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}

                {/* Categories Navigation */}
                <nav className="mb-6">
                  <div 
                    className="h-[2px] mb-4"
                    style={{ 
                      background: 'linear-gradient(90deg, #e91111 0%, rgba(233, 17, 17, 0.1) 100%)',
                      width: '100%'
                    }}
                  />
                  <ul className="space-y-2">
                    {categories.map((category) => {
                      const categoryParam = searchParams.get('category');
                      // Für PEPTIDES & HGH: URL-decodierte Version vergleichen
                      const expectedParam = category.param === 'PEPTIDES %26 HGH' ? 'PEPTIDES & HGH' : category.param;
                      const isActive = (expectedParam === '' && !categoryParam) || categoryParam === expectedParam;
                      const href = category.param ? `${category.path}?category=${category.param}` : category.path;
                      
                      return (
                        <li key={category.label}>
                          <Link
                            href={href}
                            onClick={(e) => {
                              // Spezialbehandlung für ALL PRODUCTS - Reload der Seite
                              if (category.label === 'ALL PRODUCTS') {
                                e.preventDefault();
                                closeMobileMenu();
                                // URL bereinigen und dann reloaden
                                window.history.replaceState({}, '', '/categories');
                                setTimeout(() => {
                                  window.location.reload();
                                }, 50);
                                return;
                              }
                              // Navigation erst erlauben, dann Menu schließen
                              setTimeout(() => {
                                closeMobileMenu();
                              }, 100);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden block ${
                              isActive
                                ? 'text-white'
                                : 'text-neutral-300 hover:text-white'
                            }`}
                            style={{
                              background: isActive
                                ? 'linear-gradient(135deg, rgba(233, 17, 17, 0.9) 0%, rgba(233, 17, 17, 0.7) 50%, rgba(233, 17, 17, 0.5) 100%)'
                                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                              border: isActive
                                ? '1px solid rgba(233, 17, 17, 0.3)'
                                : '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.3) 0%, rgba(233, 17, 17, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)';
                                e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.4)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                              }
                            }}
                          >
                            <img 
                              src={category.icon} 
                              alt={`${category.label} Icon`} 
                              className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span className="truncate">{category.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* FAQ and Contact Section */}
                <div className="mb-6">
                  <div 
                    className="h-[2px] mb-4"
                    style={{ 
                      background: 'linear-gradient(90deg, #e91111 0%, rgba(233, 17, 17, 0.1) 100%)',
                      width: '100%'
                    }}
                  />
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => {
                          setFaqOpen(true);
                          closeMobileMenu();
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-neutral-300 hover:text-white"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.3) 0%, rgba(233, 17, 17, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)';
                          e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <span className="truncate">FAQ</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setContactOpen(true);
                          closeMobileMenu();
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden text-neutral-300 hover:text-white"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.3) 0%, rgba(233, 17, 17, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)';
                          e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                          e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <span className="truncate">CONTACT</span>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Unsichtbares Spacer-Element für bessere Scrollbarkeit */}
                <div style={{ height: '100px', width: '100%' }} />

              </div>
              
              {/* Shadow Overlay für Tiefeneffekt - von oben nach innen */}
              <div 
                className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 8px 16px rgba(0, 0, 0, 0.4), inset 0 4px 8px rgba(0, 0, 0, 0.3)',
                  zIndex: 102
                }}
              />
        </Transition.Child>
        </Transition>

        {/* Render Modals */}
        <FAQModal isOpen={faqOpen} onCloseAction={() => setFaqOpen(false)} />
        <ContactModal isOpen={contactOpen} onCloseAction={() => setContactOpen(false)} />
    </>
  );
}

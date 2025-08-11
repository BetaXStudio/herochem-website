'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '../../components/auth/auth-context';


interface AccountSidebarProps {
  sections: string[];
  selectedSection: string;
  onSectionChangeAction: (section: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AccountSidebar({ 
  sections, 
  selectedSection, 
  onSectionChangeAction,
  isOpen = true,
  onClose
}: AccountSidebarProps) {
  const { signOut } = useAuth();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLogout = async () => {
    try {
      console.log('Account sidebar logout initiated...');
      
      // Logout-Prozess starten
      await signOut();
      
      // Zusätzliche Wartezeit für mobile Browser
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Browser komplett neu laden ohne Cache
      if (typeof window !== 'undefined') {
        // Cache Control Headers setzen
        window.location.replace('/');
        
        // Fallback: Harte Navigation mit Cache-Bypass
        setTimeout(() => {
          window.location.href = '/?t=' + Date.now();
        }, 500);
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Auch bei Fehlern: Harte Navigation zur Home-Seite
      window.location.replace('/');
    }
  };
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
          style={{
            animation: 'fadeIn 0.3s ease-out forwards'
          }}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`account-sidebar bg-neutral-900 md:border-r md:border-neutral-800 transition-transform duration-300 ease-in-out z-50
          md:w-64 md:min-h-screen md:relative md:translate-x-0
          fixed top-0 left-0 h-full w-full
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ 
          paddingTop: '0.25rem',
          animation: 'fadeInPage 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
          animationDelay: '0.1s',
          opacity: '0'
        }}
      >
      {/* Sidebar Header */}
      <div className="px-4 mb-8" style={{ paddingTop: '18pt' }}>
        <div className="flex items-center gap-2 mb-2">
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded text-white hover:bg-neutral-800 transition-colors mr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src="/login.png" 
            alt="Account Icon" 
            className="object-contain" 
            style={{ 
              filter: 'brightness(0) invert(1)'
            }}
          />
          <h1 className="text-xl font-bold text-white uppercase">My Account</h1>
        </div>
        <div 
          className="h-[2px] mt-4"
          style={{ 
            background: 'linear-gradient(90deg, #e91111 0%, rgba(233, 17, 17, 0.1) 100%)',
            width: '100%'
          }}
        />
      </div>

      {/* Navigation Items */}
      <nav className="px-4">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => {
                  onSectionChangeAction(section);
                  // Close sidebar on mobile after selection
                  if (isMobile && onClose) {
                    onClose();
                  }
                }}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium uppercase transition-all duration-200 ${
                  selectedSection === section
                    ? 'bg-[#e91111] text-white'
                    : 'text-neutral-300 hover:bg-[#e91111] hover:text-white'
                }`}
              >
                {section}
              </button>
            </li>
          ))}
          
          {/* Logout Button */}
          <li className="pt-4">
            <div 
              className="h-[1px] mb-4"
              style={{ 
                background: 'linear-gradient(90deg, rgba(233, 17, 17, 0.5) 0%, rgba(233, 17, 17, 0.1) 100%)',
                width: '100%'
              }}
            />
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-md text-sm font-medium uppercase transition-all duration-200 text-neutral-300 hover:bg-[#e91111] hover:text-white border border-neutral-700 hover:border-[#e91111]"
            >
              LOGOUT
            </button>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}

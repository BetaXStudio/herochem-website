'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/auth/auth-context';


interface AccountSidebarProps {
  sections: string[];
  selectedSection: string;
  onSectionChangeAction: (section: string) => void;
}

export default function AccountSidebar({ 
  sections, 
  selectedSection, 
  onSectionChangeAction 
}: AccountSidebarProps) {
  const { signOut } = useAuth();
  const router = useRouter();

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
    <div 
      className="account-sidebar w-64 bg-neutral-900 min-h-screen border-r border-neutral-800"
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
                onClick={() => onSectionChangeAction(section)}
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
  );
}

'use client';

import { Suspense, useState } from 'react';
import AccountSidebar from './AccountSidebar';
import AddressBook from './AddressBook';
import OrderHistory from './OrderHistory';
import ProfileSettings from './ProfileSettings';
import RewardPoints from './RewardPoints';
import SecuritySettings from './SecuritySettings';

export const dynamic = 'force-dynamic';

function AccountContent() {
  const [selectedSection, setSelectedSection] = useState('PROFILE SETTINGS');

  const accountSections = [
    'PROFILE SETTINGS',
    'SECURITY SETTINGS', 
    'ORDER HISTORY',
    'ADDRESS BOOK',
    'REWARD POINTS'
  ];

  return (
    <div 
      className="min-h-screen bg-neutral-950 text-neutral-100"
      style={{
        animation: 'fadeInPage 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
      }}
    >
      <div className="flex">
        {/* Sidebar */}
        <AccountSidebar 
          sections={accountSections}
          selectedSection={selectedSection}
          onSectionChangeAction={setSelectedSection}
        />
        
        {/* Main Content */}
        <div 
          className="flex-1 p-6"
          style={{
            animation: 'fadeInPage 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
            animationDelay: '0.2s',
            opacity: '0'
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header with red line */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-4">
                {selectedSection}
              </h1>
              <div 
                className="h-[2px] mb-6"
                style={{ 
                  background: 'linear-gradient(90deg, rgba(233, 17, 17, 0.1) 0%, #e91111 50%, rgba(233, 17, 17, 0.1) 100%)',
                  width: '100%'
                }}
              />
            </div>
            
            {/* Content Area */}
            <div className="bg-neutral-900 rounded-lg p-6 min-h-[400px]">
              {selectedSection === 'PROFILE SETTINGS' ? (
                <ProfileSettings />
              ) : selectedSection === 'SECURITY SETTINGS' ? (
                <SecuritySettings />
              ) : selectedSection === 'ORDER HISTORY' ? (
                <OrderHistory />
              ) : selectedSection === 'ADDRESS BOOK' ? (
                <AddressBook />
              ) : selectedSection === 'REWARD POINTS' ? (
                <RewardPoints />
              ) : (
                <>
                  <h2 className="text-xl text-white mb-4">{selectedSection}</h2>
                  <p className="text-neutral-300">
                    Content for {selectedSection} will be implemented here.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountContent />
    </Suspense>
  );
}

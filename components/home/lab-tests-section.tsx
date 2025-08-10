'use client';

import { BeakerIcon, ChartBarIcon, DocumentCheckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const labFeatures = [
  {
    icon: BeakerIcon,
    title: "Independent Testing",
    description: "All products are tested by third-party laboratories"
  },
  {
    icon: DocumentCheckIcon,
    title: "Complete Reports",
    description: "Detailed analysis results for every batch"
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    description: "WHO-GMP & EU-GMP certified production"
  },
  {
    icon: ChartBarIcon,
    title: "Purity Analysis",
    description: "99%+ purity guaranteed"
  }
];

interface LabTestsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LabTestsModal({ isOpen, onClose }: LabTestsModalProps) {
  // Blockiere Body-Scroll wenn Modal offen ist
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[55px] max-[800px]:pb-[50px]">
      {/* Backdrop with blur - darker background */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          animation: 'backdropFadeIn 0.3s ease-out'
        }}
        onClick={onClose}
      />
      
      {/* Modal with animation */}
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4"
        style={{
          backgroundColor: 'white',
          border: '2px solid rgb(64,64,74)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div 
          className="flex items-center justify-between p-6 border-b"
          style={{ 
            borderColor: 'rgb(64,64,74)', 
            backgroundColor: 'rgb(64,64,74)',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            margin: '-2px -2px 0 -2px'
          }}
        >
          <div>
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>Laboratory Test Reports</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-600 rounded-md transition-colors duration-200 text-white text-xl"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        <div className="p-8 text-center">
          <div className="mb-6">
            <BeakerIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pending Laboratory Tests</h3>
            <p className="text-gray-600">
              Laboratory reports are currently being processed and will be available soon.
            </p>
          </div>
          
          <div className="text-left bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3">What we test for:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Product purity and potency</li>
              <li>• Microbiological safety</li>
              <li>• Complete chemical composition</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <button 
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LabTestsSection({ onOpenLabReportsModal }: { onOpenLabReportsModal: () => void }) {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BeakerIcon className="h-4 w-4" />
            <span>Quality Assurance</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lab<span className="text-red-600">Reports</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every one of our products is tested by independent third-party laboratories for purity, 
            potency and safety. Transparency is our promise to you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {labFeatures.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Lab Reports Button */}
        <div className="text-center">
          <button 
            onClick={onOpenLabReportsModal}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <BeakerIcon className="h-5 w-5 mr-2" />
            View All Lab Reports
          </button>
        </div>
      </div>
    </div>
  );
}

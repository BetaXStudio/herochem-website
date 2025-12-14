"use client";

import {
  BeakerIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useModal } from "../../contexts/modal-context";

const labFeatures = [
  {
    icon: BeakerIcon,
    title: "Independent Testing",
    description: "Tested by third-party laboratories",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    description: "WHO-GMP certified production",
  },
  {
    icon: DocumentCheckIcon,
    title: "Complete Reports",
    description: "Analysis results for every batch",
  },
  {
    icon: ChartBarIcon,
    title: "Purity Analysis",
    description: "99%+ purity guaranteed and tested",
  },
];

export default function LabTestsSection() {
  const { setLabReportsModalOpen } = useModal();
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ marginTop: '-15px' }}>
            Lab<span className="text-red-600">Reports</span>
          </h2>
          <p className="text-sm lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every one of our products is tested by independent third-party
            laboratories for purity, potency and safety. Transparency is our
            promise to you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 max-w-2xl lg:max-w-4xl mx-auto mb-10">
          {labFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-4 rounded-2xl transition-all duration-300 gap-4 ml-[45px] lg:ml-[60px]"
            >
              <div className="w-8 h-8 bg-[#e91111] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <feature.icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs leading-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Reports Button */}
        <div className="text-center">
          <button
            onClick={() => setLabReportsModalOpen(true)}
            className="inline-flex items-center px-7 py-3 bg-[#e91111] hover:bg-[#c00d0d] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <BeakerIcon className="h-4 w-4 mr-2" />
            View All Lab Reports
          </button>
        </div>
      </div>
    </div>
  );
}

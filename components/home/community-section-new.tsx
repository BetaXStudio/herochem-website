"use client";

import {
    ChatBubbleLeftRightIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import { useModal } from "../../contexts/modal-context";

export default function CommunitySection() {
  const { setCommunityModalOpen, setFAQModalOpen, setContactModalOpen } = useModal();

  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Telegram Community",
      description: "Join thousands of members in our active Telegram community.",
    },
    {
      icon: PhoneIcon,
      title: "Customer Support",
      description: "Get instant support from our team via Telegram.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 text-red-400 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <ChatBubbleLeftRightIcon className="h-3 w-3" />
            <span>Community & Support</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Join Our
            <span className="text-red-500"> Community</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our channels and get exclusive access to offers, support and
            community conversations.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Centered Content */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Features */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start min-h-[2.5rem] -mt-1">
                    <h3 className="text-base font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setCommunityModalOpen(true)}
                className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                Join Community
              </button>
              <div className="flex flex-row gap-3">
                <button
                  onClick={() => {
                    setFAQModalOpen(true);
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-7 py-3 border-2 border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-red-600/10"
                >
                  FAQ
                </button>
                <button
                  onClick={() => {
                    setContactModalOpen(true);
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-7 py-3 border-2 border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-red-600/10"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

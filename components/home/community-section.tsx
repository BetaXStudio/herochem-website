'use client';

import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

interface CommunityModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export function CommunityModal({ isOpen, onCloseAction }: CommunityModalProps) {
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

  const handleTelegramJoin = () => {
    // Dummy function - would redirect to Telegram
    alert('Redirecting to Telegram Channel... (Demo Function)');
  };

  const handleWhatsAppJoin = () => {
    // Dummy function - would redirect to WhatsApp  
    alert('Redirecting to WhatsApp Channel... (Demo Function)');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[55px] max-[800px]:pb-[50px]">
      {/* Backdrop with blur - darker background */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          animation: 'backdropFadeIn 0.3s ease-out'
        }}
        onClick={onCloseAction}
      />
      
      {/* Modal with animation */}
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] max-[800px]:max-h-[calc(90vh-105px)] flex flex-col"
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
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>Join the Community</h2>
          </div>
          <button 
            onClick={onCloseAction}
            className="p-2 hover:bg-gray-600 rounded-md transition-colors duration-200 text-white text-xl"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1" style={{ 
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y',
          overscrollBehavior: 'contain'
        }}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Become Part of Our Community
            </h3>
            <p className="text-gray-600">
              Get exclusive access to offers, news and direct support
            </p>
          </div>

          <div className="grid md:grid-cols-2 max-[800px]:grid-cols-1 gap-6 pb-[50px]">
            {/* Telegram Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Telegram Channel</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Fast updates, exclusive offers and direct contact
                </p>
                <button 
                  onClick={handleTelegramJoin}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Join Telegram
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp Channel</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Personal support and community conversations
                </p>
                <button 
                  onClick={handleWhatsAppJoin}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Join WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "24/7 Community Support",
    description: "Direct connection to our support team and the community"
  },
  {
    icon: PhoneIcon,
    title: "Instant Responses", 
    description: "Average response time under 30 minutes"
  }
];

const faqs = [
  { question: 'Where do you ship from?', answer: 'All our products are shipped from Europe.' },
  // ...existing questions...
  // Insert 'Where do you ship from?' under Shipping section
  { question: 'Do you use discreet packaging?', answer: 'Yes, all our products are shipped with fully stealth packaging to ensure their successful passage through customs.' },
  { question: 'How long does delivery take?', answer: `Deus Medical & Astera Labs<br /><br />Estonia, Latvia, Lithuania: 4-8 Days<br />Germany, Austria, Belgium, Croatia, Slovak Republic, Iceland: 6-10 Days<br />Italy, Spain, UK, Netherlands, Ireland, Sweden, Czech Republic, Malta, France, Denmark, Slovenia, Switzerland, Portugal, Bulgaria and other EU countries: 8-12 Days<br />Finland, Greece, Romania: 9-14 Days<br />Canary Islands: 9-14 Days<br />USA, Australia, Canada and other not EU countries: 13-17 Days` },
  { question: 'What carrier oil are you using?', answer: 'We use Miglyol-812 (MCT) in all Deus Medical and Astera Labs oil based products as carrier oil.' },
  { question: 'What is the shipping cost?', answer: `• Shipping in EU - 20 EUR<br />• Shipping outside EU - 26 EUR` },
  { question: 'Will I receive a tracking number?', answer: 'Yes, we will provide you a tracking number in order to be able to track your shipment as soon as your order will be shipped within 1-3 business days.' },
  { question: 'What payment methods do you accept?', answer: 'We accept Bitcoin, USDT, ETH, Bank Transfer and Paypal.' },
  { question: 'How do I send payment?', answer: 'We provide all necessary payment instructions by email after placing the order. If you have any additional questions or you have not received an email with payment instructions after placing an order, please contact us.' },
  { question: 'Do you have a minimum payment or order?', answer: `We don't have a minimum payment and order requirement.` },
  { question: 'Do you offer discounts?', answer: 'From time to time we may have special offers and will offer discount codes for use in the checkout process. To hear about new promotions and special offers, please join our community channels or subscribe to the newsletter!' },
  { question: 'Can I get a refund for my order?', answer: 'Refunds can only be issued if the order has not been shipped. If the order has already been shipped, unfortunately we are unable to provide a refund for your order.' },
  { question: 'Can I modify or cancel my order?', answer: 'Yes, you can just delete your order in MY ACCOUNT and place a new one. Once your order has been shipped, we will not be able to change or cancel your order. If status is on payed, please contact our support to refund your payment.' },
  { question: 'I entered the wrong shipping address. How can I change it?', answer: 'Please contact us immediately within 24 hours after placing your order. Our support team will assist you in modifying your order details. Once your order has been shipped, we will not be able to change your shipping address.' },
  { question: 'I did not receive an email confirmation after placing the order?', answer: 'Please check your spam folder. If you have not received an email confirmation, please contact us immediately and we will help you.' },
  { question: 'My package has been seized or lost, what do I do?', answer: `If your order is seized, please send us an email with picture of letter received from customs with receiver name. After our manager confirms the status, we will reship your order for free.<br /><br />If your order has not been delivered during 45 days after dispatch date, we will review the case for a reship. After our manager confirms the status, we will offer you at least one free reship.<br /><br />For safety reasons reshipping will be made only one time and when new receiver name and delivery address is provided.<br /><br /><strong>Please note</strong>, that we will not reship if you can not provide us with a new receiver name and delivery address.<br /><br />We do not re-ship to: Denmark, Canada, Norway, New Zealand, Singapore, South Korea, Australia, Saudi Arabia, countries in Africa, countries in South America, Israel and UAE.` },
  { question: 'What if I receive a wrong, missing or defective product?', answer: 'Please contact us immediately and our support team will assist you. After our manager confirms the status, we will ship the correct products.' },
  { question: 'Which countries do you ship to?', answer: 'We ship worldwide.' },
  { question: 'When does my package ship?', answer: 'Usually all orders are shipped within 1-3 business days after payment is completed. Your order will not be shipped until we receive payment. If there is an issue we will notify you.' },
  { question: 'Do you ship to P.O. boxes?', answer: 'Yes, we ship to P.O. boxes. Just make sure that you have entered the delivery address in the correct format.' },
  { question: 'Do you ship to military addresses (APO/FPO)?', answer: 'Yes, we ship to military addresses. Just make sure that you have entered the delivery address in the correct format.' },
  { question: 'How can I track my order?', answer: 'You can use the online service to track your parcel.' },
  { question: 'What if my package tracking stops updating?', answer: `If your order is seized, please send us an email with picture of letter received from customs with receiver name. After our manager confirms the status, we will reship your order for free.<br /><br />If your order has not been delivered during 45 days after dispatch date, we will review the case for a reship. After our manager confirms the status, we will offer you at least one free reship.<br /><br />For safety reasons reshipping will be made only one time and when new receiver name and delivery address is provided.<br /><br /><strong>Please note</strong>, that we will not reship if you can not provide us with a new receiver name and delivery address.<br /><br />We do not re-ship to: Denmark, Canada, Norway, New Zealand, Singapore, South Korea, Australia, Saudi Arabia, countries in Africa, countries in South America, Israel and UAE.` },
  { question: 'What is your return policy?', answer: 'Products sold by HeroChem are non-returnable.' },
  { question: 'How do we know these products are legit?', answer: `All our products are manufactured in full compliance with global quality standards and is fully certified by WHO-GMP, and compliant with EU GMP and UK MHRA.<br /><br />We are official worldwide distributor of Deus Medical brand and you can verify us by entering our website name here: <a href="https://deusmedical.com/verify/verifyseller" target="_blank" rel="noopener noreferrer">deusmedical.com/verify/verifyseller</a><br /><br />Also, each Deus Medical product have a unique product code, and with this code you can verify your product here: <a href="https://deusmedical.com/verify/verify-product/" target="_blank" rel="noopener noreferrer">deusmedical.com/verify/verify-product/</a>` },
  { question: 'Do you have third party lab test reports for all products?', answer: 'Yes, we verify every batch of every product. You can find independent third party laboratory test reports made by Janoshik Analytics on our website.' },
  { question: 'How should I store my product?', answer: 'Please store your product in a cool, dry place below 30°C, protect from light and do not freeze.' },
  { question: 'How should I store Unmixed/Mixed Peptides?', answer: `<strong>Lyophilized (Unmixed)</strong><br /><ul><li><strong>Short term:</strong> Lyophilized peptides will remain stable at room temperature for 30-60 days. However, upon receipt all peptides should be stored in the refrigerator (under 4°C (39°F)) for maximum stability and longevity. Peptides stored at this temperature can last 1-2 years.</li><li><strong>Long term:</strong> If you are not going to use the peptides within 1-2 months it is preferable to store the peptides in a freezer at -18°C (0°F). Peptides stored at this temperature can last 2-3 years. Even more preferable for long term storage is freezing at -80°C (-112°F) in order to preserve the peptides stability long term.</li></ul><br /><strong>Reconstituted (Mixed)</strong><br /><ul><li><strong>Short term:</strong> Peptide solutions generally remain stable up to 30 days when stored in the refrigerator at 4°C (39°F) depending on the length of the peptide sequence and its inherent instability factors.</li><li><strong>Long term:</strong> If peptides absolutely must be stored in solution, sterile buffers at pH 5-6 should be used if possible, and the peptide solution should be separated into aliquots to avoid repeated freezing and thawing. Freezing at -80°C (-112°F) is optimal in order to preserve the peptides stability.</li></ul>` },
  { question: 'Do I need an account to place an order?', answer: 'You will need an account to receive status updates and payment informations about your order. You will also receive Reward Points on each order.' },
  { question: 'Is my data safe?', answer: 'We respect all our customers and privacy is very important to us. We do not collect, store or share your information with third parties. Any data sent to and from our website is encrypted.' },
  { question: 'How can I view my order history, transactions and order status?', answer: 'You can check your latest status update on MY ACCOUNT > ORDERS.' },
];

export function FAQModal({ isOpen, onCloseAction }: { isOpen: boolean; onCloseAction: () => void }) {
  const [openIndex, setOpenIndex] = useState<string | number | null>(null);
  
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[55px] max-[800px]:pb-[50px]"
      style={{ touchAction: 'none' }}
    >
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', animation: 'backdropFadeIn 0.3s ease-out' }}
        onClick={onCloseAction}
      />
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col max-[800px]:max-h-[calc(80vh-105px)]"
        style={{ 
          backgroundColor: 'white', 
          border: '2px solid rgb(64,64,74)', 
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)', 
          animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          touchAction: 'auto'
        }}
      >
        <div 
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: 'rgb(64,64,74)', backgroundColor: 'rgb(64,64,74)', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', margin: '-2px -2px 0 -2px' }}
        >
          <div>
            <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>Frequently Asked Questions</h2>
          </div>
          <button 
            onClick={onCloseAction}
            className="p-2 hover:bg-gray-600 rounded-md transition-colors duration-200 text-white text-xl"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div 
          className="p-6 overflow-y-auto flex-1 max-[800px]:max-h-[calc(80vh-200px)]" 
          style={{ 
            maxHeight: 'calc(80vh - 140px)',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="space-y-2 max-[800px]:pb-[50px]">
            {/* Popular Questions heading above the first FAQ */}
            <div className="py-2 text-2xl font-bold text-red-500" style={{fontFamily: 'Calibri, Arial, sans-serif'}}>
              Popular Questions
            </div>
            {/* Render all FAQ entries, with custom dropdowns for duplicate questions */}
            {faqs.map((faq, idx) => (
              <React.Fragment key={faq.question + idx}>
                {idx === 6 && (
                  <div className="py-2 text-2xl font-bold text-red-500" style={{fontFamily: 'Calibri, Arial, sans-serif'}}>
                    Payment
                  </div>
                )}
                {idx === 10 && (
                  <div className="py-2 text-2xl font-bold text-red-500" style={{fontFamily: 'Calibri, Arial, sans-serif'}}>
                    Orders
                  </div>
                )}
                {idx === 16 && (
                  <>
                    <div className="py-2 text-2xl font-bold text-red-500" style={{fontFamily: 'Calibri, Arial, sans-serif'}}>
                      Shipping
                    </div>
                    {/* Custom dropdown for 'Where do you ship from?' in Shipping section */}
                    <div className="border-b border-gray-200">
                      <button
                        className="w-full text-left py-3 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === 'shipping-where' ? null : 'shipping-where')}
                      >
                        <span>Where do you ship from?</span>
                        <span className="ml-2 text-gray-400">{openIndex === 'shipping-where' ? '−' : '+'}</span>
                      </button>
                      {openIndex === 'shipping-where' && (
                        <div className="py-2 text-gray-600 text-sm">All our products are shipped from Europe warehouses.</div>
                      )}
                    </div>
                    {/* Custom dropdown for 'What is the shipping cost?' in Shipping section */}
                    <div className="border-b border-gray-200">
                      <button
                        className="w-full text-left py-3 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === 'shipping-cost' ? null : 'shipping-cost')}
                      >
                        <span>What is the shipping cost?</span>
                        <span className="ml-2 text-gray-400">{openIndex === 'shipping-cost' ? '−' : '+'}</span>
                      </button>
                      {openIndex === 'shipping-cost' && (
                        <div className="py-2 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: '• Shipping in EU - 20 EUR<br />• Shipping outside EU - 26 EUR' }} />
                      )}
                    </div>
                    {/* Custom dropdown for 'How long does delivery take?' in Shipping section */}
                    <div className="border-b border-gray-200">
                      <button
                        className="w-full text-left py-3 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === 'shipping-delivery' ? null : 'shipping-delivery')}
                      >
                        <span>How long does delivery take?</span>
                        <span className="ml-2 text-gray-400">{openIndex === 'shipping-delivery' ? '−' : '+'}</span>
                      </button>
                      {openIndex === 'shipping-delivery' && (
                        <div className="py-2 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: faqs[2]?.answer || '' }} />
                      )}
                    </div>
                    {/* Custom dropdown for 'Do you use discreet packaging?' in Shipping section */}
                    <div className="border-b border-gray-200">
                      <button
                        className="w-full text-left py-3 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === 'shipping-discreet' ? null : 'shipping-discreet')}
                      >
                        <span>Do you use discreet packaging?</span>
                        <span className="ml-2 text-gray-400">{openIndex === 'shipping-discreet' ? '−' : '+'}</span>
                      </button>
                      {openIndex === 'shipping-discreet' && (
                        <div className="py-2 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: faqs[1]?.answer || '' }} />
                      )}
                    </div>
                  </>
                )}
                {/* Move 'Product' heading two questions lower (idx === 23) */}
                {idx === 23 && (
                  <div className="py-2 text-2xl font-bold text-red-500" style={{fontFamily: 'Calibri, Arial, sans-serif'}}>
                    Product
                  </div>
                )}
                {/* Insert 'Account' heading directly above the question 'Do I need an account to place an order?' */}
                {faq.question === 'Do I need an account to place an order?' && (
                  <div className="py-2 text-2xl font-bold text-red-500" style={{fontFamily: 'Calibri, Arial, sans-serif'}}>
                    Account
                  </div>
                )}
                {/* Render all other questions as usual, including 'What is the shipping cost?' in Popular section */}
                <div className="border-b border-gray-200">
                  <button
                    className="w-full text-left py-3 font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-2 text-gray-400">{openIndex === idx ? '−' : '+'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-[500px] py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                    style={{}}
                  >
                    <div className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: faq.answer || 'No answer provided yet.' }} />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommunitySection({ onOpenCommunityModalAction }: { onOpenCommunityModalAction: () => void }) {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ChatBubbleLeftRightIcon className="h-4 w-4" />
            <span>Community & Support</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our 
            <span className="text-red-500"> Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our channels and get 
            exclusive access to offers, support and community conversations.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Centered Content */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start min-h-[3rem] -mt-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-base mt-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={onOpenCommunityModalAction}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                Join Community
              </button>
              <button
                onClick={() => setFaqOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-600/10"
              >
                FAQ & Contact
              </button>
              <FAQModal isOpen={faqOpen} onCloseAction={() => setFaqOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/modal-context";

export default function FAQModalWrapper() {
  const { isFAQModalOpen, setFAQModalOpen } = useModal();
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    if (isFAQModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isFAQModalOpen]);

  if (!isFAQModalOpen) return null;

  const faqs = [
    {
      question: "Where do you ship from?",
      answer: "All our products are shipped from Europe.",
    },
    {
      question: "Do you use discreet packaging?",
      answer:
        "Yes, all our products are shipped with fully stealth packaging to ensure their successful passage through customs.",
    },
    {
      question: "How long does delivery take?",
      answer: `Deus Medical & Astera Labs<br /><br />Estonia, Latvia, Lithuania: 4-8 Days<br />Germany, Austria, Belgium, Croatia, Slovak Republic, Iceland: 6-10 Days<br />Italy, Spain, UK, Netherlands, Ireland, Sweden, Czech Republic, Malta, France, Denmark, Slovenia, Switzerland, Portugal, Bulgaria and other EU countries: 8-12 Days<br />Finland, Greece, Romania: 9-14 Days<br />Canary Islands: 9-14 Days<br />USA, Australia, Canada and other not EU countries: 13-17 Days`,
    },
    {
      question: "What carrier oil are you using?",
      answer:
        "We use Miglyol-812 (MCT) in all Deus Medical and Astera Labs oil based products as carrier oil.",
    },
    {
      question: "What is the shipping cost?",
      answer: `• Shipping in EU - 20 EUR<br />• Shipping outside EU - 26 EUR`,
    },
    {
      question: "Will I receive a tracking number?",
      answer:
        "Yes, we will provide you a tracking number in order to be able to track your shipment as soon as your order will be shipped within 1-3 business days.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Bitcoin, USDT, ETH, Bank Transfer and Paypal.",
    },
    {
      question: "How do I send payment?",
      answer:
        "We provide all necessary payment instructions by email after placing the order. If you have any additional questions or you have not received an email with payment instructions after placing an order, please contact us.",
    },
    {
      question: "Do you have a minimum payment or order?",
      answer: `We don't have a minimum payment and order requirement.`,
    },
    {
      question: "Do you offer discounts?",
      answer:
        "From time to time we may have special offers and will offer discount codes for use in the checkout process. To hear about new promotions and special offers, please join our community channels or subscribe to the newsletter!",
    },
    {
      question: "Can I get a refund for my order?",
      answer:
        "Refunds can only be issued if the order has not been shipped. If the order has already been shipped, unfortunately we are unable to provide a refund for your order.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "Yes, you can just delete your order in MY ACCOUNT and place a new one. Once your order has been shipped, we will not be able to change or cancel your order. If status is on payed, please contact our support to refund your payment.",
    },
    {
      question: "I entered the wrong shipping address. How can I change it?",
      answer:
        "Please contact us immediately within 24 hours after placing your order. Our support team will assist you in modifying your order details. Once your order has been shipped, we will not be able to change your shipping address.",
    },
    {
      question:
        "I did not receive an email confirmation after placing the order?",
      answer:
        "Please check your spam folder. If you have not received an email confirmation, please contact us immediately and we will help you.",
    },
    {
      question: "My package has been seized or lost, what do I do?",
      answer: `If your order is seized, please send us an email with picture of letter received from customs with receiver name. After our manager confirms the status, we will reship your order for free.<br /><br />If your order has not been delivered during 45 days after dispatch date, we will review the case for a reship. After our manager confirms the status, we will offer you at least one free reship.<br /><br />For safety reasons reshipping will be made only one time and when new receiver name and delivery address is provided.<br /><br /><strong>Please note</strong>, that we will not reship if you can not provide us with a new receiver name and delivery address.<br /><br />We do not re-ship to: Denmark, Canada, Norway, New Zealand, Singapore, South Korea, Australia, Saudi Arabia, countries in Africa, countries in South America, Israel and UAE.`,
    },
    {
      question: "What if I receive a wrong, missing or defective product?",
      answer:
        "Please contact us immediately and our support team will assist you. After our manager confirms the status, we will ship the correct products.",
    },
    { question: "Which countries do you ship to?", answer: "We ship worldwide." },
    {
      question: "When does my package ship?",
      answer:
        "Usually all orders are shipped within 1-3 business days after payment is completed. Your order will not be shipped until we receive payment. If there is an issue we will notify you.",
    },
    {
      question: "Do you ship to P.O. boxes?",
      answer:
        "Yes, we ship to P.O. boxes. Just make sure that you have entered the delivery address in the correct format.",
    },
    {
      question: "Do you ship to military addresses (APO/FPO)?",
      answer:
        "Yes, we ship to military addresses. Just make sure that you have entered the delivery address in the correct format.",
    },
    {
      question: "How can I track my order?",
      answer: "You can use the online service to track your parcel.",
    },
    {
      question: "What if my package tracking stops updating?",
      answer: `If your order is seized, please send us an email with picture of letter received from customs with receiver name. After our manager confirms the status, we will reship your order for free.<br /><br />If your order has not been delivered during 45 days after dispatch date, we will review the case for a reship. After our manager confirms the status, we will offer you at least one free reship.<br /><br />For safety reasons reshipping will be made only one time and when new receiver name and delivery address is provided.<br /><br /><strong>Please note</strong>, that we will not reship if you can not provide us with a new receiver name and delivery address.<br /><br />We do not re-ship to: Denmark, Canada, Norway, New Zealand, Singapore, South Korea, Australia, Saudi Arabia, countries in Africa, countries in South America, Israel and UAE.`,
    },
    {
      question: "What is your return policy?",
      answer: "Products sold by HeroChem are non-returnable.",
    },
    {
      question: "How do we know these products are legit?",
      answer: `All our products are manufactured in full compliance with global quality standards and is fully certified by WHO-GMP, and compliant with EU GMP and UK MHRA.<br /><br />We are official worldwide distributor of Deus Medical brand and you can verify us by entering our website name here: <a href="https://deusmedical.com/verify/verifyseller" target="_blank" rel="noopener noreferrer">deusmedical.com/verify/verifyseller</a><br /><br />Also, each Deus Medical product have a unique product code, and with this code you can verify your product here: <a href="https://deusmedical.com/verify/verify-product/" target="_blank" rel="noopener noreferrer">deusmedical.com/verify/verify-product/</a>`,
    },
    {
      question: "Do you have third party lab test reports for all products?",
      answer:
        "Yes, we verify every batch of every product. You can find independent third party laboratory test reports made by Janoshik Analytics on our website.",
    },
    {
      question: "How should I store my product?",
      answer:
        "Please store your product in a cool, dry place below 30°C, protect from light and do not freeze.",
    },
    {
      question: "How should I store Unmixed/Mixed Peptides?",
      answer: `<strong>Lyophilized (Unmixed)</strong><br /><ul><li><strong>Short term:</strong> Lyophilized peptides will remain stable at room temperature for 30-60 days. However, upon receipt all peptides should be stored in the refrigerator (under 4°C (39°F)) for maximum stability and longevity. Peptides stored at this temperature can last 1-2 years.</li><li><strong>Long term:</strong> If you are not going to use the peptides within 1-2 months it is preferable to store the peptides in a freezer at -18°C (0°F). Peptides stored at this temperature can last 2-3 years. Even more preferable for long term storage is freezing at -80°C (-112°F) in order to preserve the peptides stability long term.</li></ul><br /><strong>Reconstituted (Mixed)</strong><br /><ul><li><strong>Short term:</strong> Peptide solutions generally remain stable up to 30 days when stored in the refrigerator at 4°C (39°F) depending on the length of the peptide sequence and its inherent instability factors.</li><li><strong>Long term:</strong> If peptides absolutely must be stored in solution, sterile buffers at pH 5-6 should be used if possible, and the peptide solution should be separated into aliquots to avoid repeated freezing and thawing. Freezing at -80°C (-112°F) is optimal in order to preserve the peptides stability.</li></ul>`,
    },
    {
      question: "Do I need an account to place an order?",
      answer:
        "You will need an account to receive status updates and payment informations about your order. You will also receive Reward Points on each order.",
    },
    {
      question: "Is my data safe?",
      answer:
        "We respect all our customers and privacy is very important to us. We do not collect, store or share your information with third parties. Any data sent to and from our website is encrypted.",
    },
    {
      question: "How can I view my order history, transactions and order status?",
      answer: "You can check your latest status update on MY ACCOUNT > ORDERS.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Modal Container - No backdrop here, global backdrop handles it */}
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[50px] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{ touchAction: "none", pointerEvents: "none" }}
      >
        {/* Modal with animation */}
        <div
          className="relative bg-white shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] max-[800px]:max-h-[calc(90vh-105px)]"
          style={{
            backgroundColor: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            borderRadius: '0.75rem',
            touchAction: "auto",
            pointerEvents: "auto",
          }}
        >
          <div
            className="sticky top-0 flex items-center justify-between border-b"
            style={{
              borderColor: 'rgb(45,45,52)',
              backgroundColor: 'rgb(45,45,52)',
              borderTopLeftRadius: '0.75rem',
              borderTopRightRadius: '0.75rem',
              margin: '-1px 0 -1px 0',
              padding: '12px 16px'
            }}
          >
            <div>
              <h2
                className="text-lg font-medium text-white"
                style={{ fontFamily: 'Calibri, Arial, sans-serif' }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <button
              onClick={() => setFAQModalOpen(false)}
              className="p-2 rounded-md transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] max-[800px]:max-h-[calc(90vh-225px)]">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className="text-gray-600">
                      {openItems.includes(index) ? '−' : '+'}
                    </span>
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                      <p
                        className="text-gray-700 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

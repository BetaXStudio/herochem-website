"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/modal-context";
import {
  calculateCouponDiscount,
  validateCouponCode,
} from "../../lib/coupon-codes";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../auth/auth-context";
import { useSimpleCart } from "./simple-cart-context";

interface CartItem {
  id: string;
  title: string;
  handle: string;
  quantity: number;
  price: number;
  variant?: string;
  image?: string;
}

interface UserAddress {
  id: string;
  full_name: string;
  street: string;
  house_number: string;
  city: string;
  postal_code: string;
  state_province: string | null;
  country: string;
  is_primary: boolean;
}

interface AddressForm {
  full_name: string;
  street: string;
  house_number: string;
  city: string;
  postal_code: string;
  state_province: string;
  country: string;
  is_primary: boolean;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthRequired?: () => void;
  cartItems: CartItem[];
}

export default function CheckoutModal({
  isOpen,
  onClose,
  onAuthRequired,
  cartItems,
}: CheckoutModalProps) {
  const { user } = useAuth();
  const { clearCart } = useSimpleCart();
  const { setCheckoutModalOpen } = useModal();
  const [addresses, setAddresses] = useState<UserAddress[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null,
  );
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Coupon code states
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  
  // Scroll position ref für korrekte Wiederherstellung
  const scrollYRef = useRef(0);
  
  // Portal container for rendering outside of any parent's stacking context
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  // State um Modal erst zu rendern wenn Blur bereits aktiv ist
  const [shouldRenderModal, setShouldRenderModal] = useState(false);
  
  // Initialize portal container
  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  // Blur + Scroll-Sperre für Modal - Blur ZUERST, dann Modal rendern
  // EXAKT wie Auth Modal
  useEffect(() => {
    if (isOpen) {
      // Speichere Scroll-Position
      scrollYRef.current = window.scrollY;
      
      // Verhindere Scrolling auf html und body - EXAKT wie Auth Modal
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      setCheckoutModalOpen(true);
      
      // Wait for blur to be applied before rendering modal
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShouldRenderModal(true);
        });
      });

      // Cleanup
      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        setCheckoutModalOpen(false);
        setShouldRenderModal(false);
        
        // Stelle die Scroll-Position wieder her
        window.scrollTo(0, scrollYRef.current);
      };
    }
  }, [isOpen, setCheckoutModalOpen]);

  const [addressForm, setAddressForm] = useState<AddressForm>({
    full_name: "",
    street: "",
    house_number: "",
    city: "",
    postal_code: "",
    state_province: "",
    country: "",
    is_primary: false,
  });

  useEffect(() => {
    if (user?.id && isOpen) {
      fetchAddresses();
    }
  }, [user?.id, isOpen]);

  const fetchAddresses = async () => {
    if (!user?.id) return;

    try {
      const { data, error } = await supabase
        .from("user_addresses")
        .select("*")
        .eq("user_id", user.id)
        .order("is_primary", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;

      setAddresses(data || []);

      // Auto-select primary address if available
      const primaryAddress = data?.find((addr) => addr.is_primary);
      if (primaryAddress) {
        setSelectedAddressId(primaryAddress.id);
      } else if (data && data.length > 0) {
        setSelectedAddressId(data[0].id);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const handleAddAddress = async () => {
    if (!user?.id) return;

    // Validate form
    if (
      !addressForm.full_name.trim() ||
      !addressForm.street.trim() ||
      !addressForm.house_number.trim() ||
      !addressForm.city.trim() ||
      !addressForm.postal_code.trim() ||
      !addressForm.country.trim()
    ) {
      setError("Please fill in all required address fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // If setting as primary, unset other primary addresses first
      if (addressForm.is_primary) {
        await supabase
          .from("user_addresses")
          .update({ is_primary: false })
          .eq("user_id", user.id);
      }

      const { data, error } = await supabase
        .from("user_addresses")
        .insert({
          ...addressForm,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      setAddresses((prev) => [data, ...prev]);
      setSelectedAddressId(data.id);
      setShowAddAddressForm(false);

      // Reset form
      setAddressForm({
        full_name: "",
        street: "",
        house_number: "",
        city: "",
        postal_code: "",
        state_province: "",
        country: "",
        is_primary: false,
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error: any) {
      console.error("Error adding address:", error);
      setError("Failed to add address");
    } finally {
      setLoading(false);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const calculateShipping = () => {
    return shippingMethod === "standard" ? 20.0 : 0;
  };

  const calculatePaymentFee = () => {
    const subtotal = calculateSubtotal();
    if (paymentMethod === "bitcoin") {
      return -(subtotal * 0.05); // 5% discount
    } else if (paymentMethod === "bank_transfer") {
      return subtotal * 0.05; // 5% fee
    }
    return 0;
  };

  const calculateCouponDiscountAmount = () => {
    if (!appliedCoupon) return 0;
    const subtotal = calculateSubtotal();
    return calculateCouponDiscount(subtotal, appliedCoupon);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const paymentFee = calculatePaymentFee();
    const couponDiscount = calculateCouponDiscountAmount();

    // Coupon discount applies to subtotal only, shipping is always added
    return subtotal - couponDiscount + shipping + paymentFee;
  };

  // Coupon code handlers
  const handleApplyCoupon = () => {
    setCouponError(null);

    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    const coupon = validateCouponCode(couponCode.trim());
    if (!coupon) {
      setCouponError("Invalid coupon code");
      return;
    }

    setAppliedCoupon(couponCode.trim());
    setShowCouponForm(false);
    setCouponCode("");
    setCouponError(null);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError(null);
  };

  const handleCancelCoupon = () => {
    setShowCouponForm(false);
    setCouponCode("");
    setCouponError(null);
  };

  const handlePlaceOrder = async () => {
    if (!user?.id || !selectedAddressId) {
      setError("Please select a shipping address");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const subtotal = calculateSubtotal();
      const shipping = calculateShipping();
      const paymentFee = calculatePaymentFee();
      const total = calculateTotal();

      // Create order
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          status: "pending",
          total_amount: total,
          currency: "EUR",
          shipping_address_id: selectedAddressId,
          shipping_method: shippingMethod,
          shipping_cost: shipping,
          tax_amount: 0, // Add tax calculation if needed
          discount_amount: paymentFee < 0 ? Math.abs(paymentFee) : 0,
          notes: `Payment method: ${paymentMethod}`,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map((item) => ({
        order_id: orderData.id,
        product_id: item.handle,
        product_name: item.title,
        product_variant: item.variant || null,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity,
        product_image_url: item.image || null,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Clear cart from localStorage (legacy)
      localStorage.removeItem("cart");

      // Clear cart from context (current system)
      clearCart();

      // Show success message
      setOrderPlaced(true);

      // Redirect to order history after 3 seconds
      setTimeout(() => {
        onClose();
        window.location.href = "/account";
      }, 3000);
    } catch (error: any) {
      console.error("Error placing order:", error);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  // Don't render until blur is applied, portal is ready, AND shouldRenderModal is true
  // EXAKT wie Auth Modal - EINE Bedingung mit ||
  if (!isOpen || !portalContainer || !shouldRenderModal) return null;

  const modalContent = (
    <React.Fragment>
      {/* Unsichtbarer Backdrop für Click-Handling */}
      <div
        className="fixed inset-0 z-[10025]"
        style={{
          backgroundColor: "transparent",
          animation: "backdropFadeIn 0.3s ease-out",
        }}
        onClick={onClose}
      />
      <div
        className="fixed inset-0 z-[10030] flex items-start justify-center pt-26 md:pt-16 px-4"
        style={{ 
          touchAction: "none",
          pointerEvents: "none",
        }}
      >
        <div
          className="relative shadow-xl w-full max-w-4xl max-h-[70vh] flex flex-col"
          style={{ 
            backgroundColor: "white",
            border: "2px solid rgb(45,45,52)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: "0.75rem",
            touchAction: "auto",
            pointerEvents: "auto",
            // CPU/Hardware rendering - no GPU acceleration
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {orderPlaced ? (
            // Order Success View
            <>
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between border-b"
                style={{
                  borderColor: 'rgb(45,45,52)',
                  backgroundColor: 'rgb(45,45,52)',
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                  margin: '-2px -2px 0 -2px',
                  padding: '12px 16px'
                }}
              >
                <h2 
                  className="text-lg font-medium text-white"
                  style={{ fontFamily: "Calibri, Arial, sans-serif" }}
                >
                  Order Complete
                </h2>
              </div>
              <div 
                className="p-8 text-center overflow-y-auto flex-1" 
                style={{ 
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                  overscrollBehavior: "contain",
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Order Placed!
                  </h2>
                  <p className="text-gray-600">
                    Thank you for your order. You will be redirected to your order
                    history shortly.
                  </p>
                </div>
                <div 
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    border: "1px solid rgba(34, 197, 94, 0.3)"
                  }}
                >
                  <p className="text-green-700">
                    Your order has been successfully placed and is now being
                    processed.
                  </p>
                </div>
              </div>
            </>
          ) : !user ? (
            // Not Logged In View
            <>
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between border-b"
                style={{
                  borderColor: 'rgb(45,45,52)',
                  backgroundColor: 'rgb(45,45,52)',
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                  margin: '-2px -2px 0 -2px',
                  padding: '12px 16px'
                }}
              >
                <h2 
                  className="text-lg font-medium text-white"
                  style={{ fontFamily: "Calibri, Arial, sans-serif" }}
                >
                  Checkout
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl transition-colors duration-200 group"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                className="flex-1 overflow-y-auto p-8" 
                style={{ 
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                  overscrollBehavior: "contain",
                }}
              >
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Login Required
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Please login or register to proceed with your order.
                  </p>

                  <button
                    onClick={() => {
                      if (onAuthRequired) {
                        onAuthRequired();
                      } else {
                        setShowAuthModal(true);
                      }
                    }}
                    className="w-full py-2 px-4 text-white font-medium rounded-xl transition-colors duration-200"
                    style={{
                      backgroundColor: "#e91111",
                      boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c00d0d";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#e91111";
                    }}
                  >
                    Login or Register to proceed
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Main Checkout View
            <>
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between border-b"
                style={{
                  borderColor: 'rgb(45,45,52)',
                  backgroundColor: 'rgb(45,45,52)',
                  borderTopLeftRadius: '0.75rem',
                  borderTopRightRadius: '0.75rem',
                  margin: '-2px -2px 0 -2px',
                  padding: '12px 16px'
                }}
              >
                <h2 
                  className="text-lg font-medium text-white"
                  style={{ fontFamily: "Calibri, Arial, sans-serif" }}
                >
                  Checkout
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl transition-colors duration-200 group"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div 
                className="flex-1 overflow-y-auto p-6" 
                style={{ 
                  WebkitOverflowScrolling: "touch",
                  touchAction: "pan-y",
                  overscrollBehavior: "contain",
                }}
              >
                {/* Success/Error Messages */}
                {success && (
                  <div 
                    className="rounded-xl p-4 mb-6"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      border: "1px solid rgba(34, 197, 94, 0.3)"
                    }}
                  >
                    <p className="text-green-700">Address added successfully!</p>
                  </div>
                )}

                {error && (
                  <div 
                    className="rounded-xl p-4 mb-6"
                    style={{
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)"
                    }}
                  >
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Order Summary & Address */}
                <div className="space-y-6">
                  {/* Order Items */}
                  <div 
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(45, 45, 52, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div
                          key={`${item.handle}-${item.variant || "default"}`}
                          className="flex items-center gap-3"
                        >
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-12 h-12 object-cover rounded-lg"
                              style={{ border: "1px solid rgba(45, 45, 52, 0.2)" }}
                            />
                          )}
                          <div className="flex-1">
                            <h4 className="text-gray-900 font-medium text-sm">
                              {item.title}
                            </h4>
                            {item.variant && (
                              <p className="text-gray-500 text-xs">
                                {item.variant}
                              </p>
                            )}
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600 text-sm">
                                Qty: {item.quantity}
                              </span>
                              <span className="text-gray-900 font-medium text-sm">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div 
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(45, 45, 52, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Shipping Address
                    </h3>

                    {addresses.length === 0 ? (
                      <div>
                        <p className="text-gray-500 text-sm mb-4">
                          No saved addresses found. Please add a shipping
                          address.
                        </p>
                        <button
                          onClick={() => setShowAddAddressForm(true)}
                          className="w-full px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                          style={{
                            background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                            boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                            minHeight: "44px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          Add Address
                        </button>
                      </div>
                    ) : (
                      <div>
                        {/* Address Selection */}
                        <div className="space-y-2 mb-4">
                          {addresses.map((address) => (
                            <div
                              key={address.id}
                              className="p-3 rounded-xl cursor-pointer transition-colors"
                              style={{
                                backgroundColor: selectedAddressId === address.id 
                                  ? "rgba(45, 45, 52, 0.08)" 
                                  : "rgba(255, 255, 255, 0.5)",
                                border: "1px solid rgba(45, 45, 52, 0.15)",
                                boxShadow: selectedAddressId === address.id 
                                  ? "inset 0 0 0 1px rgba(45, 45, 52, 0.2)" 
                                  : "none",
                              }}
                              onClick={() => setSelectedAddressId(address.id)}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-gray-900 font-medium">
                                      {address.full_name}
                                    </h4>
                                    {address.is_primary && (
                                      <span 
                                        className="px-2 py-1 text-white text-xs rounded"
                                        style={{ backgroundColor: "rgb(45, 45, 52)" }}
                                      >
                                        Primary
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-gray-600 text-sm">
                                    {address.street} {address.house_number}
                                  </p>
                                  <p className="text-gray-600 text-sm">
                                    {address.postal_code} {address.city},{" "}
                                    {address.country}
                                  </p>
                                </div>
                                <input
                                  type="radio"
                                  checked={selectedAddressId === address.id}
                                  onChange={() =>
                                    setSelectedAddressId(address.id)
                                  }
                                  className="text-gray-900"
                                  style={{ accentColor: "rgb(45, 45, 52)" }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => setShowAddAddressForm(true)}
                          className="w-full px-4 py-2 rounded-xl font-medium transition-colors"
                          style={{
                            backgroundColor: "rgba(45, 45, 52, 0.1)",
                            border: "1px solid rgba(45, 45, 52, 0.2)",
                            color: "rgb(45, 45, 52)"
                          }}
                        >
                          Add New Address
                        </button>
                      </div>
                    )}

                    {/* Add Address Form */}
                    {showAddAddressForm && (
                      <div 
                        className="mt-4 p-4 rounded-xl"
                        style={{
                          backgroundColor: "rgba(45, 45, 52, 0.05)",
                          border: "1px solid rgba(45, 45, 52, 0.2)",
                        }}
                      >
                        <h4 className="text-gray-900 font-medium mb-3">
                          Add New Address
                        </h4>
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Full Name *"
                            value={addressForm.full_name}
                            onChange={(e) =>
                              setAddressForm({
                                ...addressForm,
                                full_name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.9)",
                              border: "1px solid rgba(45, 45, 52, 0.2)",
                            }}
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Street *"
                              value={addressForm.street}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  street: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                              }}
                            />
                            <input
                              type="text"
                              placeholder="House Number *"
                              value={addressForm.house_number}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  house_number: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="City *"
                              value={addressForm.city}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  city: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                              }}
                            />
                            <input
                              type="text"
                              placeholder="Postal Code *"
                              value={addressForm.postal_code}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  postal_code: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="State/Province"
                              value={addressForm.state_province}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  state_province: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                              }}
                            />
                            <input
                              type="text"
                              placeholder="Country *"
                              value={addressForm.country}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  country: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                              }}
                            />
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="is_primary_checkout"
                              checked={addressForm.is_primary}
                              onChange={(e) =>
                                setAddressForm({
                                  ...addressForm,
                                  is_primary: e.target.checked,
                                })
                              }
                              className="w-4 h-4 rounded focus:ring-2"
                              style={{ accentColor: "rgb(45, 45, 52)" }}
                            />
                            <label
                              htmlFor="is_primary_checkout"
                              className="ml-2 text-sm text-gray-600"
                            >
                              Set as primary address
                            </label>
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={handleAddAddress}
                              disabled={loading}
                              className="flex-1 px-4 py-2 text-white rounded-xl font-semibold disabled:opacity-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                              style={{
                                background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                                boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                                minHeight: "44px",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                              }}
                            >
                              {loading ? "Adding..." : "Save"}
                            </button>
                            <button
                              onClick={() => setShowAddAddressForm(false)}
                              className="flex-1 px-4 py-2 rounded-xl font-medium transition-colors"
                              style={{
                                backgroundColor: "rgba(45, 45, 52, 0.1)",
                                border: "1px solid rgba(45, 45, 52, 0.2)",
                                color: "rgb(45, 45, 52)"
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Shipping & Payment */}
                <div className="space-y-6">
                  {/* Shipping Method */}
                  <div 
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(45, 45, 52, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Shipping Method
                    </h3>
                    <div className="space-y-2">
                      <div 
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: "rgba(45, 45, 52, 0.08)",
                          border: "1px solid rgba(45, 45, 52, 0.15)",
                          boxShadow: "inset 0 0 0 1px rgba(45, 45, 52, 0.2)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-gray-900 font-medium">
                              Standard Shipping
                            </h4>
                            <p className="text-gray-600 text-sm">
                              Delivery within 5-7 business days
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-900 font-medium">
                              {formatPrice(20.0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs">
                        More shipping options will be available soon
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div 
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(45, 45, 52, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Payment Method
                    </h3>
                    <div className="space-y-2">
                      <div
                        className="p-3 rounded-xl cursor-pointer transition-colors"
                        style={{
                          backgroundColor: paymentMethod === "paypal" 
                            ? "rgba(45, 45, 52, 0.08)" 
                            : "rgba(255, 255, 255, 0.5)",
                          border: "1px solid rgba(45, 45, 52, 0.15)",
                          boxShadow: paymentMethod === "paypal" 
                            ? "inset 0 0 0 1px rgba(45, 45, 52, 0.2)" 
                            : "none",
                        }}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              checked={paymentMethod === "paypal"}
                              onChange={() => setPaymentMethod("paypal")}
                              style={{ accentColor: "rgb(45, 45, 52)" }}
                            />
                            <span className="text-gray-900 font-medium">
                              PayPal
                            </span>
                          </div>
                          <span className="text-gray-600 text-sm">
                            No additional fee
                          </span>
                        </div>
                      </div>

                      <div
                        className="p-3 rounded-xl cursor-pointer transition-colors"
                        style={{
                          backgroundColor: paymentMethod === "bitcoin" 
                            ? "rgba(45, 45, 52, 0.08)" 
                            : "rgba(255, 255, 255, 0.5)",
                          border: "1px solid rgba(45, 45, 52, 0.15)",
                          boxShadow: paymentMethod === "bitcoin" 
                            ? "inset 0 0 0 1px rgba(45, 45, 52, 0.2)" 
                            : "none",
                        }}
                        onClick={() => setPaymentMethod("bitcoin")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              checked={paymentMethod === "bitcoin"}
                              onChange={() => setPaymentMethod("bitcoin")}
                              style={{ accentColor: "rgb(45, 45, 52)" }}
                            />
                            <span className="text-gray-900 font-medium">
                              Bitcoin
                            </span>
                          </div>
                          <span className="text-green-600 text-sm font-medium">
                            -5% discount
                          </span>
                        </div>
                      </div>

                      <div
                        className="p-3 rounded-xl cursor-pointer transition-colors"
                        style={{
                          backgroundColor: paymentMethod === "bank_transfer" 
                            ? "rgba(45, 45, 52, 0.08)" 
                            : "rgba(255, 255, 255, 0.5)",
                          border: "1px solid rgba(45, 45, 52, 0.15)",
                          boxShadow: paymentMethod === "bank_transfer" 
                            ? "inset 0 0 0 1px rgba(45, 45, 52, 0.2)" 
                            : "none",
                        }}
                        onClick={() => setPaymentMethod("bank_transfer")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              checked={paymentMethod === "bank_transfer"}
                              onChange={() => setPaymentMethod("bank_transfer")}
                              style={{ accentColor: "rgb(45, 45, 52)" }}
                            />
                            <span className="text-gray-900 font-medium">
                              Bank Transfer
                            </span>
                          </div>
                          <span className="text-orange-600 text-sm font-medium">
                            +5% fee
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div 
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(45, 45, 52, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Coupon
                    </h3>

                    {!appliedCoupon ? (
                      <>
                        {!showCouponForm ? (
                          <button
                            onClick={() => setShowCouponForm(true)}
                            className="w-full px-4 py-2 rounded-xl transition-colors duration-200 font-medium"
                            style={{
                              backgroundColor: "rgba(45, 45, 52, 0.1)",
                              border: "1px solid rgba(45, 45, 52, 0.2)",
                              color: "rgb(45, 45, 52)"
                            }}
                          >
                            Use Coupon Code
                          </button>
                        ) : (
                          <div className="space-y-4">
                            <h4 className="text-gray-900 font-medium">
                              Enter Your Code
                            </h4>
                            <div className="space-y-3">
                              <input
                                type="text"
                                placeholder="Coupon Code"
                                value={couponCode}
                                onChange={(e) =>
                                  setCouponCode(e.target.value.toUpperCase())
                                }
                                className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-400"
                                style={{ 
                                  textTransform: "uppercase",
                                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                                  border: "1px solid rgba(45, 45, 52, 0.2)",
                                }}
                                onKeyPress={(e) => {
                                  if (e.key === "Enter") {
                                    handleApplyCoupon();
                                  }
                                }}
                              />
                              {couponError && (
                                <p className="text-red-500 text-sm">
                                  {couponError}
                                </p>
                              )}
                              <div className="flex gap-2">
                                <button
                                  onClick={handleApplyCoupon}
                                  disabled={!couponCode.trim()}
                                  className="flex-1 px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                                  style={{
                                    background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                                    boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                                    minHeight: "44px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                  }}
                                >
                                  Use Code
                                </button>
                                <button
                                  onClick={handleCancelCoupon}
                                  className="flex-1 px-4 py-2 rounded-xl transition-colors duration-200 font-medium"
                                  style={{
                                    backgroundColor: "rgba(45, 45, 52, 0.1)",
                                    border: "1px solid rgba(45, 45, 52, 0.2)",
                                    color: "rgb(45, 45, 52)"
                                  }}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div 
                        className="flex items-center justify-between p-3 rounded-xl"
                        style={{
                          backgroundColor: "rgba(34, 197, 94, 0.1)",
                          border: "1px solid rgba(34, 197, 94, 0.3)",
                        }}
                      >
                        <div>
                          <span className="text-gray-900 font-medium">
                            Applied: {appliedCoupon}
                          </span>
                          <p className="text-green-600 text-sm font-medium">
                            -
                            {
                              validateCouponCode(appliedCoupon)
                                ?.discountPercentage
                            }
                            % discount
                          </p>
                        </div>
                        <button
                          onClick={handleRemoveCoupon}
                          className="px-3 py-1 text-red-500 hover:text-red-600 transition-colors font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Order Total */}
                  <div 
                    className="rounded-xl p-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "1px solid rgba(45, 45, 52, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Order Total
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="text-gray-900">
                          {formatPrice(calculateSubtotal())}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="text-gray-900">
                          {formatPrice(calculateShipping())}
                        </span>
                      </div>
                      {calculatePaymentFee() !== 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Payment{" "}
                            {calculatePaymentFee() > 0 ? "Fee" : "Discount"}:
                          </span>
                          <span
                            className={
                              calculatePaymentFee() > 0
                                ? "text-orange-600 font-medium"
                                : "text-green-600 font-medium"
                            }
                          >
                            {calculatePaymentFee() > 0 ? "+" : ""}
                            {formatPrice(calculatePaymentFee())}
                          </span>
                        </div>
                      )}
                      {appliedCoupon && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Coupon Discount:
                          </span>
                          <span className="text-green-600 font-medium">
                            -
                            {formatPrice(
                              calculateCouponDiscount(
                                calculateSubtotal(),
                                appliedCoupon,
                              ),
                            )}
                          </span>
                        </div>
                      )}
                      <div 
                        className="pt-2 mt-2"
                        style={{ borderTop: "1px solid rgba(45, 45, 52, 0.2)" }}
                      >
                        <div className="flex justify-between font-semibold">
                          <span className="text-gray-900">Total:</span>
                          <span className="text-gray-900 text-lg">
                            {formatPrice(calculateTotal())}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading || !selectedAddressId}
                    className="w-full px-6 py-3 text-white rounded-xl font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                      minHeight: "44px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      "Place Order"
                    )}
                  </button>
                </div>
              </div>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
  
  return createPortal(modalContent, portalContainer);
}

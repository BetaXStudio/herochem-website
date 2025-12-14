"use client";
import { useEffect, useState } from "react";
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

  // Erweiterte Scroll-Isolation für Modal
  useEffect(() => {
    if (isOpen) {
      // Speichere den aktuellen Scroll-Zustand
      const scrollY = window.scrollY;

      // Speichere Scroll-Position im dataset für Wiederherstellung
      document.body.dataset.scrollPosition = scrollY.toString();

      // Fixiere Body-Position um Scroll-Bleeding zu verhindern
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      // Cleanup: Stelle alles wieder her
      return () => {
        const savedScrollY = parseInt(
          document.body.dataset.scrollPosition || "0",
        );

        // Entferne alle Styles
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Stelle Scroll-Position wieder her
        window.scrollTo(0, savedScrollY);

        // Cleanup dataset
        delete document.body.dataset.scrollPosition;
      };
    }
  }, [isOpen]);

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

  // Handler für Scroll-Event-Isolation
  const handleModalWheel = (e: React.WheelEvent) => {
    const modal = e.currentTarget as HTMLElement;
    const { scrollTop, scrollHeight, clientHeight } = modal;

    // Verhindere Scroll-Propagation an Grenzen
    if (
      (e.deltaY < 0 && scrollTop === 0) || // Am oberen Ende nach oben scrollen
      (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight) // Am unteren Ende nach unten scrollen
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  if (!isOpen) return null;

  return (
    <>
      <style jsx>{`
        .hidden-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hidden-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-start justify-center pt-16 p-4"
        style={{ animation: "backdropFadeIn 0.3s ease-out" }}
      >
        <div
          className="bg-neutral-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[75vh] overflow-y-auto hidden-scrollbar"
          style={{ animation: "modalSlideIn 0.3s ease-out" }}
          onWheel={handleModalWheel}
        >
          {orderPlaced ? (
            // Order Success View
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <h2 className="text-2xl font-bold text-white mb-2">
                  Order Placed!
                </h2>
                <p className="text-neutral-300">
                  Thank you for your order. You will be redirected to your order
                  history shortly.
                </p>
              </div>
              <div className="bg-green-900/50 border border-green-600 rounded-lg p-4">
                <p className="text-green-200">
                  Your order has been successfully placed and is now being
                  processed.
                </p>
              </div>
            </div>
          ) : !user ? (
            // Not Logged In View
            <div className="p-8 text-center">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Checkout</h2>
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-8">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-white"
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  Login Required
                </h3>
                <p className="text-neutral-400 mb-6">
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
                  className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium"
                >
                  Login or Register to proceed
                </button>
              </div>
            </div>
          ) : (
            // Main Checkout View
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Checkout</h2>
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Success/Error Messages */}
              {success && (
                <div className="bg-green-900/50 border border-green-600 rounded-lg p-4 mb-6">
                  <p className="text-green-200">Address added successfully!</p>
                </div>
              )}

              {error && (
                <div className="bg-red-900/50 border border-red-600 rounded-lg p-4 mb-6">
                  <p className="text-red-200">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Order Summary & Address */}
                <div className="space-y-6">
                  {/* Order Items */}
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
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
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">
                              {item.title}
                            </h4>
                            {item.variant && (
                              <p className="text-neutral-400 text-xs">
                                {item.variant}
                              </p>
                            )}
                            <div className="flex items-center justify-between">
                              <span className="text-neutral-300 text-sm">
                                Qty: {item.quantity}
                              </span>
                              <span className="text-white font-medium text-sm">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Shipping Address
                    </h3>

                    {addresses.length === 0 ? (
                      <div>
                        <p className="text-neutral-400 text-sm mb-4">
                          No saved addresses found. Please add a shipping
                          address.
                        </p>
                        <button
                          onClick={() => setShowAddAddressForm(true)}
                          className="w-full px-4 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium"
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
                              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                                selectedAddressId === address.id
                                  ? "border-[#e91111] bg-[#e91111]/10"
                                  : "border-neutral-600 hover:border-neutral-500"
                              }`}
                              onClick={() => setSelectedAddressId(address.id)}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-white font-medium">
                                      {address.full_name}
                                    </h4>
                                    {address.is_primary && (
                                      <span className="px-2 py-1 bg-[#e91111] text-white text-xs rounded">
                                        Primary
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-neutral-300 text-sm">
                                    {address.street} {address.house_number}
                                  </p>
                                  <p className="text-neutral-300 text-sm">
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
                                  className="text-[#e91111] bg-neutral-700 border-neutral-600"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => setShowAddAddressForm(true)}
                          className="w-full px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium"
                        >
                          Add New Address
                        </button>
                      </div>
                    )}

                    {/* Add Address Form */}
                    {showAddAddressForm && (
                      <div className="mt-4 p-4 bg-neutral-700 rounded-lg">
                        <h4 className="text-white font-medium mb-3">
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
                            className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-full px-3 py-2 bg-neutral-600 border border-neutral-500 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
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
                              className="w-4 h-4 text-[#e91111] bg-neutral-600 border-neutral-500 rounded focus:ring-[#e91111] focus:ring-2"
                            />
                            <label
                              htmlFor="is_primary_checkout"
                              className="ml-2 text-sm text-neutral-300"
                            >
                              Set as primary address
                            </label>
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={handleAddAddress}
                              disabled={loading}
                              className="flex-1 px-4 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium disabled:opacity-50"
                            >
                              {loading ? "Adding..." : "Save Address"}
                            </button>
                            <button
                              onClick={() => setShowAddAddressForm(false)}
                              className="flex-1 px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium"
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
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Shipping Method
                    </h3>
                    <div className="space-y-2">
                      <div className="p-3 border border-[#e91111] bg-[#e91111]/10 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">
                              Standard Shipping
                            </h4>
                            <p className="text-neutral-300 text-sm">
                              Delivery within 5-7 business days
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-white font-medium">
                              {formatPrice(20.0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-400 text-xs">
                        More shipping options will be available soon
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Payment Method
                    </h3>
                    <div className="space-y-2">
                      <div
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          paymentMethod === "paypal"
                            ? "border-[#e91111] bg-[#e91111]/10"
                            : "border-neutral-600 hover:border-neutral-500"
                        }`}
                        onClick={() => setPaymentMethod("paypal")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              checked={paymentMethod === "paypal"}
                              onChange={() => setPaymentMethod("paypal")}
                              className="text-[#e91111] bg-neutral-700 border-neutral-600"
                            />
                            <span className="text-white font-medium">
                              PayPal
                            </span>
                          </div>
                          <span className="text-neutral-300 text-sm">
                            No additional fee
                          </span>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          paymentMethod === "bitcoin"
                            ? "border-[#e91111] bg-[#e91111]/10"
                            : "border-neutral-600 hover:border-neutral-500"
                        }`}
                        onClick={() => setPaymentMethod("bitcoin")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              checked={paymentMethod === "bitcoin"}
                              onChange={() => setPaymentMethod("bitcoin")}
                              className="text-[#e91111] bg-neutral-700 border-neutral-600"
                            />
                            <span className="text-white font-medium">
                              Bitcoin
                            </span>
                          </div>
                          <span className="text-green-400 text-sm">
                            -5% discount
                          </span>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          paymentMethod === "bank_transfer"
                            ? "border-[#e91111] bg-[#e91111]/10"
                            : "border-neutral-600 hover:border-neutral-500"
                        }`}
                        onClick={() => setPaymentMethod("bank_transfer")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              checked={paymentMethod === "bank_transfer"}
                              onChange={() => setPaymentMethod("bank_transfer")}
                              className="text-[#e91111] bg-neutral-700 border-neutral-600"
                            />
                            <span className="text-white font-medium">
                              Bank Transfer
                            </span>
                          </div>
                          <span className="text-orange-400 text-sm">
                            +5% fee
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Coupon
                    </h3>

                    {!appliedCoupon ? (
                      <>
                        {!showCouponForm ? (
                          <button
                            onClick={() => setShowCouponForm(true)}
                            className="w-full px-4 py-2 bg-neutral-700 text-white rounded-md hover:bg-neutral-600 transition-colors duration-200 border border-neutral-600"
                          >
                            Use Coupon Code
                          </button>
                        ) : (
                          <div className="space-y-4">
                            <h4 className="text-white font-medium">
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
                                className="w-full px-3 py-2 bg-neutral-700 text-white rounded-md border border-neutral-600 focus:border-[#e91111] focus:outline-none placeholder-neutral-400"
                                style={{ textTransform: "uppercase" }}
                                onKeyPress={(e) => {
                                  if (e.key === "Enter") {
                                    handleApplyCoupon();
                                  }
                                }}
                              />
                              {couponError && (
                                <p className="text-red-400 text-sm">
                                  {couponError}
                                </p>
                              )}
                              <div className="flex gap-2">
                                <button
                                  onClick={handleApplyCoupon}
                                  disabled={!couponCode.trim()}
                                  className="flex-1 px-4 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  Use Code
                                </button>
                                <button
                                  onClick={handleCancelCoupon}
                                  className="flex-1 px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-between p-3 bg-green-900/20 border border-green-600 rounded-lg">
                        <div>
                          <span className="text-white font-medium">
                            Applied: {appliedCoupon}
                          </span>
                          <p className="text-green-400 text-sm">
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
                          className="px-3 py-1 text-red-400 hover:text-red-300 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Order Total */}
                  <div className="bg-neutral-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Order Total
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Subtotal:</span>
                        <span className="text-white">
                          {formatPrice(calculateSubtotal())}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Shipping:</span>
                        <span className="text-white">
                          {formatPrice(calculateShipping())}
                        </span>
                      </div>
                      {calculatePaymentFee() !== 0 && (
                        <div className="flex justify-between">
                          <span className="text-neutral-400">
                            Payment{" "}
                            {calculatePaymentFee() > 0 ? "Fee" : "Discount"}:
                          </span>
                          <span
                            className={
                              calculatePaymentFee() > 0
                                ? "text-orange-400"
                                : "text-green-400"
                            }
                          >
                            {calculatePaymentFee() > 0 ? "+" : ""}
                            {formatPrice(calculatePaymentFee())}
                          </span>
                        </div>
                      )}
                      {appliedCoupon && (
                        <div className="flex justify-between">
                          <span className="text-neutral-400">
                            Coupon Discount:
                          </span>
                          <span className="text-green-400">
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
                      <div className="border-t border-neutral-600 pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span className="text-white">Total:</span>
                          <span className="text-white text-lg">
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
                    className="w-full px-6 py-3 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
          )}
        </div>
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/auth/auth-context";
import { supabase } from "../../lib/supabase";

interface OrderItem {
  id: string;
  product_id: string;
  product_name: string;
  product_variant: string | null;
  quantity: number;
  unit_price: number;
  total_price: number;
  product_image_url: string | null;
}

interface ShippingAddress {
  id: string;
  full_name: string;
  street: string;
  house_number: string;
  city: string;
  postal_code: string;
  state_province: string | null;
  country: string;
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_amount: number;
  currency: string;
  shipping_cost: number;
  tax_amount: number;
  discount_amount: number;
  shipping_address_id?: string;
  created_at: string;
  shipped_at: string | null;
  delivered_at: string | null;
  items?: OrderItem[];
  shipping_address?: ShippingAddress;
}

const statusLabels: { [key: string]: string } = {
  pending: "Pending",
  confirmed: "Confirmed",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

const statusColors: { [key: string]: string } = {
  pending: "bg-yellow-600",
  confirmed: "bg-blue-600",
  processing: "bg-orange-600",
  shipped: "bg-purple-600",
  delivered: "bg-green-600",
  cancelled: "bg-red-600",
};

export default function OrderHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [loadingDetails, setLoadingDetails] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, [user?.id]);

  const fetchOrders = async () => {
    if (!user?.id) return;

    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to load order history");
      } else {
        setOrders(data || []);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to load order history");
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderDetails = async (orderId: string) => {
    if (!user?.id) return;

    setLoadingDetails(orderId);
    try {
      // Fetch order items
      const { data: itemsData, error: itemsError } = await supabase
        .from("order_items")
        .select("*")
        .eq("order_id", orderId);

      if (itemsError) throw itemsError;

      // Get the order to find shipping address ID
      const order = orders.find((o) => o.id === orderId);
      let shippingAddress = null;

      // Check if order has shipping_address_id property
      if (order?.shipping_address_id) {
        const { data: addressData, error: addressError } = await supabase
          .from("user_addresses")
          .select("*")
          .eq("id", order.shipping_address_id)
          .single();

        if (!addressError && addressData) {
          shippingAddress = addressData;
        }
      }

      // Update the order with details
      setOrders((prevOrders) =>
        prevOrders.map((o) =>
          o.id === orderId
            ? {
                ...o,
                items: itemsData || [],
                shipping_address: shippingAddress,
              }
            : o,
        ),
      );

      setExpandedOrder(orderId);
    } catch (error) {
      console.error("Error fetching order details:", error);
      setError("Failed to load order details");
    } finally {
      setLoadingDetails(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatPrice = (amount: number, currency: string = "EUR") => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const cancelOrder = async (orderId: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to cancel this order? This action cannot be undone.",
    );

    if (!isConfirmed) {
      return;
    }

    try {
      // First delete order items
      const { error: itemsError } = await supabase
        .from("order_items")
        .delete()
        .eq("order_id", orderId);

      if (itemsError) {
        console.error("Error deleting order items:", itemsError);
        alert("Failed to cancel order. Please try again.");
        return;
      }

      // Then delete the order
      const { error: orderError } = await supabase
        .from("orders")
        .delete()
        .eq("id", orderId);

      if (orderError) {
        console.error("Error deleting order:", orderError);
        alert("Failed to cancel order. Please try again.");
        return;
      }

      // Remove the order from local state
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId),
      );

      // Close expanded view if this order was expanded
      if (expandedOrder === orderId) {
        setExpandedOrder(null);
      }

      alert("Order cancelled successfully.");
    } catch (error) {
      console.error("Error cancelling order:", error);
      alert("Failed to cancel order. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
        <span className="ml-3 text-gray-500">Loading order history...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Error Message */}
      {error && (
        <div 
          className="rounded-xl p-4"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)"
          }}
        >
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* No Orders Message */}
      {orders.length === 0 && !loading ? (
        <div className="rounded-xl p-6 bg-gray-50 text-center">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Order History
          </h3>
          <div className="space-y-4">
            <div className="text-gray-400 mb-6">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-base text-gray-700 mb-2">No orders yet</p>
              <p className="text-gray-500 text-sm">
                You haven&apos;t placed any orders yet. Start shopping to see
                your order history here.
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/categories")}
              className="w-full px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                minHeight: "44px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              PLACE YOUR FIRST ORDER
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Orders List */}
          <div className="rounded-xl p-4 bg-gray-50">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Order History
            </h3>

            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-xl overflow-hidden bg-white"
                  style={{ border: "1px solid #e5e7eb" }}
                >
                  {/* Order Header */}
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                          <h4 className="text-gray-900 font-medium text-base">
                            #{order.order_number}
                          </h4>
                          <span
                            className={`px-2 py-0.5 text-white text-xs rounded-full w-fit ${statusColors[order.status]}`}
                          >
                            {statusLabels[order.status]}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <span className="text-gray-500 text-xs">
                              Total Amount:
                            </span>
                            <p className="text-gray-900 font-medium">
                              {formatPrice(order.total_amount, order.currency)}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs">
                              Order Date:
                            </span>
                            <p className="text-gray-700 text-sm">
                              {formatDate(order.created_at)}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs">Status:</span>
                            <p className="text-gray-700 text-sm">
                              {order.shipped_at &&
                                "Shipped on " + formatDate(order.shipped_at)}
                              {order.delivered_at &&
                                "Delivered on " +
                                  formatDate(order.delivered_at)}
                              {!order.shipped_at &&
                                !order.delivered_at &&
                                "Processing your order"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (expandedOrder === order.id) {
                            setExpandedOrder(null);
                          } else {
                            fetchOrderDetails(order.id);
                          }
                        }}
                        disabled={loadingDetails === order.id}
                        className="px-3 py-1.5 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 text-sm"
                        style={{
                          background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                          boxShadow: "0 2px 8px rgba(45, 45, 52, 0.3)",
                        }}
                      >
                        {loadingDetails === order.id ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                            Loading...
                          </div>
                        ) : expandedOrder === order.id ? (
                          "Hide"
                        ) : (
                          "Details"
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Order Details (Expanded) */}
                  {expandedOrder === order.id && order.items && (
                    <div className="border-t border-gray-200 bg-gray-50">
                      <div className="p-3">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {/* Order Items */}
                          <div>
                            <h5 className="text-gray-900 font-medium mb-2 flex items-center text-sm">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                              </svg>
                              Order Items ({order.items.length})
                            </h5>
                            <div className="space-y-2">
                              {order.items.map((item) => {
                                const isDeus = item.product_image_url?.toLowerCase().includes('deus');
                                return (
                                <div
                                  key={item.id}
                                  className="flex items-start gap-2 bg-white rounded-lg p-2"
                                  style={{ border: "1px solid #e5e7eb" }}
                                >
                                  {item.product_image_url && (
                                    <div 
                                      className="rounded-md overflow-hidden flex-shrink-0"
                                      style={{ 
                                        width: '48px', 
                                        height: '48px',
                                      }}
                                    >
                                      <img
                                        src={item.product_image_url}
                                        alt={item.product_name}
                                        className="object-cover w-full h-full"
                                        style={{
                                          transform: isDeus ? 'scale(1.25)' : 'scale(0.85)',
                                        }}
                                      />
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <h6 className="text-gray-900 font-medium text-sm truncate">
                                      {item.product_name}
                                    </h6>
                                    {item.product_variant && (
                                      <p className="text-gray-500 text-xs">
                                        {item.product_variant}
                                      </p>
                                    )}
                                    <div className="flex items-center justify-between mt-1">
                                      <span className="text-gray-500 text-xs">
                                        Qty: {item.quantity} ×{" "}
                                        {formatPrice(
                                          item.unit_price,
                                          order.currency,
                                        )}
                                      </span>
                                      <span className="text-gray-900 font-medium text-sm">
                                        {formatPrice(
                                          item.total_price,
                                          order.currency,
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )})}
                            </div>

                            {/* Order Summary */}
                            <div className="mt-2 bg-white rounded-lg p-3" style={{ border: "1px solid #e5e7eb" }}>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Subtotal:
                                  </span>
                                  <span className="text-gray-700">
                                    {formatPrice(
                                      order.total_amount -
                                        order.shipping_cost -
                                        order.tax_amount +
                                        order.discount_amount,
                                      order.currency,
                                    )}
                                  </span>
                                </div>
                                {order.discount_amount > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">
                                      Discount:
                                    </span>
                                    <span className="text-green-600">
                                      -
                                      {formatPrice(
                                        order.discount_amount,
                                        order.currency,
                                      )}
                                    </span>
                                  </div>
                                )}
                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Shipping:
                                  </span>
                                  <span className="text-gray-700">
                                    {formatPrice(
                                      order.shipping_cost,
                                      order.currency,
                                    )}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Tax:</span>
                                  <span className="text-gray-700">
                                    {formatPrice(
                                      order.tax_amount,
                                      order.currency,
                                    )}
                                  </span>
                                </div>
                                <div className="border-t border-gray-200 pt-1 mt-1">
                                  <div className="flex justify-between font-medium">
                                    <span className="text-gray-900">Total:</span>
                                    <span className="text-gray-900 text-base">
                                      {formatPrice(
                                        order.total_amount,
                                        order.currency,
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Shipping Address */}
                          <div>
                            <h5 className="text-gray-900 font-medium mb-3 flex items-center">
                              <svg
                                className="w-5 h-5 mr-2 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              Shipping Address
                            </h5>
                            {order.shipping_address ? (
                              <div className="bg-white rounded-lg p-3" style={{ border: "1px solid #e5e7eb" }}>
                                <h6 className="text-gray-900 font-medium">
                                  {order.shipping_address.full_name}
                                </h6>
                                <div className="text-gray-600 text-sm mt-1 space-y-1">
                                  <p>
                                    {order.shipping_address.street}{" "}
                                    {order.shipping_address.house_number}
                                  </p>
                                  <p>
                                    {order.shipping_address.postal_code}{" "}
                                    {order.shipping_address.city}
                                    {order.shipping_address.state_province &&
                                      `, ${order.shipping_address.state_province}`}
                                  </p>
                                  <p>{order.shipping_address.country}</p>
                                </div>
                              </div>
                            ) : (
                              <div className="bg-gray-50 rounded-lg p-3" style={{ border: "1px solid #e5e7eb" }}>
                                <p className="text-gray-500 text-sm">
                                  No shipping address available
                                </p>
                              </div>
                            )}

                            {/* Order Actions */}
                            <div className="mt-4 space-y-2">
                              {order.status === "delivered" && (
                                <button 
                                  className="w-full px-4 py-2 text-white rounded-xl font-medium transition-all duration-200"
                                  style={{ 
                                    background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    minHeight: "44px"
                                  }}
                                >
                                  Reorder Items
                                </button>
                              )}
                              {["shipped", "delivered"].includes(
                                order.status,
                              ) && (
                                <button 
                                  className="w-full px-4 py-2 text-white rounded-xl font-medium transition-all duration-200"
                                  style={{ 
                                    background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    minHeight: "44px"
                                  }}
                                >
                                  Track Package
                                </button>
                              )}
                              {order.status === "pending" && (
                                <button
                                  onClick={() => cancelOrder(order.id)}
                                  className="w-full px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-500 transition-colors duration-200 font-medium"
                                  style={{ minHeight: "44px" }}
                                >
                                  Cancel Order
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

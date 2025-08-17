'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../../components/auth/auth-context';
import { supabase } from '../../lib/supabase';

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
  'pending': 'Pending',
  'confirmed': 'Confirmed',
  'processing': 'Processing',
  'shipped': 'Shipped',
  'delivered': 'Delivered',
  'cancelled': 'Cancelled'
};

const statusColors: { [key: string]: string } = {
  'pending': 'bg-yellow-600',
  'confirmed': 'bg-blue-600',
  'processing': 'bg-orange-600',
  'shipped': 'bg-purple-600',
  'delivered': 'bg-green-600',
  'cancelled': 'bg-red-600'
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
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load order history');
      } else {
        setOrders(data || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError('Failed to load order history');
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
        .from('order_items')
        .select('*')
        .eq('order_id', orderId);

      if (itemsError) throw itemsError;

      // Get the order to find shipping address ID
      const order = orders.find(o => o.id === orderId);
      let shippingAddress = null;

      // Check if order has shipping_address_id property
      if (order?.shipping_address_id) {
        const { data: addressData, error: addressError } = await supabase
          .from('user_addresses')
          .select('*')
          .eq('id', order.shipping_address_id)
          .single();

        if (!addressError && addressData) {
          shippingAddress = addressData;
        }
      }

      // Update the order with details
      setOrders(prevOrders =>
        prevOrders.map(o =>
          o.id === orderId
            ? { 
                ...o, 
                items: itemsData || [], 
                shipping_address: shippingAddress 
              }
            : o
        )
      );

      setExpandedOrder(orderId);
    } catch (error) {
      console.error('Error fetching order details:', error);
      setError('Failed to load order details');
    } finally {
      setLoadingDetails(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (amount: number, currency: string = 'EUR') => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const cancelOrder = async (orderId: string) => {
    const isConfirmed = window.confirm('Are you sure you want to cancel this order? This action cannot be undone.');
    
    if (!isConfirmed) {
      return;
    }

    try {
      // First delete order items
      const { error: itemsError } = await supabase
        .from('order_items')
        .delete()
        .eq('order_id', orderId);

      if (itemsError) {
        console.error('Error deleting order items:', itemsError);
        alert('Failed to cancel order. Please try again.');
        return;
      }

      // Then delete the order
      const { error: orderError } = await supabase
        .from('orders')
        .delete()
        .eq('id', orderId);

      if (orderError) {
        console.error('Error deleting order:', orderError);
        alert('Failed to cancel order. Please try again.');
        return;
      }

      // Remove the order from local state
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      
      // Close expanded view if this order was expanded
      if (expandedOrder === orderId) {
        setExpandedOrder(null);
      }

      alert('Order cancelled successfully.');
    } catch (error) {
      console.error('Error cancelling order:', error);
      alert('Failed to cancel order. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e91111]"></div>
        <span className="ml-3 text-neutral-300">Loading order history...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="bg-red-900/50 border border-red-600 rounded-lg p-4">
          <p className="text-red-200">{error}</p>
        </div>
      )}

      {/* No Orders Message */}
      {orders.length === 0 && !loading ? (
        <div className="bg-neutral-800 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Order History</h3>
          <div className="space-y-4">
            <div className="text-neutral-400 mb-6">
              <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg text-neutral-300 mb-2">No orders yet</p>
              <p className="text-neutral-400">You haven&apos;t placed any orders yet. Start shopping to see your order history here.</p>
            </div>
            <button
              onClick={() => window.location.href = '/categories'}
              className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium"
            >
              PLACE YOUR FIRST ORDER
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Orders List */}
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Order History</h3>
            
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-neutral-700 rounded-lg overflow-hidden">
                  {/* Order Header */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                          <h4 className="text-white font-medium text-lg">
                            Order #{order.order_number}
                          </h4>
                          <span className={`px-3 py-1 text-white text-sm rounded-full w-fit ${statusColors[order.status]}`}>
                            {statusLabels[order.status]}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-neutral-400">Total Amount:</span>
                            <p className="text-white font-medium text-lg">
                              {formatPrice(order.total_amount, order.currency)}
                            </p>
                          </div>
                          <div>
                            <span className="text-neutral-400">Order Date:</span>
                            <p className="text-neutral-300">
                              {formatDate(order.created_at)}
                            </p>
                          </div>
                          <div>
                            <span className="text-neutral-400">Status:</span>
                            <p className="text-neutral-300">
                              {order.shipped_at && 'Shipped on ' + formatDate(order.shipped_at)}
                              {order.delivered_at && 'Delivered on ' + formatDate(order.delivered_at)}
                              {!order.shipped_at && !order.delivered_at && 'Processing your order'}
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
                        className="px-4 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium disabled:opacity-50"
                      >
                        {loadingDetails === order.id ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Loading...
                          </div>
                        ) : expandedOrder === order.id ? (
                          'Hide Details'
                        ) : (
                          'Details'
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Order Details (Expanded) */}
                  {expandedOrder === order.id && order.items && (
                    <div className="border-t border-neutral-600 bg-neutral-800/50">
                      <div className="p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Order Items */}
                          <div>
                            <h5 className="text-white font-medium mb-3 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                              Order Items ({order.items.length})
                            </h5>
                            <div className="space-y-3">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex items-start gap-3 bg-neutral-800 rounded-lg p-3">
                                  {item.product_image_url && (
                                    <img
                                      src={item.product_image_url}
                                      alt={item.product_name}
                                      className="w-16 h-16 object-cover rounded-md"
                                    />
                                  )}
                                  <div className="flex-1">
                                    <h6 className="text-white font-medium">{item.product_name}</h6>
                                    {item.product_variant && (
                                      <p className="text-neutral-400 text-sm">{item.product_variant}</p>
                                    )}
                                    <div className="flex items-center justify-between mt-1">
                                      <span className="text-neutral-300 text-sm">
                                        Qty: {item.quantity} × {formatPrice(item.unit_price, order.currency)}
                                      </span>
                                      <span className="text-white font-medium">
                                        {formatPrice(item.total_price, order.currency)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Order Summary */}
                            <div className="mt-4 bg-neutral-800 rounded-lg p-3">
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-neutral-400">Subtotal:</span>
                                  <span className="text-neutral-300">
                                    {formatPrice(order.total_amount - order.shipping_cost - order.tax_amount + order.discount_amount, order.currency)}
                                  </span>
                                </div>
                                {order.discount_amount > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400">Discount:</span>
                                    <span className="text-green-400">
                                      -{formatPrice(order.discount_amount, order.currency)}
                                    </span>
                                  </div>
                                )}
                                <div className="flex justify-between">
                                  <span className="text-neutral-400">Shipping:</span>
                                  <span className="text-neutral-300">
                                    {formatPrice(order.shipping_cost, order.currency)}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-neutral-400">Tax:</span>
                                  <span className="text-neutral-300">
                                    {formatPrice(order.tax_amount, order.currency)}
                                  </span>
                                </div>
                                <div className="border-t border-neutral-600 pt-1 mt-1">
                                  <div className="flex justify-between font-medium">
                                    <span className="text-white">Total:</span>
                                    <span className="text-white text-lg">
                                      {formatPrice(order.total_amount, order.currency)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Shipping Address */}
                          <div>
                            <h5 className="text-white font-medium mb-3 flex items-center">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Shipping Address
                            </h5>
                            {order.shipping_address ? (
                              <div className="bg-neutral-800 rounded-lg p-3">
                                <h6 className="text-white font-medium">{order.shipping_address.full_name}</h6>
                                <div className="text-neutral-300 text-sm mt-1 space-y-1">
                                  <p>{order.shipping_address.street} {order.shipping_address.house_number}</p>
                                  <p>
                                    {order.shipping_address.postal_code} {order.shipping_address.city}
                                    {order.shipping_address.state_province && `, ${order.shipping_address.state_province}`}
                                  </p>
                                  <p>{order.shipping_address.country}</p>
                                </div>
                              </div>
                            ) : (
                              <div className="bg-neutral-800 rounded-lg p-3">
                                <p className="text-neutral-400 text-sm">No shipping address available</p>
                              </div>
                            )}

                            {/* Order Actions */}
                            <div className="mt-4 space-y-2">
                              {order.status === 'delivered' && (
                                <button className="w-full px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium">
                                  Reorder Items
                                </button>
                              )}
                              {['shipped', 'delivered'].includes(order.status) && (
                                <button className="w-full px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium">
                                  Track Package
                                </button>
                              )}
                              {order.status === 'pending' && (
                                <button 
                                  onClick={() => cancelOrder(order.id)}
                                  className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors duration-200 font-medium"
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

"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/auth/auth-context";
import { supabase } from "../../lib/supabase";

interface RewardTransaction {
  id: string;
  user_id: string;
  points: number;
  transaction_type: "earned" | "redeemed" | "expired" | "bonus";
  transaction_description: string | null;
  order_id: string | null;
  points_change: number;
  expiry_date: string | null;
  created_at: string;
}

interface RewardBalance {
  user_id: string;
  total_points: number;
  available_points: number;
  lifetime_earned: number;
  lifetime_redeemed: number;
  created_at: string;
  updated_at: string;
}

export default function RewardPoints() {
  const { user } = useAuth();
  const [balance, setBalance] = useState<RewardBalance | null>(null);
  const [transactions, setTransactions] = useState<RewardTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRewardData();
  }, [user?.id]);

  const fetchRewardData = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);

      // Fetch reward balance
      const { data: balanceData, error: balanceError } = await supabase
        .from("user_reward_balance")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (balanceError && balanceError.code !== "PGRST116") {
        console.error("Error fetching balance:", balanceError);
      } else if (balanceData) {
        setBalance(balanceData);
      }

      // Fetch recent transactions
      const { data: transactionsData, error: transactionsError } =
        await supabase
          .from("user_reward_points")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(10);

      if (transactionsError) {
        console.error("Error fetching transactions:", transactionsError);
      } else {
        setTransactions(transactionsData || []);
      }
    } catch (error) {
      console.error("Error fetching reward data:", error);
      setError("Failed to load reward points data");
    } finally {
      setLoading(false);
    }
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "earned":
        return "🛒";
      case "redeemed":
        return "🎁";
      case "bonus":
        return "🎉";
      case "expired":
        return "⏰";
      default:
        return "💎";
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "earned":
      case "bonus":
        return "text-green-600";
      case "redeemed":
      case "expired":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e91111]"></div>
        <span className="ml-3 text-gray-600">Loading reward points...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Error Message */}
      {error && (
        <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* No Reward Points */}
      {!balance && transactions.length === 0 ? (
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="text-center pt-4 pb-8">
            <div className="mb-4 flex justify-center">
              <img
                src="/diamond.png"
                alt="Diamond Reward Points"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              No Reward Points Yet
            </h4>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              You haven&apos;t collected any reward points yet. Points can be
              earned through orders and redeemed for discounts or special
              offers.
            </p>
            <div className="bg-white rounded-xl p-4 max-w-sm mx-auto" style={{ border: "1px solid #e5e7eb" }}>
              <h5 className="text-sm font-medium text-gray-900 mb-2">
                How it works:
              </h5>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• €1 order = 1 point</li>
                <li>• 100 points = €5 discount</li>
                <li>• Points expire after 12 months</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Reward Points Balance */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Your Reward Points
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Available Points */}
              <div className="bg-gradient-to-br from-[#e91111]/10 to-[#e91111]/5 border border-[#e91111]/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#e91111] mb-1">
                  {balance?.available_points || 0}
                </div>
                <div className="text-sm text-gray-600">Available Points</div>
                <div className="text-xs text-gray-500 mt-1">
                  ≈ €{Math.floor((balance?.available_points || 0) / 20)} value
                </div>
              </div>

              {/* Lifetime Earned */}
              <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-600/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {balance?.lifetime_earned || 0}
                </div>
                <div className="text-sm text-gray-600">Total Earned</div>
              </div>

              {/* Lifetime Redeemed */}
              <div className="bg-gradient-to-br from-orange-600/10 to-orange-600/5 border border-orange-600/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">
                  {balance?.lifetime_redeemed || 0}
                </div>
                <div className="text-sm text-gray-600">Total Redeemed</div>
              </div>
            </div>

            {/* Redeem Info */}
            {(balance?.available_points || 0) >= 100 && (
              <div className="mt-6 bg-[#e91111]/10 border border-[#e91111]/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900 font-medium">Redeem Points</h4>
                    <p className="text-sm text-gray-600">
                      You can get €
                      {Math.floor((balance?.available_points || 0) / 100) * 5}{" "}
                      discount
                    </p>
                  </div>
                  <button 
                    className="px-4 py-2 text-white rounded-xl font-medium transition-all duration-200"
                    style={{ 
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      minHeight: "44px"
                    }}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Recent Transactions */}
          {transactions.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Activity
              </h3>

              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="bg-white rounded-xl p-4"
                    style={{ border: "1px solid #e5e7eb" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {getTransactionIcon(transaction.transaction_type)}
                        </div>
                        <div>
                          <div className="text-gray-900 font-medium">
                            {transaction.transaction_description ||
                              `${transaction.transaction_type.charAt(0).toUpperCase() + transaction.transaction_type.slice(1)} Points`}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatDate(transaction.created_at)}
                            {transaction.order_id && (
                              <span>
                                {" "}
                                • Order #{transaction.order_id.slice(-8)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`text-lg font-bold ${getTransactionColor(transaction.transaction_type)}`}
                      >
                        {transaction.points_change > 0 ? "+" : ""}
                        {transaction.points_change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {transactions.length >= 10 && (
                <div className="text-center mt-4">
                  <button className="text-[#e91111] hover:text-[#d10f0f] transition-colors duration-200 text-sm font-medium">
                    Show All Activity
                  </button>
                </div>
              )}
            </div>
          )}

          {/* How it Works */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              How Reward Points Work
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-900 font-medium mb-3">Earning Points</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    €1 order value = 1 point
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    Bonus points for special promotions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    Annual birthday bonus
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 font-medium mb-3">
                  Redeeming Points
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#e91111]">•</span>
                    100 points = €5 discount
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#e91111]">•</span>
                    200 points = €10 discount
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#e91111]">•</span>
                    Points expire after 12 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

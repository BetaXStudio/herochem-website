"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/auth/auth-context";
import { supabase } from "../../lib/supabase";

interface UserAddress {
  id: string;
  user_id: string;
  full_name: string;
  street: string;
  house_number: string;
  city: string;
  postal_code: string;
  state_province: string | null;
  country: string;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
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

export default function AddressBook() {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState<UserAddress[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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
    fetchAddresses();
  }, [user?.id]);

  const fetchAddresses = async () => {
    if (!user?.id) return;

    try {
      const { data, error } = await supabase
        .from("user_addresses")
        .select("*")
        .eq("user_id", user.id)
        .order("is_primary", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching addresses:", error);
      } else {
        setAddresses(data || []);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
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
    setIsAdding(false);
    setEditingId(null);
    setError(null);
  };

  const validateForm = () => {
    if (!addressForm.full_name.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!addressForm.street.trim()) {
      setError("Street is required");
      return false;
    }
    if (!addressForm.house_number.trim()) {
      setError("House number is required");
      return false;
    }
    if (!addressForm.city.trim()) {
      setError("City is required");
      return false;
    }
    if (!addressForm.postal_code.trim()) {
      setError("Postal code is required");
      return false;
    }
    if (!addressForm.country.trim()) {
      setError("Country is required");
      return false;
    }
    return true;
  };

  const handleSaveAddress = async () => {
    if (!validateForm()) return;

    try {
      setSaving(true);
      setError(null);

      // If setting as primary, unset other primary addresses first
      if (addressForm.is_primary) {
        await supabase
          .from("user_addresses")
          .update({ is_primary: false })
          .eq("user_id", user?.id);
      }

      if (editingId) {
        // Update existing address
        const { error } = await supabase
          .from("user_addresses")
          .update(addressForm)
          .eq("id", editingId)
          .eq("user_id", user?.id);

        if (error) throw error;
        setSuccess("Address updated successfully!");
      } else {
        // Create new address
        const { error } = await supabase.from("user_addresses").insert({
          ...addressForm,
          user_id: user?.id,
        });

        if (error) throw error;
        setSuccess("Address added successfully!");
      }

      resetForm();
      fetchAddresses();
      setTimeout(() => setSuccess(null), 3000);
    } catch (error: any) {
      console.error("Error saving address:", error);
      setError("Failed to save address");
    } finally {
      setSaving(false);
    }
  };

  const handleEditAddress = (address: UserAddress) => {
    setAddressForm({
      full_name: address.full_name,
      street: address.street,
      house_number: address.house_number,
      city: address.city,
      postal_code: address.postal_code,
      state_province: address.state_province || "",
      country: address.country,
      is_primary: address.is_primary,
    });
    setEditingId(address.id);
    setIsAdding(true);
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return;

    try {
      const { error } = await supabase
        .from("user_addresses")
        .delete()
        .eq("id", addressId)
        .eq("user_id", user?.id);

      if (error) throw error;

      setSuccess("Address deleted successfully!");
      fetchAddresses();
      setTimeout(() => setSuccess(null), 3000);
    } catch (error: any) {
      console.error("Error deleting address:", error);
      setError("Failed to delete address");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
        <span className="ml-3 text-gray-500">Loading addresses...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Success Message */}
      {success && (
        <div 
          className="rounded-xl p-4"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)"
          }}
        >
          <p className="text-green-700">{success}</p>
        </div>
      )}

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

      {/* Address List or No Addresses Message */}
      {addresses.length === 0 && !isAdding ? (
        <div className="rounded-xl p-4 bg-gray-50">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Address Book
          </h3>
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              You haven&apos;t added any addresses yet.
            </p>
            <button
              onClick={() => setIsAdding(true)}
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
        </div>
      ) : (
        <>
          {/* Existing Addresses */}
          {addresses.length > 0 && (
            <div className="rounded-xl p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-900">
                  Saved Addresses
                </h3>
                {!isAdding && (
                  <button
                    onClick={() => setIsAdding(true)}
                    className="px-3 py-1.5 text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm"
                    style={{
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 2px 8px rgba(45, 45, 52, 0.3)",
                    }}
                  >
                    + Add New
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="p-3 rounded-xl cursor-pointer transition-colors bg-white"
                    style={{ border: "1px solid #e5e7eb" }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-gray-900 font-medium">
                            {address.full_name}
                          </h4>
                          {address.is_primary && (
                            <span 
                              className="px-2 py-0.5 text-white text-xs rounded"
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
                          {address.city}, {address.postal_code}
                          {address.state_province &&
                            `, ${address.state_province}`}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {address.country}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <button
                          onClick={() => handleEditAddress(address)}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAddress(address.id)}
                          className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add/Edit Address Form */}
          {isAdding && (
            <div className="rounded-xl p-4 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {editingId ? "Edit Address" : "Add New Address"}
              </h3>

              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="full_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    value={addressForm.full_name}
                    onChange={(e) =>
                      setAddressForm({
                        ...addressForm,
                        full_name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                    placeholder="Enter full name for this address"
                    style={{ minHeight: "44px" }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Street *
                    </label>
                    <input
                      type="text"
                      id="street"
                      value={addressForm.street}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          street: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Enter street name"
                      style={{ minHeight: "44px" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="house_number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      House Number *
                    </label>
                    <input
                      type="text"
                      id="house_number"
                      value={addressForm.house_number}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          house_number: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Enter house number"
                      style={{ minHeight: "44px" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={addressForm.city}
                      onChange={(e) =>
                        setAddressForm({ ...addressForm, city: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Enter city"
                      style={{ minHeight: "44px" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postal_code"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      id="postal_code"
                      value={addressForm.postal_code}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          postal_code: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Enter postal code"
                      style={{ minHeight: "44px" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="state_province"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state_province"
                      value={addressForm.state_province}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          state_province: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Enter state or province"
                      style={{ minHeight: "44px" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      value={addressForm.country}
                      onChange={(e) =>
                        setAddressForm({
                          ...addressForm,
                          country: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                      placeholder="Enter country"
                      style={{ minHeight: "44px" }}
                    />
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-xl bg-white" style={{ border: "1px solid #e5e7eb" }}>
                  <input
                    type="checkbox"
                    id="is_primary"
                    checked={addressForm.is_primary}
                    onChange={(e) =>
                      setAddressForm({
                        ...addressForm,
                        is_primary: e.target.checked,
                      })
                    }
                    className="w-4 h-4 text-gray-900 bg-white border-gray-300 rounded focus:ring-gray-400 focus:ring-2"
                  />
                  <label
                    htmlFor="is_primary"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Set as primary address
                  </label>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={handleSaveAddress}
                    disabled={saving}
                    className="flex-1 px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                      boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                      minHeight: "44px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {saving
                      ? "Saving..."
                      : editingId
                        ? "Update Address"
                        : "Save Address"}
                  </button>
                  <button
                    onClick={resetForm}
                    disabled={saving}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ minHeight: "44px" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

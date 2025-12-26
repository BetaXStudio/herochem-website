"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/auth/auth-context";
import { supabase } from "../../lib/supabase";

interface UserProfile {
  id: string;
  username: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
}

export default function ProfileSettings() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) return;

      try {
        const { data, error } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching profile:", error);
        } else if (data) {
          setProfile(data);
          setNewUsername(data.username || "");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user?.id, supabase]);

  const handleUsernameSubmit = async () => {
    if (!newUsername.trim()) {
      setError("Username is required");
      return;
    }

    if (newUsername.length < 3) {
      setError("Username must be at least 3 characters long");
      return;
    }

    if (newUsername.length > 30) {
      setError("Username must be less than 30 characters");
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(newUsername)) {
      setError("Username can only contain letters, numbers, and underscores");
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const { data, error } = await supabase
        .from("user_profiles")
        .upsert({
          id: user?.id,
          username: newUsername,
          email: user?.email,
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          setError("Username already exists. Please choose a different one.");
        } else {
          throw error;
        }
        return;
      }

      setProfile(data);
      setIsEditing(false);
      setSuccess("Username updated successfully!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error: any) {
      console.error("Error updating username:", error);
      setError("Failed to update username");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewUsername(profile?.username || "");
    setError(null);
    // Scroll to top of the correct container
    const mobileScrollContainer = document.querySelector("[data-mobile-scroll-container]") as HTMLElement;
    if (mobileScrollContainer) {
      mobileScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
        <span className="ml-3 text-gray-500">Loading profile...</span>
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

      {/* Username Section */}
      <div className="rounded-xl p-4 bg-gray-50">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Username Settings
        </h3>

        {!profile?.username && !isEditing ? (
          /* No username set */
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              You haven&apos;t set a username yet.
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="w-full px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                minHeight: "44px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Set Username
            </button>
          </div>
        ) : isEditing ? (
          /* Editing username */
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-colors duration-200"
                placeholder="Enter your username"
                autoComplete="username"
                autoFocus
                style={{ minHeight: "44px", outline: "none", boxShadow: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleUsernameSubmit}
                disabled={saving}
                className="flex-1 px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                  boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                  minHeight: "44px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {saving ? "Saving..." : "Save Username"}
              </button>
              <button
                onClick={handleCancelEdit}
                disabled={saving}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ minHeight: "44px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Display username */
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Current Username
              </label>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white" style={{ border: "1px solid #e5e7eb" }}>
                <span className="text-gray-900 font-medium">
                  {profile?.username}
                </span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 text-sm"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Account Information */}
      <div className="rounded-xl p-4 bg-gray-50">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Account Information
        </h3>
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid #e5e7eb" }}>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              E-Mail Address
            </label>
            <p className="text-gray-900">{user?.email}</p>
          </div>
          <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid #e5e7eb" }}>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              User ID
            </label>
            <p className="text-gray-900 font-mono text-sm">
              {user?.id || "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

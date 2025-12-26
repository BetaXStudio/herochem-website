"use client";
import { useState } from "react";
import { useAuth } from "../../components/auth/auth-context";
import { supabase } from "../../lib/supabase";

export default function SecuritySettings() {
  const { user } = useAuth();

  // Password change states
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);

  // Email change states
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [emailSaving, setEmailSaving] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All password fields are required");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation do not match");
      return;
    }

    try {
      setPasswordSaving(true);
      setPasswordError(null);

      // First verify current password by trying to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || "",
        password: currentPassword,
      });

      if (signInError) {
        setPasswordError("Current password is incorrect");
        return;
      }

      // Update password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        throw updateError;
      }

      setIsChangingPassword(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPasswordSuccess("Password updated successfully!");
      setTimeout(() => setPasswordSuccess(null), 3000);
    } catch (error: any) {
      console.error("Error updating password:", error);
      setPasswordError("Failed to update password");
    } finally {
      setPasswordSaving(false);
    }
  };

  const handleCancelPasswordChange = () => {
    setIsChangingPassword(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError(null);
    // Scroll to top of the correct container
    const mobileScrollContainer = document.querySelector("[data-mobile-scroll-container]") as HTMLElement;
    if (mobileScrollContainer) {
      mobileScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleChangeEmail = async () => {
    if (!newEmail || !emailPassword) {
      setEmailError("Email and password are required");
      return;
    }

    if (!newEmail.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (newEmail === user?.email) {
      setEmailError("New email must be different from current email");
      return;
    }

    try {
      setEmailSaving(true);
      setEmailError(null);

      // First verify current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || "",
        password: emailPassword,
      });

      if (signInError) {
        setEmailError("Password is incorrect");
        return;
      }

      // Update email
      const { error: updateError } = await supabase.auth.updateUser({
        email: newEmail,
      });

      if (updateError) {
        throw updateError;
      }

      setIsChangingEmail(false);
      setNewEmail("");
      setEmailPassword("");
      setEmailSuccess(
        "Email update initiated! Please check your new email for confirmation.",
      );
      setTimeout(() => setEmailSuccess(null), 5000);
    } catch (error: any) {
      console.error("Error updating email:", error);
      setEmailError("Failed to update email");
    } finally {
      setEmailSaving(false);
    }
  };

  const handleCancelEmailChange = () => {
    setIsChangingEmail(false);
    setNewEmail("");
    setEmailPassword("");
    setEmailError(null);
    // Scroll to top of the correct container
    const mobileScrollContainer = document.querySelector("[data-mobile-scroll-container]") as HTMLElement;
    if (mobileScrollContainer) {
      mobileScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-4">
      {/* Password Success Message */}
      {passwordSuccess && (
        <div 
          className="rounded-xl p-4"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)"
          }}
        >
          <p className="text-green-700">{passwordSuccess}</p>
        </div>
      )}

      {/* Email Success Message */}
      {emailSuccess && (
        <div 
          className="rounded-xl p-4"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)"
          }}
        >
          <p className="text-green-700">{emailSuccess}</p>
        </div>
      )}

      {/* Password Error Message */}
      {passwordError && (
        <div 
          className="rounded-xl p-4"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)"
          }}
        >
          <p className="text-red-600">{passwordError}</p>
        </div>
      )}

      {/* Email Error Message */}
      {emailError && (
        <div 
          className="rounded-xl p-4"
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)"
          }}
        >
          <p className="text-red-600">{emailError}</p>
        </div>
      )}

      {/* Password Change Section */}
      <div className="rounded-xl p-4 bg-gray-50">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Change Password
        </h3>

        {!isChangingPassword ? (
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              Update your account password for enhanced security.
            </p>
            <button
              onClick={() => setIsChangingPassword(true)}
              className="w-full px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                minHeight: "44px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Change Password
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <label
                htmlFor="current-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-colors duration-200"
                placeholder="Enter your current password"
                autoComplete="current-password"
                style={{ minHeight: "44px", outline: "none", boxShadow: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
              />
            </div>
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-colors duration-200"
                placeholder="Enter your new password"
                autoComplete="new-password"
                style={{ minHeight: "44px", outline: "none", boxShadow: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-colors duration-200"
                placeholder="Confirm your new password"
                autoComplete="new-password"
                style={{ minHeight: "44px", outline: "none", boxShadow: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
              />
            </div>
            <div className="flex space-x-3 pt-2">
              <button
                onClick={handleChangePassword}
                disabled={passwordSaving}
                className="flex-1 px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                  boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                  minHeight: "44px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {passwordSaving ? "Updating..." : "Update Password"}
              </button>
              <button
                onClick={handleCancelPasswordChange}
                disabled={passwordSaving}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ minHeight: "44px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Email Change Section */}
      <div className="rounded-xl p-4 bg-gray-50">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Change Email Address
        </h3>

        {!isChangingEmail ? (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid #e5e7eb" }}>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Current Email
              </label>
              <p className="text-gray-900">{user?.email}</p>
            </div>
            <p className="text-gray-500 text-sm">
              Update your email address. You&apos;ll need to verify the new
              email.
            </p>
            <button
              onClick={() => setIsChangingEmail(true)}
              className="w-full px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                minHeight: "44px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Change Email
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid #e5e7eb" }}>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Current Email
              </label>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <div>
              <label
                htmlFor="new-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Email Address
              </label>
              <input
                type="email"
                id="new-email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-colors duration-200"
                placeholder="Enter your new email address"
                autoComplete="email"
                style={{ minHeight: "44px", outline: "none", boxShadow: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
              />
            </div>
            <div>
              <label
                htmlFor="email-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm with Password
              </label>
              <input
                type="password"
                id="email-password"
                value={emailPassword}
                onChange={(e) => setEmailPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 transition-colors duration-200"
                placeholder="Enter your current password"
                autoComplete="current-password"
                style={{ minHeight: "44px", outline: "none", boxShadow: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
              />
            </div>
            <div className="flex space-x-3 pt-2">
              <button
                onClick={handleChangeEmail}
                disabled={emailSaving}
                className="flex-1 px-4 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #2d2d34 0%, #3a3a42 100%)",
                  boxShadow: "0 4px 15px rgba(45, 45, 52, 0.3)",
                  minHeight: "44px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {emailSaving ? "Updating..." : "Update Email"}
              </button>
              <button
                onClick={handleCancelEmailChange}
                disabled={emailSaving}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ minHeight: "44px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { useAuth } from '../../components/auth/auth-context';
import { supabase } from '../../lib/supabase';

export default function SecuritySettings() {
  const { user } = useAuth();

  // Password change states
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);

  // Email change states
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [emailPassword, setEmailPassword] = useState('');
  const [emailSaving, setEmailSaving] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('All password fields are required');
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('New password and confirmation do not match');
      return;
    }

    try {
      setPasswordSaving(true);
      setPasswordError(null);

      // First verify current password by trying to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || '',
        password: currentPassword,
      });

      if (signInError) {
        setPasswordError('Current password is incorrect');
        return;
      }

      // Update password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (updateError) {
        throw updateError;
      }

      setIsChangingPassword(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPasswordSuccess('Password updated successfully!');
      setTimeout(() => setPasswordSuccess(null), 3000);
    } catch (error: any) {
      console.error('Error updating password:', error);
      setPasswordError('Failed to update password');
    } finally {
      setPasswordSaving(false);
    }
  };

  const handleCancelPasswordChange = () => {
    setIsChangingPassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordError(null);
  };

  const handleChangeEmail = async () => {
    if (!newEmail || !emailPassword) {
      setEmailError('Email and password are required');
      return;
    }

    if (!newEmail.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (newEmail === user?.email) {
      setEmailError('New email must be different from current email');
      return;
    }

    try {
      setEmailSaving(true);
      setEmailError(null);

      // First verify current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || '',
        password: emailPassword,
      });

      if (signInError) {
        setEmailError('Password is incorrect');
        return;
      }

      // Update email
      const { error: updateError } = await supabase.auth.updateUser({
        email: newEmail
      });

      if (updateError) {
        throw updateError;
      }

      setIsChangingEmail(false);
      setNewEmail('');
      setEmailPassword('');
      setEmailSuccess('Email update initiated! Please check your new email for confirmation.');
      setTimeout(() => setEmailSuccess(null), 5000);
    } catch (error: any) {
      console.error('Error updating email:', error);
      setEmailError('Failed to update email');
    } finally {
      setEmailSaving(false);
    }
  };

  const handleCancelEmailChange = () => {
    setIsChangingEmail(false);
    setNewEmail('');
    setEmailPassword('');
    setEmailError(null);
  };

  return (
    <div className="space-y-6">
      {/* Password Success Message */}
      {passwordSuccess && (
        <div className="bg-green-900/50 border border-green-600 rounded-lg p-4">
          <p className="text-green-200">{passwordSuccess}</p>
        </div>
      )}

      {/* Email Success Message */}
      {emailSuccess && (
        <div className="bg-green-900/50 border border-green-600 rounded-lg p-4">
          <p className="text-green-200">{emailSuccess}</p>
        </div>
      )}

      {/* Password Error Message */}
      {passwordError && (
        <div className="bg-red-900/50 border border-red-600 rounded-lg p-4">
          <p className="text-red-200">{passwordError}</p>
        </div>
      )}

      {/* Email Error Message */}
      {emailError && (
        <div className="bg-red-900/50 border border-red-600 rounded-lg p-4">
          <p className="text-red-200">{emailError}</p>
        </div>
      )}

      {/* Password Change Section */}
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
        
        {!isChangingPassword ? (
          <div className="space-y-4">
            <p className="text-neutral-300">Update your account password for enhanced security.</p>
            <button
              onClick={() => setIsChangingPassword(true)}
              className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium"
            >
              Change Password
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-neutral-300 mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
                placeholder="Enter your current password"
                autoComplete="current-password"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-neutral-300 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
                placeholder="Enter your new password"
                autoComplete="new-password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-neutral-300 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
                placeholder="Confirm your new password"
                autoComplete="new-password"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleChangePassword}
                disabled={passwordSaving}
                className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {passwordSaving ? 'Updating...' : 'Update Password'}
              </button>
              <button
                onClick={handleCancelPasswordChange}
                disabled={passwordSaving}
                className="px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Email Change Section */}
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Change Email Address</h3>
        
        {!isChangingEmail ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Current Email
              </label>
              <p className="text-white">{user?.email}</p>
            </div>
            <p className="text-neutral-300">Update your email address. You&apos;ll need to verify the new email.</p>
            <button
              onClick={() => setIsChangingEmail(true)}
              className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium"
            >
              Change Email
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Current Email
              </label>
              <p className="text-neutral-400">{user?.email}</p>
            </div>
            <div>
              <label htmlFor="new-email" className="block text-sm font-medium text-neutral-300 mb-2">
                New Email Address
              </label>
              <input
                type="email"
                id="new-email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
                placeholder="Enter your new email address"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="email-password" className="block text-sm font-medium text-neutral-300 mb-2">
                Confirm with Password
              </label>
              <input
                type="password"
                id="email-password"
                value={emailPassword}
                onChange={(e) => setEmailPassword(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
                placeholder="Enter your current password"
                autoComplete="current-password"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleChangeEmail}
                disabled={emailSaving}
                className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {emailSaving ? 'Updating...' : 'Update Email'}
              </button>
              <button
                onClick={handleCancelEmailChange}
                disabled={emailSaving}
                className="px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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

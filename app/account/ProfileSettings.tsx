'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../../components/auth/auth-context';
import { supabase } from '../../lib/supabase';

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
  const [newUsername, setNewUsername] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) return;

      try {
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching profile:', error);
        } else if (data) {
          setProfile(data);
          setNewUsername(data.username || '');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user?.id, supabase]);

  const handleUsernameSubmit = async () => {
    if (!newUsername.trim()) {
      setError('Username is required');
      return;
    }

    if (newUsername.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }

    if (newUsername.length > 30) {
      setError('Username must be less than 30 characters');
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(newUsername)) {
      setError('Username can only contain letters, numbers, and underscores');
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const { data, error } = await supabase
        .from('user_profiles')
        .upsert({
          id: user?.id,
          username: newUsername,
          email: user?.email,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) {
        if (error.code === '23505') {
          setError('Username already exists. Please choose a different one.');
        } else {
          throw error;
        }
        return;
      }

      setProfile(data);
      setIsEditing(false);
      setSuccess('Username updated successfully!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (error: any) {
      console.error('Error updating username:', error);
      setError('Failed to update username');
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewUsername(profile?.username || '');
    setError(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#e91111]"></div>
        <span className="ml-3 text-neutral-300">Loading profile...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="bg-green-900/50 border border-green-600 rounded-lg p-4">
          <p className="text-green-200">{success}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-900/50 border border-red-600 rounded-lg p-4">
          <p className="text-red-200">{error}</p>
        </div>
      )}

      {/* Username Section */}
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Username Settings</h3>
        
        {!profile?.username && !isEditing ? (
          /* No username set */
          <div className="space-y-4">
            <p className="text-neutral-300">You haven&apos;t set a username yet.</p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium"
            >
              Set Username
            </button>
          </div>
        ) : isEditing ? (
          /* Editing username */
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-neutral-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#e91111] focus:border-[#e91111]"
                placeholder="Enter your username"
                autoComplete="username"
                autoFocus
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleUsernameSubmit}
                disabled={saving}
                className="px-6 py-2 bg-[#e91111] text-white rounded-md hover:bg-[#d10f0f] transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Username'}
              </button>
              <button
                onClick={handleCancelEdit}
                disabled={saving}
                className="px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          /* Display username */
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Current Username
              </label>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{profile?.username}</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors duration-200 font-medium"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Account Information */}
      <div className="bg-neutral-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              E-Mail Adresse
            </label>
            <p className="text-white">{user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">
              User ID
            </label>
            <p className="text-white font-mono text-sm">
              {user?.id || 'Unknown'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

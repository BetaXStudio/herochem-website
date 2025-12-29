"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModal } from "../../contexts/modal-context";
import { useAuth } from "./auth-context";

interface AuthModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function AuthModal({ isOpen, onCloseAction }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signIn, signUp } = useAuth();
  const { setAuthModalOpen } = useModal();
  
  // Portal container for rendering outside of any parent's stacking context
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  
  // State to delay modal render until blur is applied
  const [shouldRenderModal, setShouldRenderModal] = useState(false);
  
  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  // Blur + Scroll-Sperre für Modal - Blur ZUERST, dann Modal rendern
  useEffect(() => {
    if (isOpen) {
      // Verhindere Scrolling auf html und body
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      setAuthModalOpen(true);
      
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
        setAuthModalOpen(false);
        setShouldRenderModal(false);
      };
    }
  }, [isOpen, setAuthModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          setSuccess("Successfully logged in!");
          setTimeout(() => {
            onCloseAction();
            resetForm();
          }, 1000);
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(
            "Registration successful! Please check your email to confirm your account.",
          );
          setTimeout(() => {
            setIsLogin(true);
            setError("");
            setSuccess("");
          }, 3000);
        }
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }

    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
    setIsLogin(true);
  };

  const handleClose = () => {
    onCloseAction();
    resetForm();
  };

  // Don't render until blur is applied, portal is ready, AND shouldRenderModal is true
  if (!isOpen || !portalContainer || !shouldRenderModal) return null;

  const modalContent = (
    <React.Fragment>
      {/* Unsichtbarer Backdrop für Click-Handling */}
      <div
        className="fixed inset-0 z-[10025] max-[800px]:top-0 min-[801px]:top-[99px]"
        style={{
          backgroundColor: "transparent",
          animation: "backdropFadeIn 0.3s ease-out",
          // CPU/Hardware rendering - no GPU acceleration
        }}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className="fixed inset-0 z-[10030] flex items-center justify-center max-[800px]:items-start max-[800px]:pt-[107px] max-[800px]:pb-[10px]"
        style={{ 
          touchAction: "none", 
          pointerEvents: "none",
          // CPU/Hardware rendering - no GPU acceleration
        }}
      >
        {/* Modal with animation */}
        <div
          className="relative bg-white shadow-xl w-full max-w-md mx-4 max-h-[90vh] max-[800px]:max-h-[calc(90vh-105px)]"
          style={{
            backgroundColor: "white",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            borderRadius: "0.75rem",
            touchAction: "auto",
            pointerEvents: "auto",
            // CPU/Hardware rendering - no GPU acceleration
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Header */}
          <div
            className="sticky top-0 flex items-center justify-between border-b"
            style={{
              borderColor: 'rgb(45,45,52)',
              backgroundColor: 'rgb(45,45,52)',
              borderTopLeftRadius: '0.75rem',
              borderTopRightRadius: '0.75rem',
              margin: '-1px 0 -1px 0',
              padding: '12px 16px'
            }}
          >
            <h2
              className="text-lg font-medium text-white"
              style={{ fontFamily: "Calibri, Arial, sans-serif" }}
            >
              {isLogin ? "Login" : "Register"}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-xl transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-4 w-4 text-white group-hover:text-[#e91111]" />
            </button>
          </div>

          {/* Content */}
          <div
            className="p-6 overflow-y-auto flex-1"
            style={{
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
              overscrollBehavior: "contain",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-[800px]:pb-[10px]"
              autoComplete="on"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-black transition-colors duration-200"
                  style={{ outline: "none", boxShadow: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-black transition-colors duration-200"
                  style={{ outline: "none", boxShadow: "none" }}
                  onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-black transition-colors duration-200"
                    style={{ outline: "none", boxShadow: "none" }}
                    onFocus={(e) => { e.target.style.borderColor = "#e91111"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#d1d5db"; }}
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-xl text-sm">
                  {success}
                </div>
              )}

              {/* Submit Button - hide when success */}
              {!success && (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-4 text-white font-medium rounded-xl transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                  style={{
                    backgroundColor: loading
                      ? "rgb(180,70,70)"
                      : "#e91111",
                    boxShadow: "0 4px 15px rgba(233, 17, 17, 0.3)", // Subtle shadow like cart modal
                    border: loading
                      ? "2px solid rgb(180,70,70)"
                      : "2px solid #e91111",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = "#c00d0d";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = "#e91111";
                    }
                  }}
                >
                  {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
                </button>
              )}
            </form>

            {/* Toggle between Login/Register */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError("");
                    setSuccess("");
                  }}
                  className="text-[#e91111] hover:underline font-medium cursor-pointer"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return createPortal(modalContent, portalContainer);
}

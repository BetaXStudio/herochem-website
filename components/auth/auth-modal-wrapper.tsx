"use client";

import AuthModal from "./auth-modal";
import { useAuthModal } from "./auth-modal-context";

export default function AuthModalWrapper() {
  const { isOpen, closeModal } = useAuthModal();
  return <AuthModal isOpen={isOpen} onCloseAction={closeModal} />;
}

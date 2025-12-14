"use client";

import WelcomeModal from "./welcome-modal";
import { useWelcomeModal } from "./welcome-modal-context";

export default function WelcomeModalWrapper() {
  const { isOpen, closeModal } = useWelcomeModal();

  return <WelcomeModal isOpen={isOpen} onCloseAction={closeModal} />;
}

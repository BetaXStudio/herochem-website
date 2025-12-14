"use client";

import { useEffect } from "react";
import {
  cleanupIOSSafariKeyboardFix,
  initIOSSafariKeyboardFix,
} from "../utils/ios-safari-keyboard-fix";

export default function IOSSafariKeyboardFix() {
  useEffect(() => {
    // Initialize the fix when component mounts
    initIOSSafariKeyboardFix();

    // Cleanup when component unmounts
    return () => {
      cleanupIOSSafariKeyboardFix();
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}

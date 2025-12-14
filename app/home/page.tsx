"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Sofort zur Hauptseite weiterleiten
    router.replace("/");
  }, [router]);

  // Leerer Inhalt während der Weiterleitung
  return null;
}

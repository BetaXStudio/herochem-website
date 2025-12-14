import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jxbngxkujvopghwpvwyw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4Ym5neGt1anZvcGdod3B2d3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMzgyMzQsImV4cCI6MjA2OTcxNDIzNH0.xuBTkWukWxRNwJeo45f3BI0-UiUoLeAwnHi5SisFe-U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Session-Speicherung kontrollieren
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Keine automatische Session-Erkennung aus URL
    flowType: "implicit",
  },
});

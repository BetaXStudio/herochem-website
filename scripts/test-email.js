// Test Email Functionality
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSignup() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: "test@herochem.com", // Ändere zu einer Test-Email
      password: "testpassword123",
    });

    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log("Success! Check your email for confirmation.");
      console.log("User:", data.user);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

// Uncomment to test
// testSignup()

export { testSignup };

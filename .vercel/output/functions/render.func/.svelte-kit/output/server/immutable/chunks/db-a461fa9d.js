import { skHelper } from "@supabase/auth-helpers-sveltekit";
let importEnv = true;
try {
  if (process.env.NODE_ENV === "test")
    importEnv = false;
} catch (error) {
}
const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_APP_URL } = !importEnv ? process.env : { "VITE_SVELTEKIT_APP_VERSION": "1662313842116", "VITE_SVELTEKIT_APP_VERSION_FILE": "_app/version.json", "VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL": "0", "VITE_SVELTEKIT_ADAPTER_NAME": "@sveltejs/adapter-vercel", "VITE_APP_URL": "http://localhost:3000/", "VITE_SUPABASE_URL": "https://vyywkwooofsztnxtrcgk.supabase.co", "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eXdrd29vb2ZzenRueHRyY2drIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIyNjY3NjgsImV4cCI6MTk3Nzg0Mjc2OH0.8fqBWZW55Pv6DKDdqN9m4yucM5NQ8FQd3PNryzzFGZc", "BASE_URL": "/_app/", "MODE": "production", "DEV": false, "PROD": true };
const { supabaseClient: supabase } = skHelper(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
export {
  VITE_APP_URL as V,
  supabase as s
};

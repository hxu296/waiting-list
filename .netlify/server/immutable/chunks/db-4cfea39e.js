var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  V: () => VITE_APP_URL,
  s: () => supabase
});
module.exports = __toCommonJS(stdin_exports);
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
let importEnv = true;
try {
  if (process.env.NODE_ENV === "test")
    importEnv = false;
} catch (error) {
}
const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_APP_URL } = !importEnv ? process.env : { "VITE_SVELTEKIT_APP_VERSION": "1662314858310", "VITE_SVELTEKIT_APP_VERSION_FILE": "_app/version.json", "VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL": "0", "VITE_SVELTEKIT_ADAPTER_NAME": "@sveltejs/adapter-netlify", "VITE_APP_URL": "http://localhost:3000/", "VITE_SUPABASE_URL": "https://vyywkwooofsztnxtrcgk.supabase.co", "VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eXdrd29vb2ZzenRueHRyY2drIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIyNjY3NjgsImV4cCI6MTk3Nzg0Mjc2OH0.8fqBWZW55Pv6DKDdqN9m4yucM5NQ8FQd3PNryzzFGZc", "BASE_URL": "/_app/", "MODE": "production", "DEV": false, "PROD": true };
const { supabaseClient: supabase } = (0, import_auth_helpers_sveltekit.skHelper)(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

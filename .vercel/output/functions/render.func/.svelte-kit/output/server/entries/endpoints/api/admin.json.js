import { s as supabase } from "../../../immutable/chunks/admin-2e6a5957.js";
import "dotenv";
import "@supabase/supabase-js";
async function GET() {
  const { data, error } = await supabase.from("profiles").select("is_admin").eq("is_admin", true).single();
  if (error) {
    return {
      status: 200,
      body: { isAdmin: false }
    };
  }
  return {
    status: 200,
    body: { isAdmin: data == null ? void 0 : data.is_admin }
  };
}
export {
  GET
};

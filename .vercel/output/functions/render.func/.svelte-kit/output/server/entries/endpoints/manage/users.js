import { withApiAuth } from "@supabase/auth-helpers-sveltekit";
import { g as getProfiles } from "../../../immutable/chunks/getProfile-64b9a909.js";
import "../../../immutable/chunks/internal-25ff1fbb.js";
import "../../../immutable/chunks/db-23ff7454.js";
const GET = async ({ locals }) => withApiAuth({
  redirectTo: "/auth/signin",
  user: locals.user
}, async () => {
  const users = await getProfiles(locals);
  if (users.statusCode === 200) {
    return {
      body: {
        users: users.data
      }
    };
  }
  return {
    body: {
      users: []
    }
  };
});
export {
  GET
};

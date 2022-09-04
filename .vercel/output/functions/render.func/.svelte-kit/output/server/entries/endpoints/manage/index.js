import { withApiAuth } from "@supabase/auth-helpers-sveltekit";
import { g as getWaitingList } from "../../../immutable/chunks/waiting_list-e351e032.js";
import "../../../immutable/chunks/db-a461fa9d.js";
import "../../../immutable/chunks/internal-25ff1fbb.js";
const GET = async ({ locals }) => withApiAuth({
  redirectTo: "/auth/signin",
  user: locals.user
}, async () => {
  const users = await getWaitingList(locals);
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

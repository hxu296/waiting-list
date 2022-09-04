import { withApiAuth } from "@supabase/auth-helpers-sveltekit";
import { g as getWaitingList } from "../../../immutable/chunks/waiting_list-3a89864d.js";
import "../../../immutable/chunks/db-23ff7454.js";
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

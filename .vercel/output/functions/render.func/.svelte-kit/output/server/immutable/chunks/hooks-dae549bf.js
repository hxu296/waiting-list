import { handleAuth } from "@supabase/auth-helpers-sveltekit";
import { sequence } from "@sveltejs/kit/hooks";
import { a as getProfileById, c as combinedUserMapper } from "./getProfile-56ffb7c3.js";
import "./internal-25ff1fbb.js";
import "./db-a461fa9d.js";
async function handleProfile({ event, resolve }) {
  const { user, accessToken } = event.locals;
  const profile = await getProfileById({ accessToken, userId: user == null ? void 0 : user.id });
  if (user) {
    event.locals.user = combinedUserMapper({ ...user, ...profile });
  }
  let response = await resolve(event);
  return response;
}
const handle = sequence(...handleAuth({ logout: { returnTo: "/auth/signin" } }), handleProfile);
async function getSession(event) {
  const { user, accessToken } = event.locals;
  return {
    user,
    accessToken
  };
}
export {
  getSession,
  handle
};

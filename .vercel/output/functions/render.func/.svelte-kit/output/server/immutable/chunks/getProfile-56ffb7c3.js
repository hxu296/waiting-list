import { supabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { w as withDefault, s as successMapper, e as errorMapper } from "./internal-25ff1fbb.js";
import "./db-a461fa9d.js";
const userMapper = (user) => ({
  fullName: withDefault(user.full_name, ""),
  isAdmin: user.is_admin
});
const usersMapper = (users) => users.map((u) => userMapper(u));
const loggedInUserMapper = (user) => ({
  last_sign_in_at: user.last_sign_in_at,
  authenticated: user.aud === "authenticated",
  email: user.email,
  isAdmin: user.is_admin,
  id: user.id
});
const combinedUserMapper = (user) => ({
  ...loggedInUserMapper(user),
  ...userMapper(user)
});
const getProfileById = async ({ accessToken, userId }) => {
  const { data } = await supabaseServerClient(accessToken).from("profiles").select("*").eq("id", userId).single();
  return data;
};
const getProfiles = async ({ accessToken }) => {
  const { error, data } = await supabaseServerClient(accessToken).from("profiles").select("*").not("is_admin", "eq", true).order("created_at", { ascending: false });
  if (!error) {
    return successMapper({
      data: usersMapper(data),
      message: ""
    });
  }
  return errorMapper({
    message: ""
  });
};
export {
  getProfileById as a,
  combinedUserMapper as c,
  getProfiles as g
};

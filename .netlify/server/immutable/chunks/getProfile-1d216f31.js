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
  a: () => getProfileById,
  c: () => combinedUserMapper,
  g: () => getProfiles
});
module.exports = __toCommonJS(stdin_exports);
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_internal_25ff1fbb = require("./internal-25ff1fbb.js");
var import_db_4cfea39e = require("./db-4cfea39e.js");
const userMapper = (user) => ({
  fullName: (0, import_internal_25ff1fbb.w)(user.full_name, ""),
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
  const { data } = await (0, import_auth_helpers_sveltekit.supabaseServerClient)(accessToken).from("profiles").select("*").eq("id", userId).single();
  return data;
};
const getProfiles = async ({ accessToken }) => {
  const { error, data } = await (0, import_auth_helpers_sveltekit.supabaseServerClient)(accessToken).from("profiles").select("*").not("is_admin", "eq", true).order("created_at", { ascending: false });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      data: usersMapper(data),
      message: ""
    });
  }
  return (0, import_internal_25ff1fbb.e)({
    message: ""
  });
};

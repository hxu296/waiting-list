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
  getSession: () => getSession,
  handle: () => handle
});
module.exports = __toCommonJS(stdin_exports);
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_hooks = require("@sveltejs/kit/hooks");
var import_getProfile_1d216f31 = require("./getProfile-1d216f31.js");
var import_internal_25ff1fbb = require("./internal-25ff1fbb.js");
var import_db_4cfea39e = require("./db-4cfea39e.js");
async function handleProfile({ event, resolve }) {
  const { user, accessToken } = event.locals;
  const profile = await (0, import_getProfile_1d216f31.a)({ accessToken, userId: user == null ? void 0 : user.id });
  if (user) {
    event.locals.user = (0, import_getProfile_1d216f31.c)({ ...user, ...profile });
  }
  let response = await resolve(event);
  return response;
}
const handle = (0, import_hooks.sequence)(...(0, import_auth_helpers_sveltekit.handleAuth)({ logout: { returnTo: "/auth/signin" } }), handleProfile);
async function getSession(event) {
  const { user, accessToken } = event.locals;
  return {
    user,
    accessToken
  };
}

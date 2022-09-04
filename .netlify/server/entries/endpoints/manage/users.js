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
  GET: () => GET
});
module.exports = __toCommonJS(stdin_exports);
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_getProfile_1d216f31 = require("../../../immutable/chunks/getProfile-1d216f31.js");
var import_internal_25ff1fbb = require("../../../immutable/chunks/internal-25ff1fbb.js");
var import_db_4cfea39e = require("../../../immutable/chunks/db-4cfea39e.js");
const GET = async ({ locals }) => (0, import_auth_helpers_sveltekit.withApiAuth)({
  redirectTo: "/auth/signin",
  user: locals.user
}, async () => {
  const users = await (0, import_getProfile_1d216f31.g)(locals);
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

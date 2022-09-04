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
  POST: () => POST
});
module.exports = __toCommonJS(stdin_exports);
var import_admin_2e6a5957 = require("../../../immutable/chunks/admin-2e6a5957.js");
var import_dotenv = require("dotenv");
var import_supabase_js = require("@supabase/supabase-js");
async function POST({ request, locals }) {
  if (!locals.user.isAdmin) {
    return {
      status: 401,
      body: "You are not authorized to make this request"
    };
  }
  const { user, redirectTo } = await request.json();
  const { data, error } = await import_admin_2e6a5957.s.auth.api.inviteUserByEmail(user.email, {
    data: {
      waiting_list_id: user.id,
      full_name: user.fullName,
      is_admin: false
    },
    redirectTo
  });
  if (error) {
    return {
      status: 400,
      body: "There was an error sending the invite link."
    };
  }
  return {
    status: 200,
    body: { ...user, isInvited: true, invitedAt: data.invited_at }
  };
}

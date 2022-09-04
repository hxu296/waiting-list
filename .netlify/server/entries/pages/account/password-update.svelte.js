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
  default: () => Password_update
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_ResetPasswordForm_cdda8d72 = require("../../../immutable/chunks/ResetPasswordForm-cdda8d72.js");
var import_Notification_2f013966 = require("../../../immutable/chunks/Notification-2f013966.js");
var import_index_6a50b39d = require("../../../immutable/chunks/index-6a50b39d.js");
var import_vest = require("vest");
var import_pragmatic_email_regex = require("pragmatic-email-regex");
var import_auth_5f29a4ab = require("../../../immutable/chunks/auth-5f29a4ab.js");
var import_db_4cfea39e = require("../../../immutable/chunks/db-4cfea39e.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_internal_25ff1fbb = require("../../../immutable/chunks/internal-25ff1fbb.js");
const Password_update = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>WLA</title>`, ""}`, ""}

<p class="${"py-1 is-size-5 has-text-weight-slim mb-4"}">Update Password</p>

<div class="${"content"}">${(0, import_index_0b98f2d1.v)(import_ResetPasswordForm_cdda8d72.R, "ResetPasswordForm").$$render($$result, {}, {}, {})}</div>`;
});

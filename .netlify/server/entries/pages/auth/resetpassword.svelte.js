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
  default: () => Resetpassword
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
const Resetpassword = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let token;
  return `${$$result.head += `${$$result.title = `<title>Reset your password - Waiting List App</title>`, ""}`, ""}

<section class="${"columns mt-2"}"><div class="${"column is-two-fifths-desktop is-offset-4-desktop"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Supagram</h2>
			<div class="${"content"}"><h2 class="${"title is-5 has-text-centered"}">Reset your password</h2>
				<p class="${"has-text-centered"}">Enter your new password.</p>
				${(0, import_index_0b98f2d1.v)(import_ResetPasswordForm_cdda8d72.R, "ResetPasswordForm").$$render($$result, { token }, {}, {})}</div>
			<p class="${"has-text-centered pb-4"}">or</p>
			<div class="${"buttons is-justify-content-center"}"><a href="${"/auth/signup"}" class="${"button is-ghost is-size-6 has-text-weight-semibold"}"><span>Create New Account</span></a></div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}"><a href="${"/auth/signin"}">Back to Login</a></p></div></div></section>`;
});

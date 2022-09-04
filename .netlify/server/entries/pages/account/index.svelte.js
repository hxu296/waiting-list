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
  default: () => Account
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_stores_b0ac2b05 = require("../../../immutable/chunks/stores-b0ac2b05.js");
const Account = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.s, (value) => $session = value);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>WLA</title>`, ""}`, ""}

<p class="${"py-1 is-size-5 has-text-weight-slim"}">Welcome ${(0, import_index_0b98f2d1.e)((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.fullName)}</p>

<div class="${"content"}"><div class="${"block"}">Thanks for taking the time to check this tutorial and project out</div>
	<div class="${"block"}">Resources used in this project
		<ul><li><a href="${"https://supabase.com/docs/reference/javascript/auth-onauthstatechange"}">Auth State change</a></li>
			<li><a href="${"https://supabase.com/docs/reference/javascript/auth-api-inviteuserbyemail"}">Invite user</a></li>
			<li><a href="${"https://supabase.com/docs/reference/javascript/auth-signin#sign-in-with-magic-link"}">Sign in with magic link</a></li></ul></div></div>`;
});

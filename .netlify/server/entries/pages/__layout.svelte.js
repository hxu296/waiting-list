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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../immutable/chunks/index-0b98f2d1.js");
var import_stores_b0ac2b05 = require("../../immutable/chunks/stores-b0ac2b05.js");
var import_db_4cfea39e = require("../../immutable/chunks/db-4cfea39e.js");
var import_index_6a50b39d = require("../../immutable/chunks/index-6a50b39d.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var ENDPOINT_PREFIX = "/api/auth";
const initialValues = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null
};
const accessToken = (0, import_index_6a50b39d.w)(initialValues.accessToken);
const SupaAuthHelper = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_accessToken;
  let $$unsubscribe_session;
  $$unsubscribe_accessToken = (0, import_index_0b98f2d1.a)(accessToken, (value) => value);
  let { supabaseClient } = $$props;
  let { endpointPrefix = ENDPOINT_PREFIX } = $$props;
  let { callbackUrl = `${endpointPrefix}/callback` } = $$props;
  let { profileUrl = `${endpointPrefix}/user` } = $$props;
  let { autoRefreshToken = true } = $$props;
  let { session: session2 } = $$props;
  $$unsubscribe_session = (0, import_index_0b98f2d1.a)(session2, (value) => value);
  let { onUserUpdate = (user) => {
  } } = $$props;
  if ($$props.supabaseClient === void 0 && $$bindings.supabaseClient && supabaseClient !== void 0)
    $$bindings.supabaseClient(supabaseClient);
  if ($$props.endpointPrefix === void 0 && $$bindings.endpointPrefix && endpointPrefix !== void 0)
    $$bindings.endpointPrefix(endpointPrefix);
  if ($$props.callbackUrl === void 0 && $$bindings.callbackUrl && callbackUrl !== void 0)
    $$bindings.callbackUrl(callbackUrl);
  if ($$props.profileUrl === void 0 && $$bindings.profileUrl && profileUrl !== void 0)
    $$bindings.profileUrl(profileUrl);
  if ($$props.autoRefreshToken === void 0 && $$bindings.autoRefreshToken && autoRefreshToken !== void 0)
    $$bindings.autoRefreshToken(autoRefreshToken);
  if ($$props.session === void 0 && $$bindings.session && session2 !== void 0)
    $$bindings.session(session2);
  if ($$props.onUserUpdate === void 0 && $$bindings.onUserUpdate && onUserUpdate !== void 0)
    $$bindings.onUserUpdate(onUserUpdate);
  $$unsubscribe_accessToken();
  $$unsubscribe_session();
  return `${slots.default ? slots.default({}) : ``}`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body, html, #svelte{height:100%}.site-wrapper.svelte-14o134x{height:100%;max-height:100%}.is-borderless{border:none !important}.is-fullheight{min-height:100vh}",
  map: null
};
const _layout = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.s, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Waiting List App</title>`, ""}`, ""}
${(0, import_index_0b98f2d1.v)(SupaAuthHelper, "SupaAuthHelper").$$render($$result, { supabaseClient: import_db_4cfea39e.s, session: import_stores_b0ac2b05.s }, {}, {
    default: () => {
      var _a;
      return `<div class="${["site-wrapper svelte-14o134x", ((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.id) ? "is-logged-in" : ""].join(" ").trim()}"><main class="${"columns is-gapless is-fullheight"}">${slots.default ? slots.default({}) : ``}</main></div>`;
    }
  })}`;
});

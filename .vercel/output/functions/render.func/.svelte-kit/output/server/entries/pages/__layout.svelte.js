import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../immutable/chunks/index-0b98f2d1.js";
import { s as session } from "../../immutable/chunks/stores-b0ac2b05.js";
import { s as supabase } from "../../immutable/chunks/db-23ff7454.js";
import { w as writable } from "../../immutable/chunks/index-6a50b39d.js";
import "@supabase/auth-helpers-sveltekit";
var ENDPOINT_PREFIX = "/api/auth";
const initialValues = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null
};
const accessToken = writable(initialValues.accessToken);
const SupaAuthHelper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_accessToken;
  let $$unsubscribe_session;
  $$unsubscribe_accessToken = subscribe(accessToken, (value) => value);
  let { supabaseClient } = $$props;
  let { endpointPrefix = ENDPOINT_PREFIX } = $$props;
  let { callbackUrl = `${endpointPrefix}/callback` } = $$props;
  let { profileUrl = `${endpointPrefix}/user` } = $$props;
  let { autoRefreshToken = true } = $$props;
  let { session: session2 } = $$props;
  $$unsubscribe_session = subscribe(session2, (value) => value);
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
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Waiting List App</title>`, ""}`, ""}
${validate_component(SupaAuthHelper, "SupaAuthHelper").$$render($$result, { supabaseClient: supabase, session }, {}, {
    default: () => {
      var _a;
      return `<div class="${["site-wrapper svelte-14o134x", ((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.id) ? "is-logged-in" : ""].join(" ").trim()}"><main class="${"columns is-gapless is-fullheight"}">${slots.default ? slots.default({}) : ``}</main></div>`;
    }
  })}`;
});
export {
  _layout as default
};

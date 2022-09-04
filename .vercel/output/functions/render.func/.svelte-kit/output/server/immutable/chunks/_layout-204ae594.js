import { c as create_ssr_component, a as subscribe, e as escape } from "./index-0b98f2d1.js";
import { s as session } from "./stores-b0ac2b05.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$unsubscribe_session();
  return `<div class="${"menu-label px-4 py-4 has-background-dark has-text-white is-size-6"}">${slots["page-title"] ? slots["page-title"]({}) : `Dashboard`}</div>
<p class="${"px-6 py-1 is-size-5 has-text-weight-medium"}">Welcome back ${$session.user ? `${escape((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.fullName)}` : ``}</p>
<div class="${"p-6"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as L
};

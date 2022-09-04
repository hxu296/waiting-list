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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_stores_b0ac2b05 = require("../../../immutable/chunks/stores-b0ac2b05.js");
var import_db_4cfea39e = require("../../../immutable/chunks/db-4cfea39e.js");
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-9nhdoj{position:fixed;left:0;right:0;top:0;padding:10px 0;border-bottom:1px solid rgba(219, 219, 219, 1)}",
  map: null
};
const Header = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.p, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"navbar svelte-9nhdoj"}" aria-label="${"main navigation"}"><div class="${"container is-max-desktop"}"><div class="${"navbar-brand"}"><a class="${"navbar-item"}" href="${"/account"}">WLA</a></div>

		<div class="${"navbar-menu"}"><div class="${"navbar-end"}"><div class="${["navbar-item has-dropdown", ""].join(" ").trim()}"><button class="${"button is-medium is-ghost"}"><figure class="${"image"}"><img class="${"is-rounded"}" src="${"https://avatars.githubusercontent.com/u/54469796"}" alt="${"Placeholder"}"></figure></button>

					<div class="${"navbar-dropdown"}"><a href="${"/account/password-update"}" class="${[
    "navbar-item",
    $page.url.pathname == "/password-update" ? "is-active" : ""
  ].join(" ").trim()}">Update Password</a>
						<hr class="${"navbar-divider"}">
						<a href="${"/logout"}" class="${"navbar-item"}">Log Out</a></div></div></div></div></div>
</nav>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1kra9kl{padding-top:120px}",
  map: null
};
const load = async ({ session }) => (0, import_auth_helpers_sveltekit.withPageAuth)({
  redirectTo: "/auth/signin",
  user: session.user
}, () => {
  var _a;
  if ((_a = session.user) == null ? void 0 : _a.isAdmin) {
    return { status: 307, redirect: `/manage` };
  }
  return {};
});
const _layout = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_0b98f2d1.v)(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"container is-max-desktop svelte-1kra9kl"}">${slots.default ? slots.default({}) : ``}
</main>`;
});

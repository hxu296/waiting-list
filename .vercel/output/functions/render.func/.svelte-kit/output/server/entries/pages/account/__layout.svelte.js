import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../immutable/chunks/index-0b98f2d1.js";
import { withPageAuth } from "@supabase/auth-helpers-sveltekit";
import { p as page } from "../../../immutable/chunks/stores-b0ac2b05.js";
import "../../../immutable/chunks/db-23ff7454.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-9nhdoj{position:fixed;left:0;right:0;top:0;padding:10px 0;border-bottom:1px solid rgba(219, 219, 219, 1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
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
const load = async ({ session }) => withPageAuth({
  redirectTo: "/auth/signin",
  user: session.user
}, () => {
  var _a;
  if ((_a = session.user) == null ? void 0 : _a.isAdmin) {
    return { status: 307, redirect: `/manage` };
  }
  return {};
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"container is-max-desktop svelte-1kra9kl"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  _layout as default,
  load
};

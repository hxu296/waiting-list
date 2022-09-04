import { c as create_ssr_component, a as subscribe } from "../../../immutable/chunks/index-0b98f2d1.js";
import { p as page } from "../../../immutable/chunks/stores-b0ac2b05.js";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Waiting List App</title>`, ""}`, ""}

<div class="${"column has-background-white-ter"}"><div class="${"columns is-flex-direction-column is-fullheight is-gapless has-background-white"}"><div class="${"column"}"><div class="${"menu-label px-4 py-4 has-background-black-ter has-text-white is-size-6 mb-0"}">Waiting List App
			</div>
			<aside class="${"menu"}"><ul class="${"menu-list"}"><li><a href="${"/manage"}" class="${[
    "p-4",
    $page.url.pathname == "/manage" ? "has-background-white-ter" : ""
  ].join(" ").trim()}">Dashboard</a></li>
					<li><a href="${"/manage/users"}" class="${[
    "p-4",
    $page.url.pathname == "/manage/users" ? "has-background-white-ter" : ""
  ].join(" ").trim()}">Users</a></li></ul></aside></div>
		<div class="${"menu-footer p-4"}"><a href="${"/api/auth/logout"}" class="${"button is-black is-fullwidth"}">Log Out</a></div></div></div>
<div class="${"column is-9 is-10-desktop has-background-white-ter"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  _layout as default
};

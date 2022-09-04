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
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_stores_b0ac2b05 = require("../../../immutable/chunks/stores-b0ac2b05.js");
const _layout = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.p, (value) => $page = value);
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

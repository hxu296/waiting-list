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
  default: () => Users
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_layout_204ae594 = require("../../../immutable/chunks/_layout-204ae594.js");
var import_stores_b0ac2b05 = require("../../../immutable/chunks/stores-b0ac2b05.js");
const Users = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  return `${(0, import_index_0b98f2d1.v)(import_layout_204ae594.L, "Layout").$$render($$result, {}, {}, {
    "page-title": () => {
      return `Users`;
    },
    default: () => {
      return `<div class="${"box"}"><table class="${"table is-fullwidth is-hoverable is-striped"}"><thead><tr><th>Name</th></tr></thead>
			<tfoot><tr><th>Name</th></tr></tfoot>
			<tbody>${users.length ? (0, import_index_0b98f2d1.j)(users, (user, index) => {
        return `<tr><td>${(0, import_index_0b98f2d1.e)(user.fullName)}</td>
					</tr>`;
      }) : `<tr><td colspan="${"2"}" class="${"has-text-centered"}">No records found</td>
					</tr>`}</tbody></table></div>`;
    }
  })}`;
});

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
  default: () => Manage
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_db_4cfea39e = require("../../../immutable/chunks/db-4cfea39e.js");
var import_layout_204ae594 = require("../../../immutable/chunks/_layout-204ae594.js");
var import_waiting_list_57007d33 = require("../../../immutable/chunks/waiting_list-57007d33.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_stores_b0ac2b05 = require("../../../immutable/chunks/stores-b0ac2b05.js");
var import_internal_25ff1fbb = require("../../../immutable/chunks/internal-25ff1fbb.js");
const WaitingListTableRow = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let { user = {} } = $$props;
  let { inviteUser = async () => {
    await new Promise();
  } } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.inviteUser === void 0 && $$bindings.inviteUser && inviteUser !== void 0)
    $$bindings.inviteUser(inviteUser);
  return `<tr><td>${(0, import_index_0b98f2d1.e)(user.fullName)}</td>
	<td><a href="${"mailto:" + (0, import_index_0b98f2d1.e)(user.email, true)}">${(0, import_index_0b98f2d1.e)(user.email)}</a></td>
	<td>${(0, import_index_0b98f2d1.e)(user.isInvited ? "Yes" : "No")}</td>
	<td><div class="${"buttons"}"><button class="${["button is-success is-small", ""].join(" ").trim()}" ${""}>${(0, import_index_0b98f2d1.e)(user.isInvited ? "Invite Again" : "Invite")}</button>
			<button class="${"button is-danger is-small"}" ${user.isInvited ? "disabled" : ""}>Delete</button></div></td></tr>`;
});
const Manage = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  const redirectTo = `${import_db_4cfea39e.V}logging-in?redirect=/account/password-update`;
  const inviteUser = async (user) => await (0, import_waiting_list_57007d33.i)(user, redirectTo);
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  return `${(0, import_index_0b98f2d1.v)(import_layout_204ae594.L, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"box"}"><table class="${"table is-fullwidth is-hoverable is-striped"}"><thead><tr><th>Name</th>
					<th>Email</th>
					<th>Invited</th>
					<th>Action</th></tr></thead>
			<tfoot><tr><th>Name</th>
					<th>Email</th>
					<th>Invited</th>
					<th>Action</th></tr></tfoot>
			<tbody>${(0, import_index_0b98f2d1.j)(users, (user) => {
        return `${(0, import_index_0b98f2d1.v)(WaitingListTableRow, "WaitingListTableRow").$$render($$result, { user, inviteUser }, {}, {})}`;
      })}</tbody></table></div>`;
    }
  })}`;
});

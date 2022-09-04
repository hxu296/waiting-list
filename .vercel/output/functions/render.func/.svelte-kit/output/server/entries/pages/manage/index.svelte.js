import { c as create_ssr_component, e as escape, v as validate_component, j as each } from "../../../immutable/chunks/index-0b98f2d1.js";
import { V as VITE_APP_URL } from "../../../immutable/chunks/db-23ff7454.js";
import { L as Layout } from "../../../immutable/chunks/_layout-204ae594.js";
import { i as inviteFromWaitingList } from "../../../immutable/chunks/waiting_list-3a89864d.js";
import "@supabase/auth-helpers-sveltekit";
import "../../../immutable/chunks/stores-b0ac2b05.js";
import "../../../immutable/chunks/internal-25ff1fbb.js";
const WaitingListTableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user = {} } = $$props;
  let { inviteUser = async () => {
    await new Promise();
  } } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.inviteUser === void 0 && $$bindings.inviteUser && inviteUser !== void 0)
    $$bindings.inviteUser(inviteUser);
  return `<tr><td>${escape(user.fullName)}</td>
	<td><a href="${"mailto:" + escape(user.email, true)}">${escape(user.email)}</a></td>
	<td>${escape(user.isInvited ? "Yes" : "No")}</td>
	<td><div class="${"buttons"}"><button class="${["button is-success is-small", ""].join(" ").trim()}" ${""}>${escape(user.isInvited ? "Invite Again" : "Invite")}</button>
			<button class="${"button is-danger is-small"}" ${user.isInvited ? "disabled" : ""}>Delete</button></div></td></tr>`;
});
const Manage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  const redirectTo = `${VITE_APP_URL}logging-in?redirect=/account/password-update`;
  const inviteUser = async (user) => await inviteFromWaitingList(user, redirectTo);
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"box"}"><table class="${"table is-fullwidth is-hoverable is-striped"}"><thead><tr><th>Name</th>
					<th>Email</th>
					<th>Invited</th>
					<th>Action</th></tr></thead>
			<tfoot><tr><th>Name</th>
					<th>Email</th>
					<th>Invited</th>
					<th>Action</th></tr></tfoot>
			<tbody>${each(users, (user) => {
        return `${validate_component(WaitingListTableRow, "WaitingListTableRow").$$render($$result, { user, inviteUser }, {}, {})}`;
      })}</tbody></table></div>`;
    }
  })}`;
});
export {
  Manage as default
};

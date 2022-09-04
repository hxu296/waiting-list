import { c as create_ssr_component, v as validate_component, j as each, e as escape } from "../../../immutable/chunks/index-0b98f2d1.js";
import { L as Layout } from "../../../immutable/chunks/_layout-204ae594.js";
import "../../../immutable/chunks/stores-b0ac2b05.js";
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
    "page-title": () => {
      return `Users`;
    },
    default: () => {
      return `<div class="${"box"}"><table class="${"table is-fullwidth is-hoverable is-striped"}"><thead><tr><th>Name</th></tr></thead>
			<tfoot><tr><th>Name</th></tr></tfoot>
			<tbody>${users.length ? each(users, (user, index) => {
        return `<tr><td>${escape(user.fullName)}</td>
					</tr>`;
      }) : `<tr><td colspan="${"2"}" class="${"has-text-centered"}">No records found</td>
					</tr>`}</tbody></table></div>`;
    }
  })}`;
});
export {
  Users as default
};

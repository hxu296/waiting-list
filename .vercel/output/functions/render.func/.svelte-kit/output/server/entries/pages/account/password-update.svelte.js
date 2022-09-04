import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-0b98f2d1.js";
import { R as ResetPasswordForm } from "../../../immutable/chunks/ResetPasswordForm-cf5fe337.js";
import "../../../immutable/chunks/Notification-2f013966.js";
import "../../../immutable/chunks/index-6a50b39d.js";
import "vest";
import "pragmatic-email-regex";
import "../../../immutable/chunks/auth-84ecef4e.js";
import "../../../immutable/chunks/db-a461fa9d.js";
import "@supabase/auth-helpers-sveltekit";
import "../../../immutable/chunks/internal-25ff1fbb.js";
const Password_update = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>WLA</title>`, ""}`, ""}

<p class="${"py-1 is-size-5 has-text-weight-slim mb-4"}">Update Password</p>

<div class="${"content"}">${validate_component(ResetPasswordForm, "ResetPasswordForm").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Password_update as default
};

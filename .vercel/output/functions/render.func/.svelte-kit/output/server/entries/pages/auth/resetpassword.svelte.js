import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-0b98f2d1.js";
import { R as ResetPasswordForm } from "../../../immutable/chunks/ResetPasswordForm-a18d32f8.js";
import "../../../immutable/chunks/Notification-2f013966.js";
import "../../../immutable/chunks/index-6a50b39d.js";
import "vest";
import "pragmatic-email-regex";
import "../../../immutable/chunks/auth-381949e4.js";
import "../../../immutable/chunks/db-23ff7454.js";
import "@supabase/auth-helpers-sveltekit";
import "../../../immutable/chunks/internal-25ff1fbb.js";
const Resetpassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let token;
  return `${$$result.head += `${$$result.title = `<title>Reset your password - Waiting List App</title>`, ""}`, ""}

<section class="${"columns mt-2"}"><div class="${"column is-two-fifths-desktop is-offset-4-desktop"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Supagram</h2>
			<div class="${"content"}"><h2 class="${"title is-5 has-text-centered"}">Reset your password</h2>
				<p class="${"has-text-centered"}">Enter your new password.</p>
				${validate_component(ResetPasswordForm, "ResetPasswordForm").$$render($$result, { token }, {}, {})}</div>
			<p class="${"has-text-centered pb-4"}">or</p>
			<div class="${"buttons is-justify-content-center"}"><a href="${"/auth/signup"}" class="${"button is-ghost is-size-6 has-text-weight-semibold"}"><span>Create New Account</span></a></div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}"><a href="${"/auth/signin"}">Back to Login</a></p></div></div></section>`;
});
export {
  Resetpassword as default
};

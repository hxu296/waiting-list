import { c as create_ssr_component, a as subscribe, e as escape } from "../../../immutable/chunks/index-0b98f2d1.js";
import { s as session } from "../../../immutable/chunks/stores-b0ac2b05.js";
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>WLA</title>`, ""}`, ""}

<p class="${"py-1 is-size-5 has-text-weight-slim"}">Welcome ${escape((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.fullName)}</p>

<div class="${"content"}"><div class="${"block"}">Thanks for taking the time to check this tutorial and project out</div>
	<div class="${"block"}">Resources used in this project
		<ul><li><a href="${"https://supabase.com/docs/reference/javascript/auth-onauthstatechange"}">Auth State change</a></li>
			<li><a href="${"https://supabase.com/docs/reference/javascript/auth-api-inviteuserbyemail"}">Invite user</a></li>
			<li><a href="${"https://supabase.com/docs/reference/javascript/auth-signin#sign-in-with-magic-link"}">Sign in with magic link</a></li></ul></div></div>`;
});
export {
  Account as default
};

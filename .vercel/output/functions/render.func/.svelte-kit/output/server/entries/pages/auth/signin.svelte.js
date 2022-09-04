import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as add_attribute } from "../../../immutable/chunks/index-0b98f2d1.js";
import { s as signIn } from "../../../immutable/chunks/auth-381949e4.js";
import { c as createForm, N as Notification, S as SignInSchema } from "../../../immutable/chunks/Notification-2f013966.js";
import "../../../immutable/chunks/db-23ff7454.js";
import "@supabase/auth-helpers-sveltekit";
import "../../../immutable/chunks/internal-25ff1fbb.js";
import "../../../immutable/chunks/index-6a50b39d.js";
import "vest";
import "pragmatic-email-regex";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
async function route(path, delay = 1e3) {
  if (delay)
    await new Promise((r) => setTimeout(r, delay));
  await goto(path);
}
const SignInForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $isSubmitting, $$unsubscribe_isSubmitting;
  let message = null;
  let messageType = "error";
  const { form, errors, handleSubmit, isSubmitting } = createForm({
    initialValues: { email: "", password: "" },
    validate: (values) => SignInSchema(values),
    onSubmit: async ({ email, password }) => {
      message = null;
      const response = await signIn({ email, password });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
        route("/account");
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_isSubmitting = subscribe(isSubmitting, (value) => $isSubmitting = value);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_isSubmitting();
  return `${validate_component(Notification, "Notification").$$render($$result, {
    showNotification: message !== null,
    status: messageType
  }, {}, {
    default: () => {
      return `${escape(message)}`;
    }
  })}

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"email"}" placeholder="${"Email"}"${add_attribute("value", $form.email, 0)}></p>
		${$errors.email ? `<p class="${"help is-danger"}">${escape($errors.email)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${add_attribute("value", $form.password, 0)}></p>
		${$errors.password ? `<p class="${"help is-danger"}">${escape($errors.password)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}" ${$isSubmitting ? "disabled" : ""}>Login</button></p></div></form>`;
});
const Signin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Waiting List App - Sign In</title>`, ""}`, ""}

<section class="${"columns mt-6 pt-6"}"><div class="${"column is-half is-hidden-touch"}"><figure class="${"image"}"><img src="${"/img/WaitingList_Placeholder.png"}" alt="${"Placeholder"}"></figure></div>
	<div class="${"column is-two-fifths-desktop is-half-tablet-only"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
			<div class="${"content"}">${validate_component(SignInForm, "SignInForm").$$render($$result, {}, {}, {})}</div>
			<div class="${"buttons is-justify-content-center"}"><a href="${"/auth/forgotpassword"}" class="${"button is-ghost is-size-6"}"><span>Forgot password?</span></a></div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}">Don&#39;t have an account? <a href="${"/"}">Get on the waiting list</a></p></div></div></section>`;
});
export {
  Signin as default
};

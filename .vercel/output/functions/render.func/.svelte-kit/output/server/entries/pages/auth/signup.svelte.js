import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as add_attribute } from "../../../immutable/chunks/index-0b98f2d1.js";
import { c as createForm, N as Notification, a as SignUpSchema } from "../../../immutable/chunks/Notification-2f013966.js";
import { a as signUp } from "../../../immutable/chunks/auth-84ecef4e.js";
import { V as VITE_APP_URL } from "../../../immutable/chunks/db-a461fa9d.js";
import "../../../immutable/chunks/index-6a50b39d.js";
import "vest";
import "pragmatic-email-regex";
import "../../../immutable/chunks/internal-25ff1fbb.js";
import "@supabase/auth-helpers-sveltekit";
const SignUpForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const redirectTo = `${VITE_APP_URL}logging-in`;
  let message = null;
  let messageType = "error";
  const { form, errors, handleChange, handleSubmit, isValid, isSubmitting } = createForm({
    initialValues: { fullName: "", email: "", password: "" },
    validate: (values) => SignUpSchema(values),
    onSubmit: async ({ fullName, username, email, password }) => {
      message = null;
      const response = await signUp({
        full_name: fullName,
        email,
        password,
        redirectTo
      });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${validate_component(Notification, "Notification").$$render($$result, {
    showNotification: message !== null,
    status: messageType
  }, {}, {
    default: () => {
      return `${escape(message)}`;
    }
  })}

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"text"}" placeholder="${"Full Name"}"${add_attribute("value", $form.fullName, 0)}></p>
		${$errors.fullName ? `<p class="${"help is-danger"}">${escape($errors.fullName)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"email"}" placeholder="${"Email"}"${add_attribute("value", $form.email, 0)}></p>
		${$errors.email ? `<p class="${"help is-danger"}">${escape($errors.email)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${add_attribute("value", $form.password, 0)}></p>
		${$errors.password ? `<p class="${"help is-danger"}">${escape($errors.password)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}">Sign up</button></p></div></form>`;
});
const load = async ({ fetch }) => {
  const res = await fetch("/api/admin.json");
  if (res.ok) {
    const { isAdmin } = await res.json();
    if (!isAdmin) {
      return { status: 200 };
    }
  }
  return { status: 302, redirect: "/auth/signin" };
};
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Waiting List App - Sign up</title>`, ""}`, ""}

<section class="${"columns mt-2"}"><div class="${"column is-two-fifths-desktop is-offset-4-desktop"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
			<div class="${"content"}">${validate_component(SignUpForm, "SignUpForm").$$render($$result, {}, {}, {})}</div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}">Have have an account? <a href="${"/auth/signin"}">Sign in</a></p></div></div></section>`;
});
export {
  Signup as default,
  load
};

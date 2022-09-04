import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as add_attribute } from "../../../immutable/chunks/index-0b98f2d1.js";
import { c as createForm, N as Notification, F as ForgotPasswordSchema } from "../../../immutable/chunks/Notification-2f013966.js";
import { V as VITE_APP_URL } from "../../../immutable/chunks/db-23ff7454.js";
import { t as triggerResetPasswordEmail } from "../../../immutable/chunks/auth-381949e4.js";
import "../../../immutable/chunks/index-6a50b39d.js";
import "vest";
import "pragmatic-email-regex";
import "@supabase/auth-helpers-sveltekit";
import "../../../immutable/chunks/internal-25ff1fbb.js";
const ForgotPasswordForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const redirectTo = `${VITE_APP_URL}`;
  let message = null;
  let messageType = "error";
  const { form, errors, handleChange, handleSubmit, handleReset, isValid, isSubmitting } = createForm({
    initialValues: { email: "" },
    validate: (values) => ForgotPasswordSchema(values),
    onSubmit: ({ email }) => {
      message = null;
      const response = triggerResetPasswordEmail({ email, redirectTo });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
        handleReset();
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

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"email"}" placeholder="${"Email"}"${add_attribute("value", $form.email, 0)}></p>
		${$errors.email ? `<p class="${"help is-danger"}">${escape($errors.email)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}">Send password reset link </button></p></div></form>`;
});
const Forgotpassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Forgot your password? - Waiting List App</title>`, ""}`, ""}

<section class="${"columns mt-2"}"><div class="${"column is-two-fifths-desktop is-offset-4-desktop"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
			<div class="${"content"}"><h2 class="${"title is-5 has-text-centered"}">Trouble logging in?</h2>
				<p class="${"has-text-centered"}">Enter your email and we&#39;ll send you a link to get back into your account.
				</p>
				${validate_component(ForgotPasswordForm, "ForgotPasswordForm").$$render($$result, {}, {}, {})}</div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}"><a href="${"/auth/signin"}">Back to Login</a></p></div></div></section>`;
});
export {
  Forgotpassword as default
};

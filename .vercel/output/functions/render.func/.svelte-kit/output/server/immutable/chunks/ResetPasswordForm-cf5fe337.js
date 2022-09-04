import { c as create_ssr_component, d as createEventDispatcher, a as subscribe, v as validate_component, e as escape, f as add_attribute } from "./index-0b98f2d1.js";
import { c as createForm, N as Notification, R as ResetPasswordSchema } from "./Notification-2f013966.js";
import { u as updatePassword } from "./auth-84ecef4e.js";
const ResetPasswordForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const dispatch = createEventDispatcher();
  let message = null;
  let messageType = "error";
  const { form, errors, handleChange, handleSubmit, isValid, isSubmitting } = createForm({
    initialValues: { password: "", passwordConfirm: "" },
    validate: (values) => ResetPasswordSchema(values),
    onSubmit: async ({ password }) => {
      message = null;
      const response = await updatePassword({ password });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
        dispatch("formSuccess", { response });
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

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${add_attribute("value", $form.password, 0)}></p>
		${$errors.password ? `<p class="${"help is-danger"}">${escape($errors.password)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Confirm Password"}"${add_attribute("value", $form.passwordConfirm, 0)}></p>
		${$errors.passwordConfirm ? `<p class="${"help is-danger"}">${escape($errors.passwordConfirm)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}">Update Password</button></p></div></form>`;
});
export {
  ResetPasswordForm as R
};

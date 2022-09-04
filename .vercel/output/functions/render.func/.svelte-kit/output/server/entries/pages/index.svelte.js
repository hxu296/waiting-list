import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, f as add_attribute } from "../../immutable/chunks/index-0b98f2d1.js";
import { s as session } from "../../immutable/chunks/stores-b0ac2b05.js";
import { c as createForm, N as Notification, W as WaitingListSchema } from "../../immutable/chunks/Notification-2f013966.js";
import { a as addToWaitingList } from "../../immutable/chunks/waiting_list-3a89864d.js";
import "../../immutable/chunks/index-6a50b39d.js";
import "vest";
import "pragmatic-email-regex";
import "../../immutable/chunks/db-23ff7454.js";
import "@supabase/auth-helpers-sveltekit";
import "../../immutable/chunks/internal-25ff1fbb.js";
const WaitingListForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let message = null;
  let messageType = "error";
  const { form, errors, handleReset, handleSubmit, isValid, isSubmitting } = createForm({
    initialValues: { fullName: "", email: "" },
    validate: (values) => WaitingListSchema(values),
    onSubmit: async ({ fullName, email }) => {
      message = null;
      messageType = "error";
      const response = await addToWaitingList({ fullName, email });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
      }
      handleReset();
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
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}">Add me to the waiting list</button></p></div></form>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$unsubscribe_session();
  return `<div class="${"container is-max-desktop p-6"}">${((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.id) ? `<section class="${"columns"}"><div class="${"column is-full"}"><div class="${"box"}"><p class="${"has-text-centered"}">You are currently signed in <a href="${"/account"}">Take me to my account</a></p></div></div></section>` : `<section class="${"columns mt-6 pt-6"}"><div class="${"column is-half is-hidden-touch"}"><figure class="${"image is-5by3"}"><img src="${"/img/WaitingList_Placeholder.png"}" alt="${"Waiting List App"}"></figure></div>
			<div class="${"column is-half-desktop is-half-tablet-only"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
					<div class="${"content"}">${validate_component(WaitingListForm, "WaitingListForm").$$render($$result, {}, {}, {})}</div></div></div></section>
		<section class="${"columns"}"><div class="${"column is-full"}"><div class="${"box"}"><p class="${"has-text-centered"}">Have you been invited already? <a href="${"/auth/signin"}">Sign in</a></p></div></div></section>`}</div>`;
});
export {
  Routes as default
};

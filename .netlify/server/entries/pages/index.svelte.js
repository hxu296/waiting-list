var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../immutable/chunks/index-0b98f2d1.js");
var import_stores_b0ac2b05 = require("../../immutable/chunks/stores-b0ac2b05.js");
var import_Notification_2f013966 = require("../../immutable/chunks/Notification-2f013966.js");
var import_waiting_list_57007d33 = require("../../immutable/chunks/waiting_list-57007d33.js");
var import_index_6a50b39d = require("../../immutable/chunks/index-6a50b39d.js");
var import_vest = require("vest");
var import_pragmatic_email_regex = require("pragmatic-email-regex");
var import_db_4cfea39e = require("../../immutable/chunks/db-4cfea39e.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_internal_25ff1fbb = require("../../immutable/chunks/internal-25ff1fbb.js");
const WaitingListForm = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let message = null;
  let messageType = "error";
  const { form, errors, handleReset, handleSubmit, isValid, isSubmitting } = (0, import_Notification_2f013966.c)({
    initialValues: { fullName: "", email: "" },
    validate: (values) => (0, import_Notification_2f013966.W)(values),
    onSubmit: async ({ fullName, email }) => {
      message = null;
      messageType = "error";
      const response = await (0, import_waiting_list_57007d33.a)({ fullName, email });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
      }
      handleReset();
    }
  });
  $$unsubscribe_form = (0, import_index_0b98f2d1.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_index_0b98f2d1.a)(errors, (value) => $errors = value);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${(0, import_index_0b98f2d1.v)(import_Notification_2f013966.N, "Notification").$$render($$result, {
    showNotification: message !== null,
    status: messageType
  }, {}, {
    default: () => {
      return `${(0, import_index_0b98f2d1.e)(message)}`;
    }
  })}

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"text"}" placeholder="${"Full Name"}"${(0, import_index_0b98f2d1.f)("value", $form.fullName, 0)}></p>
		${$errors.fullName ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.fullName)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"email"}" placeholder="${"Email"}"${(0, import_index_0b98f2d1.f)("value", $form.email, 0)}></p>
		${$errors.email ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.email)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}">Add me to the waiting list</button></p></div></form>`;
});
const Routes = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.s, (value) => $session = value);
  $$unsubscribe_session();
  return `<div class="${"container is-max-desktop p-6"}">${((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.id) ? `<section class="${"columns"}"><div class="${"column is-full"}"><div class="${"box"}"><p class="${"has-text-centered"}">You are currently signed in <a href="${"/account"}">Take me to my account</a></p></div></div></section>` : `<section class="${"columns mt-6 pt-6"}"><div class="${"column is-half is-hidden-touch"}"><figure class="${"image is-5by3"}"><img src="${"/img/WaitingList_Placeholder.png"}" alt="${"Waiting List App"}"></figure></div>
			<div class="${"column is-half-desktop is-half-tablet-only"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
					<div class="${"content"}">${(0, import_index_0b98f2d1.v)(WaitingListForm, "WaitingListForm").$$render($$result, {}, {}, {})}</div></div></div></section>
		<section class="${"columns"}"><div class="${"column is-full"}"><div class="${"box"}"><p class="${"has-text-centered"}">Have you been invited already? <a href="${"/auth/signin"}">Sign in</a></p></div></div></section>`}</div>`;
});

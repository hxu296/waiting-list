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
  default: () => Signin
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_auth_5f29a4ab = require("../../../immutable/chunks/auth-5f29a4ab.js");
var import_Notification_2f013966 = require("../../../immutable/chunks/Notification-2f013966.js");
var import_db_4cfea39e = require("../../../immutable/chunks/db-4cfea39e.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_internal_25ff1fbb = require("../../../immutable/chunks/internal-25ff1fbb.js");
var import_index_6a50b39d = require("../../../immutable/chunks/index-6a50b39d.js");
var import_vest = require("vest");
var import_pragmatic_email_regex = require("pragmatic-email-regex");
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
const SignInForm = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $isSubmitting, $$unsubscribe_isSubmitting;
  let message = null;
  let messageType = "error";
  const { form, errors, handleSubmit, isSubmitting } = (0, import_Notification_2f013966.c)({
    initialValues: { email: "", password: "" },
    validate: (values) => (0, import_Notification_2f013966.S)(values),
    onSubmit: async ({ email, password }) => {
      message = null;
      const response = await (0, import_auth_5f29a4ab.s)({ email, password });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
        route("/account");
      }
    }
  });
  $$unsubscribe_form = (0, import_index_0b98f2d1.a)(form, (value) => $form = value);
  $$unsubscribe_errors = (0, import_index_0b98f2d1.a)(errors, (value) => $errors = value);
  $$unsubscribe_isSubmitting = (0, import_index_0b98f2d1.a)(isSubmitting, (value) => $isSubmitting = value);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_isSubmitting();
  return `${(0, import_index_0b98f2d1.v)(import_Notification_2f013966.N, "Notification").$$render($$result, {
    showNotification: message !== null,
    status: messageType
  }, {}, {
    default: () => {
      return `${(0, import_index_0b98f2d1.e)(message)}`;
    }
  })}

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"email"}" placeholder="${"Email"}"${(0, import_index_0b98f2d1.f)("value", $form.email, 0)}></p>
		${$errors.email ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.email)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${(0, import_index_0b98f2d1.f)("value", $form.password, 0)}></p>
		${$errors.password ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.password)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}" ${$isSubmitting ? "disabled" : ""}>Login</button></p></div></form>`;
});
const Signin = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Waiting List App - Sign In</title>`, ""}`, ""}

<section class="${"columns mt-6 pt-6"}"><div class="${"column is-half is-hidden-touch"}"><figure class="${"image"}"><img src="${"/img/WaitingList_Placeholder.png"}" alt="${"Placeholder"}"></figure></div>
	<div class="${"column is-two-fifths-desktop is-half-tablet-only"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
			<div class="${"content"}">${(0, import_index_0b98f2d1.v)(SignInForm, "SignInForm").$$render($$result, {}, {}, {})}</div>
			<div class="${"buttons is-justify-content-center"}"><a href="${"/auth/forgotpassword"}" class="${"button is-ghost is-size-6"}"><span>Forgot password?</span></a></div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}">Don&#39;t have an account? <a href="${"/"}">Get on the waiting list</a></p></div></div></section>`;
});

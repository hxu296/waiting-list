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
  default: () => Signup,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../../immutable/chunks/index-0b98f2d1.js");
var import_Notification_2f013966 = require("../../../immutable/chunks/Notification-2f013966.js");
var import_auth_5f29a4ab = require("../../../immutable/chunks/auth-5f29a4ab.js");
var import_db_4cfea39e = require("../../../immutable/chunks/db-4cfea39e.js");
var import_index_6a50b39d = require("../../../immutable/chunks/index-6a50b39d.js");
var import_vest = require("vest");
var import_pragmatic_email_regex = require("pragmatic-email-regex");
var import_internal_25ff1fbb = require("../../../immutable/chunks/internal-25ff1fbb.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
const SignUpForm = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const redirectTo = `${import_db_4cfea39e.V}logging-in`;
  let message = null;
  let messageType = "error";
  const { form, errors, handleChange, handleSubmit, isValid, isSubmitting } = (0, import_Notification_2f013966.c)({
    initialValues: { fullName: "", email: "", password: "" },
    validate: (values) => (0, import_Notification_2f013966.a)(values),
    onSubmit: async ({ fullName, username, email, password }) => {
      message = null;
      const response = await (0, import_auth_5f29a4ab.a)({
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
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${(0, import_index_0b98f2d1.f)("value", $form.password, 0)}></p>
		${$errors.password ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.password)}</p>` : ``}</div>
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
const Signup = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Waiting List App - Sign up</title>`, ""}`, ""}

<section class="${"columns mt-2"}"><div class="${"column is-two-fifths-desktop is-offset-4-desktop"}"><div class="${"box p-6"}"><h2 class="${"subtitle is-3 has-text-centered pb-4"}">Waiting List App</h2>
			<div class="${"content"}">${(0, import_index_0b98f2d1.v)(SignUpForm, "SignUpForm").$$render($$result, {}, {}, {})}</div></div>

		<div class="${"box"}"><p class="${"has-text-centered"}">Have have an account? <a href="${"/auth/signin"}">Sign in</a></p></div></div></section>`;
});

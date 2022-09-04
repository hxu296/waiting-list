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
  R: () => ResetPasswordForm
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("./index-0b98f2d1.js");
var import_Notification_2f013966 = require("./Notification-2f013966.js");
var import_auth_5f29a4ab = require("./auth-5f29a4ab.js");
const ResetPasswordForm = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  const dispatch = (0, import_index_0b98f2d1.d)();
  let message = null;
  let messageType = "error";
  const { form, errors, handleChange, handleSubmit, isValid, isSubmitting } = (0, import_Notification_2f013966.c)({
    initialValues: { password: "", passwordConfirm: "" },
    validate: (values) => (0, import_Notification_2f013966.R)(values),
    onSubmit: async ({ password }) => {
      message = null;
      const response = await (0, import_auth_5f29a4ab.u)({ password });
      message = response.message;
      if (response.statusCode === 200) {
        messageType = "success";
        dispatch("formSuccess", { response });
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

<form><div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Password"}"${(0, import_index_0b98f2d1.f)("value", $form.password, 0)}></p>
		${$errors.password ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.password)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><input class="${"input"}" type="${"password"}" placeholder="${"Confirm Password"}"${(0, import_index_0b98f2d1.f)("value", $form.passwordConfirm, 0)}></p>
		${$errors.passwordConfirm ? `<p class="${"help is-danger"}">${(0, import_index_0b98f2d1.e)($errors.passwordConfirm)}</p>` : ``}</div>
	<div class="${"field"}"><p class="${"control"}"><button class="${"button is-fullwidth is-link"}">Update Password</button></p></div></form>`;
});

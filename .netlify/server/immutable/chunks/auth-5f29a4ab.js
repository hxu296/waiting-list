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
  a: () => signUp,
  s: () => signIn,
  t: () => triggerResetPasswordEmail,
  u: () => updatePassword
});
module.exports = __toCommonJS(stdin_exports);
var import_db_4cfea39e = require("./db-4cfea39e.js");
var import_internal_25ff1fbb = require("./internal-25ff1fbb.js");
const signIn = async ({ email, password }) => {
  const { error } = await import_db_4cfea39e.s.auth.signIn({ email, password });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      message: `You've successfully logged in`
    });
  }
  return (0, import_internal_25ff1fbb.e)({
    message: `The email that you've entered doesn't belong to an account. Please check your email and try again.`,
    code: 400
  });
};
const signUp = async ({ full_name, email, password, redirectTo = "" }) => {
  const { error } = await import_db_4cfea39e.s.auth.signUp({ email, password }, {
    data: {
      is_admin: true,
      full_name
    },
    redirectTo
  });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      message: "Signup successfully, please check your email for a confirmation message."
    });
  }
  return (0, import_internal_25ff1fbb.e)({
    message: error.message,
    code: 400
  });
};
const triggerResetPasswordEmail = ({ email, redirectTo }) => {
  const { error } = import_db_4cfea39e.s.auth.api.resetPasswordForEmail(email, { redirectTo });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      message: "Reset email sent successfully, please check your email for the reset password link."
    });
  }
  return (0, import_internal_25ff1fbb.e)({
    message: error.message,
    code: 400
  });
};
const updatePassword = async ({ password }) => {
  const { error } = await import_db_4cfea39e.s.auth.update({ password });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      message: "Password updated successfully."
    });
  }
  return (0, import_internal_25ff1fbb.e)({
    message: error.message,
    code: 400
  });
};

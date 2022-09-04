import { s as supabase } from "./db-a461fa9d.js";
import { s as successMapper, e as errorMapper } from "./internal-25ff1fbb.js";
const signIn = async ({ email, password }) => {
  const { error } = await supabase.auth.signIn({ email, password });
  if (!error) {
    return successMapper({
      message: `You've successfully logged in`
    });
  }
  return errorMapper({
    message: `The email that you've entered doesn't belong to an account. Please check your email and try again.`,
    code: 400
  });
};
const signUp = async ({ full_name, email, password, redirectTo = "" }) => {
  const { error } = await supabase.auth.signUp({ email, password }, {
    data: {
      is_admin: true,
      full_name
    },
    redirectTo
  });
  if (!error) {
    return successMapper({
      message: "Signup successfully, please check your email for a confirmation message."
    });
  }
  return errorMapper({
    message: error.message,
    code: 400
  });
};
const triggerResetPasswordEmail = ({ email, redirectTo }) => {
  const { error } = supabase.auth.api.resetPasswordForEmail(email, { redirectTo });
  if (!error) {
    return successMapper({
      message: "Reset email sent successfully, please check your email for the reset password link."
    });
  }
  return errorMapper({
    message: error.message,
    code: 400
  });
};
const updatePassword = async ({ password }) => {
  const { error } = await supabase.auth.update({ password });
  if (!error) {
    return successMapper({
      message: "Password updated successfully."
    });
  }
  return errorMapper({
    message: error.message,
    code: 400
  });
};
export {
  signUp as a,
  signIn as s,
  triggerResetPasswordEmail as t,
  updatePassword as u
};

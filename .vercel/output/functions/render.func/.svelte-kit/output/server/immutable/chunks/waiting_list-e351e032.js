import { s as supabase } from "./db-a461fa9d.js";
import { supabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { w as withDefault, s as successMapper, e as errorMapper } from "./internal-25ff1fbb.js";
const waitingListMapper = (user) => ({
  id: user.id,
  fullName: withDefault(user.full_name, ""),
  email: user.email,
  invitedAt: user.invited_at,
  isInvited: user.invited_at ? true : false
});
const waitingListsMapper = (users) => users.map((u) => waitingListMapper(u));
const addToWaitingList = async ({ email, fullName }) => {
  const { error } = await supabase.from("waiting_list").insert({ email, full_name: fullName }, { returning: "minimal" });
  if (!error) {
    return successMapper({
      message: `You've been successfully added to the waiting list.`
    });
  }
  return successMapper({
    message: `You've been successfully added to the waiting list.`
  });
};
const getWaitingList = async ({ accessToken }) => {
  const { data, error } = await supabaseServerClient(accessToken).from("waiting_list").select("*").order("created_at", { ascending: false });
  if (!error) {
    return successMapper({
      data: waitingListsMapper(data),
      message: "Waiting list retrieved successfully."
    });
  }
  return errorMapper({
    message: error.message,
    statusCode: 400
  });
};
const inviteFromWaitingList = async (user, redirectTo) => {
  const res = await fetch("/api/invite.json", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify({ user, redirectTo })
  });
  if (res.ok) {
    return successMapper({
      data: await res.json()
    });
  }
  return errorMapper({
    message: "Something went wrong!!!",
    statusCode: 400
  });
};
export {
  addToWaitingList as a,
  getWaitingList as g,
  inviteFromWaitingList as i
};

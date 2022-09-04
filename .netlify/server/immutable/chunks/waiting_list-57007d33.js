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
  a: () => addToWaitingList,
  g: () => getWaitingList,
  i: () => inviteFromWaitingList
});
module.exports = __toCommonJS(stdin_exports);
var import_db_4cfea39e = require("./db-4cfea39e.js");
var import_auth_helpers_sveltekit = require("@supabase/auth-helpers-sveltekit");
var import_internal_25ff1fbb = require("./internal-25ff1fbb.js");
const waitingListMapper = (user) => ({
  id: user.id,
  fullName: (0, import_internal_25ff1fbb.w)(user.full_name, ""),
  email: user.email,
  invitedAt: user.invited_at,
  isInvited: user.invited_at ? true : false
});
const waitingListsMapper = (users) => users.map((u) => waitingListMapper(u));
const addToWaitingList = async ({ email, fullName }) => {
  const { error } = await import_db_4cfea39e.s.from("waiting_list").insert({ email, full_name: fullName }, { returning: "minimal" });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      message: `You've been successfully added to the waiting list.`
    });
  }
  return (0, import_internal_25ff1fbb.s)({
    message: `You've been successfully added to the waiting list.`
  });
};
const getWaitingList = async ({ accessToken }) => {
  const { data, error } = await (0, import_auth_helpers_sveltekit.supabaseServerClient)(accessToken).from("waiting_list").select("*").order("created_at", { ascending: false });
  if (!error) {
    return (0, import_internal_25ff1fbb.s)({
      data: waitingListsMapper(data),
      message: "Waiting list retrieved successfully."
    });
  }
  return (0, import_internal_25ff1fbb.e)({
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
    return (0, import_internal_25ff1fbb.s)({
      data: await res.json()
    });
  }
  return (0, import_internal_25ff1fbb.e)({
    message: "Something went wrong!!!",
    statusCode: 400
  });
};

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
  L: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("./index-0b98f2d1.js");
var import_stores_b0ac2b05 = require("./stores-b0ac2b05.js");
const Layout = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.s, (value) => $session = value);
  $$unsubscribe_session();
  return `<div class="${"menu-label px-4 py-4 has-background-dark has-text-white is-size-6"}">${slots["page-title"] ? slots["page-title"]({}) : `Dashboard`}</div>
<p class="${"px-6 py-1 is-size-5 has-text-weight-medium"}">Welcome back ${$session.user ? `${(0, import_index_0b98f2d1.e)((_a = $session == null ? void 0 : $session.user) == null ? void 0 : _a.fullName)}` : ``}</p>
<div class="${"p-6"}">${slots.default ? slots.default({}) : ``}</div>`;
});

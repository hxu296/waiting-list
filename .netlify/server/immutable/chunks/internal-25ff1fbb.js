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
  e: () => errorMapper,
  s: () => successMapper,
  w: () => withDefault
});
module.exports = __toCommonJS(stdin_exports);
const withDefault = (prop, original = null) => prop ? prop : original;
const responseMapper = (event) => ({
  status: event.status,
  message: event.message,
  statusCode: event.code
});
const successMapper = (event) => ({
  ...responseMapper({
    status: "success",
    message: event.message,
    code: withDefault(event.code, 200)
  }),
  data: withDefault(event.data, [])
});
const errorMapper = (event) => ({
  error: withDefault(event.error, {}),
  ...responseMapper({
    status: "failed",
    message: event.message,
    code: withDefault(event.code, 400)
  })
});

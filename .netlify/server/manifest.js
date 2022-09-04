var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "css/bulma.min.css", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "favicon.png", "img/1280x960.png", "img/WaitingList_Icon.png", "img/WaitingList_Logo.svg", "img/WaitingList_Placeholder.png", "site.webmanifest"]),
  mimeTypes: { ".png": "image/png", ".css": "text/css", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" },
  _: {
    entry: { "file": "immutable/start-14d42edc.js", "imports": ["immutable/start-14d42edc.js", "immutable/chunks/index-57f72b05.js", "immutable/chunks/index-1c949c0b.js", "immutable/chunks/preload-helper-4c397a37.js", "immutable/chunks/singletons-cdeec3fd.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "account",
        pattern: /^\/account\/?$/,
        names: [],
        types: [],
        path: "/account",
        shadow: null,
        a: [0, 3, 4],
        b: [1]
      },
      {
        type: "page",
        id: "auth",
        pattern: /^\/auth\/?$/,
        names: [],
        types: [],
        path: "/auth",
        shadow: null,
        a: [0, 5, 6],
        b: [1]
      },
      {
        type: "page",
        id: "logging-in",
        pattern: /^\/logging-in\/?$/,
        names: [],
        types: [],
        path: "/logging-in",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "manage",
        pattern: /^\/manage\/?$/,
        names: [],
        types: [],
        path: "/manage",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/manage/index.js"))),
        a: [0, 8, 9],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/invite.json",
        pattern: /^\/api\/invite\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/invite.json.js")))
      },
      {
        type: "endpoint",
        id: "api/admin.json",
        pattern: /^\/api\/admin\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/admin.json.js")))
      },
      {
        type: "page",
        id: "account/password-update",
        pattern: /^\/account\/password-update\/?$/,
        names: [],
        types: [],
        path: "/account/password-update",
        shadow: null,
        a: [0, 3, 10],
        b: [1]
      },
      {
        type: "page",
        id: "auth/forgotpassword",
        pattern: /^\/auth\/forgotpassword\/?$/,
        names: [],
        types: [],
        path: "/auth/forgotpassword",
        shadow: null,
        a: [0, 5, 11],
        b: [1]
      },
      {
        type: "page",
        id: "auth/resetpassword",
        pattern: /^\/auth\/resetpassword\/?$/,
        names: [],
        types: [],
        path: "/auth/resetpassword",
        shadow: null,
        a: [0, 5, 12],
        b: [1]
      },
      {
        type: "page",
        id: "auth/signin",
        pattern: /^\/auth\/signin\/?$/,
        names: [],
        types: [],
        path: "/auth/signin",
        shadow: null,
        a: [0, 5, 13],
        b: [1]
      },
      {
        type: "page",
        id: "auth/signup",
        pattern: /^\/auth\/signup\/?$/,
        names: [],
        types: [],
        path: "/auth/signup",
        shadow: null,
        a: [0, 5, 14],
        b: [1]
      },
      {
        type: "page",
        id: "manage/users",
        pattern: /^\/manage\/users\/?$/,
        names: [],
        types: [],
        path: "/manage/users",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/manage/users.js"))),
        a: [0, 8, 15],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

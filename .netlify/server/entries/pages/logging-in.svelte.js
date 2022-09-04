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
  default: () => Logging_in
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0b98f2d1 = require("../../immutable/chunks/index-0b98f2d1.js");
var import_stores_b0ac2b05 = require("../../immutable/chunks/stores-b0ac2b05.js");
const FullScreenLoader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fullscreen-loader.svelte-18k8zxf{position:fixed;bottom:0;top:0;left:0;right:0;z-index:50;background-color:#3ecf8e;display:grid;place-items:center}.loader.svelte-18k8zxf{position:relative;width:4rem;height:4rem}.loader.svelte-18k8zxf::before,.loader.svelte-18k8zxf::after{content:'';position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;transform:translate(-50%, -50%) scale(0)}.loader.svelte-18k8zxf::before{background:#fff;animation:svelte-18k8zxf-pulse2 2s ease-in-out infinite}.loader.svelte-18k8zxf::after{background:#fff;animation:svelte-18k8zxf-pulse2 2s 1s ease-in-out infinite}@-webkit-keyframes svelte-18k8zxf-pulse2{0%,100%{transform:translate(-50%, -50%) scale(0);opacity:1}50%{transform:translate(-50%, -50%) scale(1);opacity:0}}@keyframes svelte-18k8zxf-pulse2{0%,100%{transform:translate(-50%, -50%) scale(0);opacity:1}50%{transform:translate(-50%, -50%) scale(1);opacity:0}}",
  map: null
};
const FullScreenLoader = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fullscreen-loader svelte-18k8zxf"}"><div class="${"loader svelte-18k8zxf"}"></div>
</div>`;
});
const Logging_in = (0, import_index_0b98f2d1.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_0b98f2d1.a)(import_stores_b0ac2b05.p, (value) => $page = value);
  {
    {
      $page.url.searchParams.get("redirect");
    }
  }
  $$unsubscribe_page();
  return `${(0, import_index_0b98f2d1.v)(FullScreenLoader, "FullScreenLoader").$$render($$result, {}, {}, {})}`;
});

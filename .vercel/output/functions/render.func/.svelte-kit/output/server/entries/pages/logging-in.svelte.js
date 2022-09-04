import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../immutable/chunks/index-0b98f2d1.js";
import { p as page } from "../../immutable/chunks/stores-b0ac2b05.js";
const FullScreenLoader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fullscreen-loader.svelte-18k8zxf{position:fixed;bottom:0;top:0;left:0;right:0;z-index:50;background-color:#3ecf8e;display:grid;place-items:center}.loader.svelte-18k8zxf{position:relative;width:4rem;height:4rem}.loader.svelte-18k8zxf::before,.loader.svelte-18k8zxf::after{content:'';position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;transform:translate(-50%, -50%) scale(0)}.loader.svelte-18k8zxf::before{background:#fff;animation:svelte-18k8zxf-pulse2 2s ease-in-out infinite}.loader.svelte-18k8zxf::after{background:#fff;animation:svelte-18k8zxf-pulse2 2s 1s ease-in-out infinite}@-webkit-keyframes svelte-18k8zxf-pulse2{0%,100%{transform:translate(-50%, -50%) scale(0);opacity:1}50%{transform:translate(-50%, -50%) scale(1);opacity:0}}@keyframes svelte-18k8zxf-pulse2{0%,100%{transform:translate(-50%, -50%) scale(0);opacity:1}50%{transform:translate(-50%, -50%) scale(1);opacity:0}}",
  map: null
};
const FullScreenLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"fullscreen-loader svelte-18k8zxf"}"><div class="${"loader svelte-18k8zxf"}"></div>
</div>`;
});
const Logging_in = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      $page.url.searchParams.get("redirect");
    }
  }
  $$unsubscribe_page();
  return `${validate_component(FullScreenLoader, "FullScreenLoader").$$render($$result, {}, {}, {})}`;
});
export {
  Logging_in as default
};

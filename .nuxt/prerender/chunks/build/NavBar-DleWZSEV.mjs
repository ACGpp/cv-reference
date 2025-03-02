import { _ as __nuxt_component_0 } from './nuxt-link-yh-mS4-T.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white py-3 mb-6 shadow-md" }, _attrs))}><div class="container mx-auto px-4 flex flex-wrap items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-bold hover:text-gray-300 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8BA1\u7B97\u673A\u89C6\u89C9\u8D44\u6E90\u53C2\u8003 `);
          } else {
            return [
              createTextVNode(" \u8BA1\u7B97\u673A\u89C6\u89C9\u8D44\u6E90\u53C2\u8003 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex space-x-4 mt-2 md:mt-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "px-3 py-2 rounded hover:bg-gray-700 transition-colors",
        "active-class": "bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9996\u9875 `);
          } else {
            return [
              createTextVNode(" \u9996\u9875 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/labs",
        class: "px-3 py-2 rounded hover:bg-gray-700 transition-colors",
        "active-class": "bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5B9E\u9A8C\u5BA4 `);
          } else {
            return [
              createTextVNode(" \u5B9E\u9A8C\u5BA4 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/professors",
        class: "px-3 py-2 rounded hover:bg-gray-700 transition-colors",
        "active-class": "bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6559\u6388 `);
          } else {
            return [
              createTextVNode(" \u6559\u6388 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "px-3 py-2 rounded hover:bg-gray-700 transition-colors",
        "active-class": "bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8BFE\u7A0B `);
          } else {
            return [
              createTextVNode(" \u8BFE\u7A0B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/journals",
        class: "px-3 py-2 rounded hover:bg-gray-700 transition-colors",
        "active-class": "bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u671F\u520A\u4F1A\u8BAE `);
          } else {
            return [
              createTextVNode(" \u671F\u520A\u4F1A\u8BAE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=NavBar-DleWZSEV.mjs.map

import { _ as __nuxt_component_0 } from "./nuxt-link-yh-mS4-T.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
            _push2(` 计算机视觉资源参考 `);
          } else {
            return [
              createTextVNode(" 计算机视觉资源参考 ")
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
            _push2(` 首页 `);
          } else {
            return [
              createTextVNode(" 首页 ")
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
            _push2(` 实验室 `);
          } else {
            return [
              createTextVNode(" 实验室 ")
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
            _push2(` 教授 `);
          } else {
            return [
              createTextVNode(" 教授 ")
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
            _push2(` 课程 `);
          } else {
            return [
              createTextVNode(" 课程 ")
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
            _push2(` 期刊会议 `);
          } else {
            return [
              createTextVNode(" 期刊会议 ")
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
export {
  _sfc_main as _
};
//# sourceMappingURL=NavBar-DleWZSEV.js.map

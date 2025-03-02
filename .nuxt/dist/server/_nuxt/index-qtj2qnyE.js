import { _ as _sfc_main$1 } from "./NavBar-DleWZSEV.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-yh-mS4-T.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./index-BabADJUJ.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "@vue/devtools-api";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "计算机视觉资源参考",
      meta: [
        { name: "description", content: "全球最优秀的计算机视觉实验室、讲义、课程信息集合" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><header class="mb-10 text-center"><h1 class="text-4xl font-bold mb-4">计算机视觉资源参考</h1><p class="text-xl text-gray-600">全球最优秀的计算机视觉实验室、讲义、课程信息集合</p></header><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h2 class="text-2xl font-bold mb-4 text-blue-700">实验室主页</h2><p class="mb-4 text-gray-700">收集全球顶尖计算机视觉实验室信息，包括研究方向和代表性成果。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/labs",
        class: "inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 浏览实验室 `);
          } else {
            return [
              createTextVNode(" 浏览实验室 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h2 class="text-2xl font-bold mb-4 text-green-700">教授主页</h2><p class="mb-4 text-gray-700">了解计算机视觉领域知名教授的研究方向、成果和指导风格。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/professors",
        class: "inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 浏览教授 `);
          } else {
            return [
              createTextVNode(" 浏览教授 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h2 class="text-2xl font-bold mb-4 text-purple-700">课程资料</h2><p class="mb-4 text-gray-700">收集国内外高校开设的计算机视觉相关课程信息和学习资源。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 浏览课程 `);
          } else {
            return [
              createTextVNode(" 浏览课程 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h2 class="text-2xl font-bold mb-4 text-red-700">期刊会议</h2><p class="mb-4 text-gray-700">了解计算机视觉领域重要期刊会议的投稿要求和重要日期。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/journals",
        class: "inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 浏览期刊 `);
          } else {
            return [
              createTextVNode(" 浏览期刊 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-2xl font-bold mb-4">如何贡献</h2><p class="mb-4">我们欢迎所有人为这个资源库做出贡献，帮助它变得更加全面和有用。</p><ol class="list-decimal pl-6 mb-4"><li class="mb-2">Fork 本仓库</li><li class="mb-2">在对应的 markdown 文件中添加内容</li><li class="mb-2">提交 Pull Request</li></ol><a href="https://github.com/sanbuphy/computer-vision-reference" target="_blank" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition-colors"> 访问 GitHub 仓库 </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-qtj2qnyE.js.map

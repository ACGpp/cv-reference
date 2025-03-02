import { u as useRuntimeConfig, a as useContent, b as useRequestEvent, c as __nuxt_component_0 } from './server.mjs';
import _sfc_main$1 from './ContentRenderer-C55_Rq47.mjs';
import _sfc_main$2 from './DocumentDrivenEmpty-CVfz7tly.mjs';
import _sfc_main$3 from './DocumentDrivenNotFound-4pTrsASA.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, useSSRContext } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/server-renderer/index.mjs';
import { u as useContentHead } from './head-cSA-6xrN.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unified/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/remark-parse/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/remark-rehype/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/remark-gfm/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/rehype-raw/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/detab/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/github-slugger/index.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unenv/runtime/fetch/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/15270/Desktop/cv-reference/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue-devtools-stub/dist/index.mjs';
import './ContentRendererMarkdown-CMB2ikF4.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/property-information/index.js';
import './node-hwMnPqaI.mjs';
import './index-BabADJUJ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "document-driven",
  __ssrInlineRender: true,
  setup(__props) {
    const { contentHead } = useRuntimeConfig().public.content;
    const { page, layout } = useContent();
    if (!page.value && true) {
      const event = useRequestEvent();
      if (event) {
        event.node.res.statusCode = 404;
      }
    }
    if (contentHead) {
      useContentHead(page);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      const _component_DocumentDrivenEmpty = _sfc_main$2;
      const _component_DocumentDrivenNotFound = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: unref(layout) || "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(page)) {
              _push2(ssrRenderComponent(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DocumentDrivenEmpty, { value }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_DocumentDrivenNotFound, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(page) ? (openBlock(), createBlock(_component_ContentRenderer, {
                key: unref(page)._id,
                value: unref(page)
              }, {
                empty: withCtx(({ value }) => [
                  createVNode(_component_DocumentDrivenEmpty, { value }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["value"])) : (openBlock(), createBlock(_component_DocumentDrivenNotFound, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=document-driven-Cl0wu-iJ.mjs.map

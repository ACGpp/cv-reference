import { defineComponent, useSlots, h, useSSRContext } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/index.mjs';
import { u as useRuntimeConfig, w as withTrailingSlash, d as useRoute } from './server.mjs';
import _sfc_main$2 from './ContentRenderer-C55_Rq47.mjs';
import _sfc_main$1 from './ContentQuery-CwYhLP5R.mjs';
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
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/server-renderer/index.mjs';
import './ContentRendererMarkdown-CMB2ikF4.mjs';
import 'file://C:/Users/15270/Desktop/cv-reference/node_modules/property-information/index.js';
import './node-hwMnPqaI.mjs';
import './asyncData-eQ_Vg_lh.mjs';
import './index-BabADJUJ.mjs';

const ContentDoc = defineComponent({
  name: "ContentDoc",
  props: {
    /**
     * Renderer props
     */
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default useRoute().path
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Whether or not to map the document data to the `head` property.
     */
    head: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  /**
   * Document empty fallback
   * @slot empty
   */
  /**
   * Document not found fallback
   * @slot not-found
   */
  render(ctx) {
    const { contentHead } = useRuntimeConfig().public.content;
    const slots = useSlots();
    const { tag, excerpt, path, query, head } = ctx;
    const shouldInjectContentHead = head === void 0 ? contentHead : head;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || withTrailingSlash(useRoute().path),
      find: "one"
    };
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    return h(
      _sfc_main$1,
      contentQueryProps,
      {
        // Default slot
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
          var _a;
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return (_a = slots.default) == null ? void 0 : _a.call(slots, { doc: data, refresh, isPartial, excerpt, ...this.$attrs });
        } : ({ data }) => {
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return h(
            _sfc_main$2,
            { value: data, excerpt, tag, ...this.$attrs },
            // Forward local `empty` slots to ContentRenderer if it is used.
            { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) }
          );
        },
        // Empty slot
        empty: (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
        },
        // Not Found slot
        "not-found": (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
        }
      }
    );
  }
});
const _sfc_main = ContentDoc;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentDoc-CT4qpy7i.mjs.map

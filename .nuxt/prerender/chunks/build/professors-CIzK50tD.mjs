import { _ as _sfc_main$1 } from './NavBar-DleWZSEV.mjs';
import { ref, computed, useSSRContext } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file://C:/Users/15270/Desktop/cv-reference/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import './nuxt-link-yh-mS4-T.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "professors",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u8BA1\u7B97\u673A\u89C6\u89C9\u9886\u57DF\u6559\u6388\u4FE1\u606F - Computer Vision Reference",
      meta: [
        { name: "description", content: "\u8BA1\u7B97\u673A\u89C6\u89C9\u9886\u57DF\u77E5\u540D\u6559\u6388\u7684\u7814\u7A76\u65B9\u5411\u3001\u6210\u679C\u548C\u6307\u5BFC\u98CE\u683C" }
      ]
    });
    const tabs = [
      { id: "all", name: "\u5168\u90E8\u6559\u6388" },
      { id: "north-america", name: "\u5317\u7F8E\u5730\u533A" },
      { id: "europe", name: "\u6B27\u6D32\u5730\u533A" },
      { id: "asia", name: "\u4E9A\u6D32\u5730\u533A" },
      { id: "rising-stars", name: "\u65B0\u9510\u5B66\u8005" }
    ];
    const activeTab = ref("all");
    const searchQuery = ref("");
    const selectedInstitution = ref("");
    const professors = ref([
      {
        name: "Luc Van Gool",
        institution: "\u82CF\u9ECE\u4E16\u8054\u90A6\u7406\u5DE5\u5B66\u9662/\u9C81\u6C76\u5927\u5B66",
        researchAreas: "\u4E09\u7EF4\u91CD\u5EFA\u3001\u81EA\u52A8\u9A7E\u9A76",
        achievements: "COLMAP\u4E09\u7EF4\u91CD\u5EFA\u7CFB\u7EDF\uFF0C\u83B72019\u5E74CVPR\u6700\u4F73\u8BBA\u6587\u5956",
        mentorStyle: "\u5F3A\u8C03\u5DE5\u4E1A\u754C\u5408\u4F5C\uFF0C\u6BCF\u5468\u7EC4\u7EC7\u8DE8\u6821\u5B66\u672F\u6C99\u9F99",
        homepage: "https://vision.ee.ethz.ch/people-details.OTAyMzM=.TGlzdC8zMDQ4LC0xOTcxNDY1MTc4.html",
        googleScholar: "https://scholar.google.com/citations?user=TwMib_QAAAAJ",
        region: "europe"
      },
      {
        name: "Abe Davis",
        institution: "\u5EB7\u5948\u5C14\u5927\u5B66",
        researchAreas: "\u8BA1\u7B97\u6210\u50CF\u3001\u589E\u5F3A\u73B0\u5B9E",
        achievements: "\u89C6\u89C9\u632F\u52A8\u5206\u6790\u6280\u672F\uFF0C\u83B7SIGGRAPH 2023\u6700\u4F73\u6280\u672F\u5956",
        mentorStyle: "\u9F13\u52B1\u5B66\u751F\u5F00\u53D1\u5F00\u6E90\u5DE5\u5177\uFF0C\u63D0\u4F9B\u786C\u4EF6\u5B9E\u9A8C\u5BA4\u652F\u6301",
        homepage: "https://www.abedavis.com/",
        googleScholar: "https://scholar.google.com/citations?user=dQoGEWQAAAAJ",
        region: "north-america"
      },
      {
        name: "\u7530\u5947",
        institution: "\u534E\u4E3A\u8BFA\u4E9A\u65B9\u821F\u5B9E\u9A8C\u5BA4",
        researchAreas: "\u8BED\u4E49\u7406\u89E3\u3001\u591A\u6A21\u6001\u878D\u5408",
        achievements: "HRNet\u9AD8\u5206\u8FA8\u7387\u7F51\u7EDC\u67B6\u6784\uFF0C\u4E3B\u5BFCSPTAG\u5341\u4EBF\u7EA7\u68C0\u7D22\u7CFB\u7EDF",
        mentorStyle: "\u4EA7\u5B66\u7814\u6DF1\u5EA6\u7ED3\u5408\uFF0C\u63D0\u4F9B\u534E\u4E3A\u4E91\u7B97\u529B\u8D44\u6E90",
        homepage: "https://www.noahlab.com.hk/",
        googleScholar: "https://scholar.google.com/",
        region: "asia"
      },
      {
        name: "Bill Freeman",
        institution: "MIT CSAIL",
        researchAreas: "\u8BA1\u7B97\u6444\u5F71\u3001\u795E\u7ECF\u6E32\u67D3",
        achievements: "\u63D0\u51FAHDR\u91CD\u5EFA\u7B97\u6CD5\uFF0C\u5F00\u53D1MIT-IBM\u8054\u5408\u533B\u7597\u5F71\u50CF\u5E73\u53F0",
        mentorStyle: '\u63A8\u5D07"\u7406\u8BBA-\u4EE3\u7801-\u8BBA\u6587"\u4E09\u4F4D\u4E00\u4F53\u57F9\u517B\u6A21\u5F0F',
        homepage: "http://people.csail.mit.edu/billf/",
        googleScholar: "https://scholar.google.com/citations?user=X-HGBHMAAAAJ",
        region: "north-america"
      },
      {
        name: "\u7A0B\u660E\u663E",
        institution: "\u5357\u5F00\u5927\u5B66",
        researchAreas: "\u663E\u8457\u6027\u68C0\u6D4B",
        achievements: "U\xB2-Net++\u67B6\u6784\uFF0CGitHub\u661F\u6807\u8D8515k",
        mentorStyle: "\u63D0\u4F9BDocker\u5BB9\u5668\u5316\u5B9E\u9A8C\u73AF\u5883",
        homepage: "https://mmcheng.net/",
        googleScholar: "https://scholar.google.com/citations?user=huWpVyEAAAAJ",
        region: "rising-stars"
      }
    ]);
    const filteredProfessors = computed(() => {
      return professors.value.filter((professor) => {
        const matchesSearch = searchQuery.value === "" || professor.name && professor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || professor.institution.toLowerCase().includes(searchQuery.value.toLowerCase()) || professor.researchAreas && professor.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesInstitution = selectedInstitution.value === "" || professor.institution.toLowerCase().includes(selectedInstitution.value.toLowerCase());
        const matchesTab = activeTab.value === "all" || professor.region === activeTab.value;
        return matchesSearch && matchesInstitution && matchesTab;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><header class="mb-10"><h1 class="text-3xl font-bold mb-4">\u8BA1\u7B97\u673A\u89C6\u89C9\u9886\u57DF\u6559\u6388\u4FE1\u606F</h1><p class="text-gray-600">\u6536\u96C6\u8BA1\u7B97\u673A\u89C6\u89C9\u9886\u57DF\u77E5\u540D\u6559\u6388\u7684\u4FE1\u606F\uFF0C\u5E2E\u52A9\u7814\u7A76\u4EBA\u5458\u4E86\u89E3\u5404\u4F4D\u6559\u6388\u7684\u7814\u7A76\u65B9\u5411\u3001\u6210\u679C\u548C\u6307\u5BFC\u98CE\u683C\u3002</p></header><div class="mb-8 bg-white p-4 rounded-lg shadow"><div class="flex flex-col md:flex-row gap-4"><div class="flex-1"><label for="search" class="block text-sm font-medium text-gray-700 mb-1">\u641C\u7D22\u6559\u6388</label><input type="text" id="search"${ssrRenderAttr("value", searchQuery.value)} placeholder="\u8F93\u5165\u6559\u6388\u59D3\u540D\u3001\u6240\u5C5E\u673A\u6784\u6216\u7814\u7A76\u65B9\u5411" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div class="md:w-1/4"><label for="institution" class="block text-sm font-medium text-gray-700 mb-1">\u673A\u6784\u7B5B\u9009</label><select id="institution" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "") : ssrLooseEqual(selectedInstitution.value, "")) ? " selected" : ""}>\u5168\u90E8\u673A\u6784</option><option value="mit"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "mit") : ssrLooseEqual(selectedInstitution.value, "mit")) ? " selected" : ""}>MIT</option><option value="cmu"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "cmu") : ssrLooseEqual(selectedInstitution.value, "cmu")) ? " selected" : ""}>CMU</option><option value="stanford"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "stanford") : ssrLooseEqual(selectedInstitution.value, "stanford")) ? " selected" : ""}>Stanford</option><option value="tsinghua"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "tsinghua") : ssrLooseEqual(selectedInstitution.value, "tsinghua")) ? " selected" : ""}>\u6E05\u534E\u5927\u5B66</option><option value="pku"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "pku") : ssrLooseEqual(selectedInstitution.value, "pku")) ? " selected" : ""}>\u5317\u4EAC\u5927\u5B66</option></select></div></div></div><div class="mb-8"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          `px-4 py-2 rounded-md font-medium`,
          activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        ])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="mb-10"><h2 class="text-2xl font-bold mb-4">\u6559\u6388\u5217\u8868</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(filteredProfessors.value, (professor, index) => {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">${ssrInterpolate(professor.name || "\u6682\u65E0\u6570\u636E")}</h3><p class="text-gray-600 mb-2">${ssrInterpolate(professor.institution)}</p><div class="mb-3"><h4 class="font-semibold text-gray-700">\u7814\u7A76\u65B9\u5411\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(professor.researchAreas || "\u6682\u65E0\u6570\u636E")}</p></div><div class="mb-3"><h4 class="font-semibold text-gray-700">\u4EE3\u8868\u6210\u679C\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(professor.achievements || "\u6682\u65E0\u6570\u636E")}</p></div><div class="mb-4"><h4 class="font-semibold text-gray-700">\u6307\u5BFC\u98CE\u683C\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(professor.mentorStyle || "\u6682\u65E0\u6570\u636E")}</p></div><div class="flex space-x-2">`);
        if (professor.homepage) {
          _push(`<a${ssrRenderAttr("href", professor.homepage)} target="_blank" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"> \u8BBF\u95EE\u4E3B\u9875 </a>`);
        } else {
          _push(`<span class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">\u6682\u65E0\u4E3B\u9875</span>`);
        }
        if (professor.googleScholar) {
          _push(`<a${ssrRenderAttr("href", professor.googleScholar)} target="_blank" class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"> Google Scholar </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-xl font-bold mb-2">\u8D21\u732E\u4FE1\u606F</h2><p>\u5982\u679C\u60A8\u6709\u66F4\u591A\u6559\u6388\u4FE1\u606F\u60F3\u8981\u6DFB\u52A0\uFF0C\u8BF7\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ol class="list-decimal pl-6 mt-2"><li class="mb-1">Fork \u672C\u4ED3\u5E93</li><li class="mb-1">\u5728 resources/professors.md \u6587\u4EF6\u4E2D\u6DFB\u52A0\u5185\u5BB9</li><li class="mb-1">\u63D0\u4EA4 Pull Request</li></ol></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/professors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=professors-CIzK50tD.mjs.map

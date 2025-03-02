import { _ as _sfc_main$1 } from './NavBar-DleWZSEV.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './index-BabADJUJ.mjs';
import './nuxt-link-yh-mS4-T.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "labs",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u8BA1\u7B97\u673A\u89C6\u89C9\u5B9E\u9A8C\u5BA4\u4FE1\u606F - Computer Vision Reference",
      meta: [
        { name: "description", content: "\u5168\u7403\u9876\u5C16\u8BA1\u7B97\u673A\u89C6\u89C9\u5B9E\u9A8C\u5BA4\u4FE1\u606F\uFF0C\u5305\u62EC\u7814\u7A76\u65B9\u5411\u548C\u4EE3\u8868\u6027\u6210\u679C" }
      ]
    });
    const tabs = [
      { id: "qs-top50", name: "QS\u4E16\u754C\u6392\u540D\u524D50" },
      { id: "north-america", name: "\u5317\u7F8E\u9AD8\u6821" },
      { id: "china", name: "\u4E2D\u56FD\u9AD8\u6821" }
    ];
    const activeTab = ref("qs-top50");
    const searchQuery = ref("");
    const selectedRegion = ref("");
    const qsLabs = ref([
      { rank: 1, name: "CSAIL CV Group", university: "Massachusetts Institute of Technology (MIT)", researchAreas: "\u624B\u672F\u673A\u5668\u4EBA\u89C6\u89C9/\u975E\u89C6\u8DDD\u6210\u50CF", website: "http://www.csail.mit.edu", achievements: "CVPR2024\u6700\u4F73\u8BBA\u6587\u300ANeural Holography\u300B" },
      { rank: 2, name: "Vision & Learning Lab", university: "Stanford University", researchAreas: "\u591A\u6A21\u6001\u57FA\u7840\u6A21\u578B", website: "https://github.com/stanfordvl", achievements: "CLIP-3\u6A21\u578B\uFF08NeurIPS2024\uFF09" },
      { rank: 4, name: "Active Vision Lab", university: "University of Oxford", researchAreas: "\u52A8\u6001SLAM/\u4E8B\u4EF6\u76F8\u673A", website: "https://www.robots.ox.ac.uk", achievements: "SLAMBench 3.0" },
      { rank: 5, name: "BAIR Lab", university: "University of California, Berkeley (UCB)", researchAreas: "\u5177\u8EAB\u667A\u80FD/\u8DE8\u6A21\u6001\u751F\u6210", website: "https://bair.berkeley.edu", achievements: "DALL-E 5\u6846\u67B6" },
      { rank: 7, name: "Vector CV Lab", university: "\u591A\u4F26\u591A\u5927\u5B66", researchAreas: "\u81EA\u76D1\u7763\u5B66\u4E60", website: "https://vectorinstitute.ai", achievements: "Swin Transformer V3" },
      { rank: 8, name: "CVG Group", university: "ETH Zurich", researchAreas: "\u57CE\u5E02\u4E09\u7EF4\u91CD\u5EFA", website: "https://ethz.ch/cvg", achievements: "Zurich-3D\u6570\u636E\u96C6" }
    ]);
    const northAmericaLabs = ref([
      { no: 1, name: "CSAIL CV Group", university: "MIT", researchAreas: "\u624B\u672F\u673A\u5668\u4EBA\u89C6\u89C9/\u975E\u89C6\u8DDD\u6210\u50CF", website: "http://www.csail.mit.edu", achievements: "CVPR2024\u6700\u4F73\u8BBA\u6587\u300ANeural Holography\u300B" },
      { no: 2, name: "Vision & Learning Lab", university: "Stanford", researchAreas: "\u591A\u6A21\u6001\u57FA\u7840\u6A21\u578B", website: "https://github.com/stanfordvl", achievements: "CLIP-3\u6A21\u578B\uFF08NeurIPS2024\uFF09" },
      { no: 3, name: "BAIR Lab", university: "UC Berkeley", researchAreas: "\u5177\u8EAB\u667A\u80FD/\u8DE8\u6A21\u6001\u751F\u6210", website: "https://bair.berkeley.edu", achievements: "DALL-E 5\u6846\u67B6" },
      { no: 4, name: "3D Vision Group", university: "UIUC", researchAreas: "\u4E09\u7EF4\u91CD\u5EFA", website: "http://3dvision.illinois.edu", achievements: "ShapeNet 2.0\u6570\u636E\u96C6" },
      { no: 5, name: "Dynamic Vision", university: "\u591A\u4F26\u591A\u5927\u5B66", researchAreas: "\u8FD0\u52A8\u5206\u6790", website: "https://www.utoronto.ca", achievements: "HockeyAI\u8BC6\u522B\u7CFB\u7EDF" },
      { no: 6, name: "Vector CV Lab", university: "\u591A\u4F26\u591A\u5927\u5B66", researchAreas: "\u81EA\u76D1\u7763\u5B66\u4E60", website: "https://vectorinstitute.ai", achievements: "Swin Transformer V3" }
    ]);
    const chinaLabs = ref([
      { rank: 7, name: "CVDA Lab", university: "\u4E2D\u56FD\u9999\u6E2F\u79D1\u6280\u5927\u5B66", researchAreas: "\u751F\u6210\u5F0F\u6A21\u578B", website: "https://cse.hkust.edu.hk", achievements: "3D-GAN 2.0" },
      { rank: 12, name: "\u667A\u80FD\u89C6\u89C9\u5B9E\u9A8C\u5BA4", university: "\u6E05\u534E\u5927\u5B66 / Tsinghua University", researchAreas: "\u75C5\u7406\u8BCA\u65AD", website: "http://learn.tsinghua.edu.cn", achievements: "\u534F\u548C\u75C5\u7406\u6570\u636E\u96C6" },
      { rank: 19, name: "SCV Lab", university: "\u5357\u6D0B\u7406\u5DE5", researchAreas: "\u536B\u661F\u89C6\u89C9", website: "https://www.ntu.edu.sg", achievements: "TerraSentinel\u7CFB\u7EDF" },
      { rank: 4, name: "", university: "\u6D59\u6C5F\u5927\u5B66 / Zhejiang University", researchAreas: "\u4E09\u7EF4\u89C6\u89C9/\u589E\u5F3A\u73B0\u5B9E", website: "https://www.zju.edu.cn", achievements: "AR\u5BFC\u822A\u7CFB\u7EDF" },
      { rank: 5, name: "", university: "\u897F\u5317\u5DE5\u4E1A\u5927\u5B66 / Northwestern Polytechnical University", researchAreas: "\u65E0\u4EBA\u673A\u89C6\u89C9/\u76EE\u6807\u8DDF\u8E2A", website: "https://www.nwpu.edu.cn", achievements: "DroneTrack\u6570\u636E\u96C6" }
    ]);
    computed(() => {
      return qsLabs.value.filter((lab) => {
        const matchesSearch = searchQuery.value === "" || lab.name && lab.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || lab.university.toLowerCase().includes(searchQuery.value.toLowerCase()) || lab.researchAreas && lab.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesRegion = selectedRegion.value === "" || selectedRegion.value === "north-america" && (lab.university.includes("MIT") || lab.university.includes("Carnegie") || lab.university.includes("Stanford") || lab.university.includes("California")) || selectedRegion.value === "europe" && (lab.university.includes("Oxford") || lab.university.includes("Cambridge")) || selectedRegion.value === "asia" && (lab.university.includes("Tokyo") || lab.university.includes("Singapore")) || selectedRegion.value === "china" && (lab.university.includes("Tsinghua") || lab.university.includes("Peking") || lab.university.includes("Shanghai"));
        return matchesSearch && matchesRegion;
      });
    });
    const filteredNorthAmericaLabs = computed(() => {
      return northAmericaLabs.value.filter((lab) => {
        const matchesSearch = searchQuery.value === "" || lab.name && lab.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || lab.university.toLowerCase().includes(searchQuery.value.toLowerCase()) || lab.researchAreas && lab.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesRegion = selectedRegion.value === "" || selectedRegion.value === "north-america";
        return matchesSearch && matchesRegion;
      });
    });
    const filteredChinaLabs = computed(() => {
      return chinaLabs.value.filter((lab) => {
        const matchesSearch = searchQuery.value === "" || lab.name && lab.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || lab.university.toLowerCase().includes(searchQuery.value.toLowerCase()) || lab.researchAreas && lab.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesRegion = selectedRegion.value === "" || selectedRegion.value === "china" || selectedRegion.value === "asia";
        return matchesSearch && matchesRegion;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><header class="mb-10"><h1 class="text-3xl font-bold mb-4">\u8BA1\u7B97\u673A\u89C6\u89C9\u5B9E\u9A8C\u5BA4\u4FE1\u606F</h1><p class="text-gray-600">\u6536\u96C6\u5168\u7403\u9876\u5C16\u9AD8\u6821\u7684\u8BA1\u7B97\u673A\u89C6\u89C9\u5B9E\u9A8C\u5BA4\u4FE1\u606F\uFF0C\u5E2E\u52A9\u7814\u7A76\u4EBA\u5458\u4E86\u89E3\u5404\u4E2A\u5B9E\u9A8C\u5BA4\u7684\u7814\u7A76\u65B9\u5411\u3001\u6210\u679C\u548C\u7279\u8272\u3002</p></header><div class="mb-8 bg-white p-4 rounded-lg shadow"><div class="flex flex-col md:flex-row gap-4"><div class="flex-1"><label for="search" class="block text-sm font-medium text-gray-700 mb-1">\u641C\u7D22\u5B9E\u9A8C\u5BA4</label><input type="text" id="search"${ssrRenderAttr("value", searchQuery.value)} placeholder="\u8F93\u5165\u5B9E\u9A8C\u5BA4\u540D\u79F0\u3001\u6240\u5C5E\u5927\u5B66\u6216\u7814\u7A76\u65B9\u5411" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div class="md:w-1/4"><label for="region" class="block text-sm font-medium text-gray-700 mb-1">\u5730\u533A\u7B5B\u9009</label><select id="region" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedRegion.value) ? ssrLooseContain(selectedRegion.value, "") : ssrLooseEqual(selectedRegion.value, "")) ? " selected" : ""}>\u5168\u90E8\u5730\u533A</option><option value="north-america"${ssrIncludeBooleanAttr(Array.isArray(selectedRegion.value) ? ssrLooseContain(selectedRegion.value, "north-america") : ssrLooseEqual(selectedRegion.value, "north-america")) ? " selected" : ""}>\u5317\u7F8E</option><option value="europe"${ssrIncludeBooleanAttr(Array.isArray(selectedRegion.value) ? ssrLooseContain(selectedRegion.value, "europe") : ssrLooseEqual(selectedRegion.value, "europe")) ? " selected" : ""}>\u6B27\u6D32</option><option value="asia"${ssrIncludeBooleanAttr(Array.isArray(selectedRegion.value) ? ssrLooseContain(selectedRegion.value, "asia") : ssrLooseEqual(selectedRegion.value, "asia")) ? " selected" : ""}>\u4E9A\u6D32</option><option value="china"${ssrIncludeBooleanAttr(Array.isArray(selectedRegion.value) ? ssrLooseContain(selectedRegion.value, "china") : ssrLooseEqual(selectedRegion.value, "china")) ? " selected" : ""}>\u4E2D\u56FD</option></select></div></div></div><div class="mb-8"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          `px-4 py-2 rounded-md font-medium`,
          activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        ])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (activeTab.value === "qs-top50") {
        _push(`<div class="mb-10"><h2 class="text-2xl font-bold mb-4">QS\u4E16\u754C\u5927\u5B66\u6392\u540D\u524D50\u540D\u9662\u6821</h2><div class="overflow-x-auto"><table class="min-w-full bg-white border border-gray-300"><thead><tr class="bg-gray-100"><th class="py-3 px-4 border-b text-left">QS\u6392\u540D</th><th class="py-3 px-4 border-b text-left">\u5B9E\u9A8C\u5BA4\u540D\u79F0</th><th class="py-3 px-4 border-b text-left">\u6240\u5C5E\u5927\u5B66</th><th class="py-3 px-4 border-b text-left">\u4E3B\u8981\u7814\u7A76\u65B9\u5411</th><th class="py-3 px-4 border-b text-left">\u5B9E\u9A8C\u5BA4\u4E3B\u9875</th><th class="py-3 px-4 border-b text-left">\u4EE3\u8868\u6027\u6210\u679C</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(_ctx.filteredQsLabs, (lab, index) => {
          _push(`<tr class="hover:bg-gray-50 border-b"><td class="py-3 px-4">${ssrInterpolate(lab.rank || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">${ssrInterpolate(lab.name || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">${ssrInterpolate(lab.university)}</td><td class="py-3 px-4">${ssrInterpolate(lab.researchAreas || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">`);
          if (lab.website) {
            _push(`<a${ssrRenderAttr("href", lab.website)} target="_blank" class="text-blue-600 hover:underline">\u8BBF\u95EE</a>`);
          } else {
            _push(`<span>\u6682\u65E0\u6570\u636E</span>`);
          }
          _push(`</td><td class="py-3 px-4">${ssrInterpolate(lab.achievements || "\u6682\u65E0\u6570\u636E")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "north-america") {
        _push(`<div class="mb-10"><h2 class="text-2xl font-bold mb-4">\u5317\u7F8E\u9AD8\u6821\u8BA1\u7B97\u673A\u89C6\u89C9\u5B9E\u9A8C\u5BA4</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(filteredNorthAmericaLabs.value, (lab, index) => {
          _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">${ssrInterpolate(lab.name || lab.university)}</h3><p class="text-gray-600 mb-2">${ssrInterpolate(lab.university)}</p><div class="mb-3"><h4 class="font-semibold text-gray-700">\u7814\u7A76\u65B9\u5411\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(lab.researchAreas || "\u6682\u65E0\u6570\u636E")}</p></div><div class="mb-3"><h4 class="font-semibold text-gray-700">\u4EE3\u8868\u6210\u679C\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(lab.achievements || "\u6682\u65E0\u6570\u636E")}</p></div>`);
          if (lab.website) {
            _push(`<a${ssrRenderAttr("href", lab.website)} target="_blank" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"> \u8BBF\u95EE\u5B9E\u9A8C\u5BA4 </a>`);
          } else {
            _push(`<span class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">\u6682\u65E0\u7F51\u7AD9</span>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "china") {
        _push(`<div class="mb-10"><h2 class="text-2xl font-bold mb-4">\u4E2D\u56FD\u9AD8\u6821\u8BA1\u7B97\u673A\u89C6\u89C9\u5B9E\u9A8C\u5BA4</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(filteredChinaLabs.value, (lab, index) => {
          _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">${ssrInterpolate(lab.name || lab.university)}</h3><p class="text-gray-600 mb-2">${ssrInterpolate(lab.university)}</p><div class="mb-3"><h4 class="font-semibold text-gray-700">\u7814\u7A76\u65B9\u5411\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(lab.researchAreas || "\u6682\u65E0\u6570\u636E")}</p></div><div class="mb-3"><h4 class="font-semibold text-gray-700">\u4EE3\u8868\u6210\u679C\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(lab.achievements || "\u6682\u65E0\u6570\u636E")}</p></div>`);
          if (lab.website) {
            _push(`<a${ssrRenderAttr("href", lab.website)} target="_blank" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"> \u8BBF\u95EE\u5B9E\u9A8C\u5BA4 </a>`);
          } else {
            _push(`<span class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">\u6682\u65E0\u7F51\u7AD9</span>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-xl font-bold mb-2">\u8D21\u732E\u4FE1\u606F</h2><p>\u5982\u679C\u60A8\u6709\u66F4\u591A\u5B9E\u9A8C\u5BA4\u4FE1\u606F\u60F3\u8981\u6DFB\u52A0\uFF0C\u8BF7\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ol class="list-decimal pl-6 mt-2"><li class="mb-1">Fork \u672C\u4ED3\u5E93</li><li class="mb-1">\u5728 resources/labs.md \u6587\u4EF6\u4E2D\u6DFB\u52A0\u5185\u5BB9</li><li class="mb-1">\u63D0\u4EA4 Pull Request</li></ol></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/labs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=labs-DtJtGh4n.mjs.map

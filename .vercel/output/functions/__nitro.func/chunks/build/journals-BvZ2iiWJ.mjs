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
  __name: "journals",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u8BA1\u7B97\u673A\u89C6\u89C9\u671F\u520A\u4F1A\u8BAE\u4FE1\u606F - Computer Vision Reference",
      meta: [
        { name: "description", content: "\u8BA1\u7B97\u673A\u89C6\u89C9\u9886\u57DF\u91CD\u8981\u671F\u520A\u548C\u4F1A\u8BAE\u7684\u6295\u7A3F\u8981\u6C42\u548C\u91CD\u8981\u65E5\u671F" }
      ]
    });
    const tabs = [
      { id: "journals", name: "\u671F\u520A" },
      { id: "conferences", name: "\u4F1A\u8BAE" },
      { id: "challenges", name: "\u6311\u6218\u8D5B" }
    ];
    const activeTab = ref("journals");
    const searchQuery = ref("");
    const selectedType = ref("");
    const journals = ref([
      {
        name: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
        impactFactor: "24.6",
        reviewPeriod: "6-9\u4E2A\u6708",
        submissionUrl: "https://mc.manuscriptcentral.com/tpami",
        submissionFee: "$1,950 (\u5BA1\u7A3F\u8D39) + $2,300 (\u7248\u9762\u8D39)",
        others: "\u5FC5\u987B\u63D0\u4EA4\u7406\u8BBA\u8BC1\u660E\u9644\u5F55\uFF0CLaTeX\u6A21\u677F\u5F3A\u5236\u4F7F\u7528"
      },
      {
        name: "International Journal of Computer Vision (IJCV)",
        impactFactor: "13.8",
        reviewPeriod: "5-8\u4E2A\u6708",
        submissionUrl: "https://www.editorialmanager.com/ijcv",
        submissionFee: "$3,690 (\u5F00\u653E\u83B7\u53D6)",
        others: "\u4F1A\u8BAE\u6269\u5C55\u8BBA\u6587\u9700\u6807\u6CE8\u539F\u59CB\u7248\u672C\uFF0C\u53C2\u8003\u6587\u732E\u4E0D\u8D85\u8FC780\u6761"
      },
      {
        name: "Medical Image Analysis (MedIA)",
        impactFactor: "11.7",
        reviewPeriod: "4-6\u4E2A\u6708",
        submissionUrl: "https://ees.elsevier.com/mia",
        submissionFee: "$2,800 (\u542B\u6570\u636E\u5BA1\u67E5\u8D39)",
        others: "DICOM\u683C\u5F0F\u6570\u636E\u5F3A\u5236\u516C\u5F00\uFF0C\u63A5\u53D7\u89C6\u9891\u9644\u4EF6\uFF08\u6700\u957F5\u5206\u949F\uFF09"
      },
      {
        name: "IEEE Transactions on Image Processing (TIP)",
        impactFactor: "10.2",
        reviewPeriod: "5-8\u4E2A\u6708",
        submissionUrl: "https://ieee.atyponrex.com",
        submissionFee: "$1,750 (\u4F1A\u5458)/$2,100 (\u975E\u4F1A\u5458)",
        others: "\u56FE\u50CF\u538B\u7F29\u8BBA\u6587\u9700\u63D0\u4F9BPSNR/SSIM\u5BF9\u6BD4\u6307\u6807"
      },
      {
        name: "Computer Vision and Image Understanding (CVIU)",
        impactFactor: "9.4",
        reviewPeriod: "4-6\u4E2A\u6708",
        submissionUrl: "https://ees.elsevier.com/cviu",
        submissionFee: "$2,200",
        others: "\u4EE3\u7801\u9700\u63D0\u4EA4\u81F3GitLab/GitHub\uFF0C\u9875\u6570\u9650\u523614\u9875\uFF08\u53CC\u680F\uFF09"
      },
      {
        name: "Computational Visual Media (CVM)",
        impactFactor: "17.3",
        reviewPeriod: "10\u5929\u521D\u5BA1",
        submissionUrl: "https://www.springer.com/cvm",
        submissionFee: "\u514D\u8D39",
        others: "\u63D0\u4F9B100\u5C0F\u65F6GPU\u7B97\u529B\u652F\u6301\uFF0C\u63A5\u6536\u4E2D\u6587\u6295\u7A3F\uFF08\u9644\u82F1\u6587\u7FFB\u8BD1\uFF09"
      }
    ]);
    const conferences = ref([
      { name: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)", tier: "A*", deadline: "\u6BCF\u5E7411\u6708", location: "\u7F8E\u56FD", website: "", others: "" },
      { name: "International Conference on Computer Vision (ICCV)", tier: "A*", deadline: "\u6BCF\u5E743\u6708", location: "\u5168\u7403\u8F6E\u6362", website: "", others: "" },
      { name: "European Conference on Computer Vision (ECCV)", tier: "A*", deadline: "\u6BCF\u5E743\u6708", location: "\u6B27\u6D32", website: "", others: "" },
      { name: "Neural Information Processing Systems (NeurIPS)", tier: "A*", deadline: "\u6BCF\u5E745\u6708", location: "\u5168\u7403\u8F6E\u6362", website: "", others: "" },
      { name: "International Conference on Machine Learning (ICML)", tier: "A*", deadline: "\u6BCF\u5E741\u6708", location: "\u5168\u7403\u8F6E\u6362", website: "", others: "" }
      // 更多数据...
    ]);
    const challenges = ref([
      { name: "COCO - Common Objects in Context", organizer: "Microsoft", description: "\u76EE\u6807\u68C0\u6D4B\u3001\u5206\u5272\u548C\u5173\u952E\u70B9\u68C0\u6D4B\u6311\u6218", deadline: "\u6BCF\u5E746\u6708", website: "" },
      { name: "ImageNet Large Scale Visual Recognition Challenge", organizer: "ImageNet", description: "\u56FE\u50CF\u5206\u7C7B\u548C\u76EE\u6807\u68C0\u6D4B\u6311\u6218", deadline: "\u6BCF\u5E747\u6708", website: "" },
      { name: "Visual Object Tracking Challenge (VOT)", organizer: "VOT Committee", description: "\u89C6\u89C9\u76EE\u6807\u8DDF\u8E2A\u6311\u6218", deadline: "\u6BCF\u5E745\u6708", website: "" },
      { name: "DAVIS Challenge on Video Object Segmentation", organizer: "DAVIS", description: "\u89C6\u9891\u76EE\u6807\u5206\u5272\u6311\u6218", deadline: "\u6BCF\u5E744\u6708", website: "" },
      { name: "AI City Challenge", organizer: "NVIDIA", description: "\u667A\u80FD\u4EA4\u901A\u7CFB\u7EDF\u89C6\u89C9\u5206\u6790\u6311\u6218", deadline: "\u6BCF\u5E743\u6708", website: "" }
      // 更多数据...
    ]);
    const filteredJournals = computed(() => {
      return journals.value.filter((journal) => {
        const matchesSearch = searchQuery.value === "" || journal.name && journal.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesType = selectedType.value === "" || selectedType.value === "journal";
        return matchesSearch && matchesType;
      });
    });
    const filteredConferences = computed(() => {
      return conferences.value.filter((conference) => {
        const matchesSearch = searchQuery.value === "" || conference.name && conference.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesType = selectedType.value === "" || selectedType.value === "conference";
        return matchesSearch && matchesType;
      });
    });
    const filteredChallenges = computed(() => {
      return challenges.value.filter((challenge) => {
        const matchesSearch = searchQuery.value === "" || challenge.name && challenge.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || challenge.description && challenge.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesType = selectedType.value === "" || selectedType.value === "challenge";
        return matchesSearch && matchesType;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<div class="container mx-auto px-4 py-8"><header class="mb-10"><h1 class="text-3xl font-bold mb-4">\u8BA1\u7B97\u673A\u89C6\u89C9\u671F\u520A\u4F1A\u8BAE\u4FE1\u606F</h1><p class="text-gray-600">\u6536\u96C6\u8BA1\u7B97\u673A\u89C6\u89C9\u9886\u57DF\u91CD\u8981\u671F\u520A\u548C\u4F1A\u8BAE\u7684\u4FE1\u606F\uFF0C\u5E2E\u52A9\u7814\u7A76\u4EBA\u5458\u4E86\u89E3\u6295\u7A3F\u8981\u6C42\u548C\u91CD\u8981\u65E5\u671F\u3002</p></header><div class="mb-8 bg-white p-4 rounded-lg shadow"><div class="flex flex-col md:flex-row gap-4"><div class="flex-1"><label for="search" class="block text-sm font-medium text-gray-700 mb-1">\u641C\u7D22\u671F\u520A/\u4F1A\u8BAE</label><input type="text" id="search"${ssrRenderAttr("value", searchQuery.value)} placeholder="\u8F93\u5165\u671F\u520A\u540D\u79F0\u3001\u4F1A\u8BAE\u540D\u79F0\u6216\u7814\u7A76\u9886\u57DF" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div class="md:w-1/4"><label for="type" class="block text-sm font-medium text-gray-700 mb-1">\u7C7B\u578B\u7B5B\u9009</label><select id="type" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "") : ssrLooseEqual(selectedType.value, "")) ? " selected" : ""}>\u5168\u90E8\u7C7B\u578B</option><option value="journal"${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "journal") : ssrLooseEqual(selectedType.value, "journal")) ? " selected" : ""}>\u671F\u520A</option><option value="conference"${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "conference") : ssrLooseEqual(selectedType.value, "conference")) ? " selected" : ""}>\u4F1A\u8BAE</option><option value="challenge"${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "challenge") : ssrLooseEqual(selectedType.value, "challenge")) ? " selected" : ""}>\u6311\u6218\u8D5B</option></select></div></div></div><div class="mb-8"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          `px-4 py-2 rounded-md font-medium`,
          activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        ])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (activeTab.value === "journals") {
        _push(`<div class="mb-10"><h2 class="text-2xl font-bold mb-4">\u9876\u7EA7\u671F\u520A</h2><div class="overflow-x-auto"><table class="min-w-full bg-white border border-gray-300"><thead><tr class="bg-gray-100"><th class="py-3 px-4 border-b text-left">\u671F\u520A\u540D\u79F0</th><th class="py-3 px-4 border-b text-left">\u5F71\u54CD\u56E0\u5B50</th><th class="py-3 px-4 border-b text-left">\u5BA1\u7A3F\u5468\u671F</th><th class="py-3 px-4 border-b text-left">\u6295\u7A3F\u7F51\u5740</th><th class="py-3 px-4 border-b text-left">\u6295\u7A3F\u8D39\u7528</th><th class="py-3 px-4 border-b text-left">\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(filteredJournals.value, (journal, index) => {
          _push(`<tr class="hover:bg-gray-50 border-b"><td class="py-3 px-4 font-medium">${ssrInterpolate(journal.name || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded">${ssrInterpolate(journal.impactFactor || "\u6682\u65E0\u6570\u636E")}</span></td><td class="py-3 px-4">${ssrInterpolate(journal.reviewPeriod || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">`);
          if (journal.submissionUrl) {
            _push(`<a${ssrRenderAttr("href", journal.submissionUrl)} target="_blank" class="text-blue-600 hover:underline flex items-center"><span>\u8BBF\u95EE</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`);
          } else {
            _push(`<span>\u6682\u65E0\u6570\u636E</span>`);
          }
          _push(`</td><td class="py-3 px-4">${ssrInterpolate(journal.submissionFee || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">${ssrInterpolate(journal.others || "\u6682\u65E0\u6570\u636E")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200"><h3 class="text-lg font-semibold text-blue-800 mb-2">\u6295\u7A3F\u7B56\u7565\u63D0\u793A</h3><ul class="list-disc pl-5 space-y-1"><li><span class="font-medium">\u9884\u7B97\u6709\u9650\uFF1A</span>\u9009\u62E9CVM\uFF08\u514D\u7248\u9762\u8D39\uFF09\u6216TIP\uFF08IEEE\u4F1A\u5458\u4F18\u60E0\uFF09</li><li><span class="font-medium">\u5FEB\u901F\u53D1\u8868\uFF1A</span>\u4F18\u5148CVM\uFF0810\u5929\u521D\u5BA1\uFF09\u548CMedIA\uFF08\u6700\u5FEB4\u4E2A\u6708\u89C1\u520A\uFF09</li><li><span class="font-medium">\u7406\u8BBA\u521B\u65B0\uFF1A</span>\u63A8\u8350TPAMI\uFF08\u63A5\u6536\u957F\u7BC7\u5E45\u6570\u5B66\u8BC1\u660E\uFF09</li><li><span class="font-medium">\u5DE5\u4E1A\u5E94\u7528\uFF1A</span>\u9002\u5408CVIU\uFF08\u5F3A\u5236\u4EE3\u7801\u63D0\u4EA4\u653F\u7B56\uFF09</li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "conferences") {
        _push(`<div class="mb-10"><h2 class="text-2xl font-bold mb-4">\u91CD\u8981\u4F1A\u8BAE</h2><div class="overflow-x-auto"><table class="min-w-full bg-white border border-gray-300"><thead><tr class="bg-gray-100"><th class="py-3 px-4 border-b text-left">\u4F1A\u8BAE\u540D\u79F0</th><th class="py-3 px-4 border-b text-left">\u7B49\u7EA7</th><th class="py-3 px-4 border-b text-left">\u622A\u7A3F\u65E5\u671F</th><th class="py-3 px-4 border-b text-left">\u4E3E\u529E\u5730\u70B9</th><th class="py-3 px-4 border-b text-left">\u4F1A\u8BAE\u7F51\u5740</th><th class="py-3 px-4 border-b text-left">\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(filteredConferences.value, (conference, index) => {
          _push(`<tr class="hover:bg-gray-50 border-b"><td class="py-3 px-4">${ssrInterpolate(conference.name || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">${ssrInterpolate(conference.tier || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">${ssrInterpolate(conference.deadline || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">${ssrInterpolate(conference.location || "\u6682\u65E0\u6570\u636E")}</td><td class="py-3 px-4">`);
          if (conference.website) {
            _push(`<a${ssrRenderAttr("href", conference.website)} target="_blank" class="text-blue-600 hover:underline">\u8BBF\u95EE</a>`);
          } else {
            _push(`<span>\u6682\u65E0\u6570\u636E</span>`);
          }
          _push(`</td><td class="py-3 px-4">${ssrInterpolate(conference.others || "\u6682\u65E0\u6570\u636E")}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "challenges") {
        _push(`<div class="mb-10"><h2 class="text-2xl font-bold mb-4">\u8BA1\u7B97\u673A\u89C6\u89C9\u6311\u6218\u8D5B</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(filteredChallenges.value, (challenge, index) => {
          _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">${ssrInterpolate(challenge.name || "\u6682\u65E0\u6570\u636E")}</h3><p class="text-gray-600 mb-2">${ssrInterpolate(challenge.organizer || "\u6682\u65E0\u6570\u636E")}</p><div class="mb-4"><h4 class="font-semibold text-gray-700">\u4EFB\u52A1\u63CF\u8FF0\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(challenge.description || "\u6682\u65E0\u6570\u636E")}</p></div><div class="mb-4"><h4 class="font-semibold text-gray-700">\u622A\u6B62\u65E5\u671F\uFF1A</h4><p class="text-gray-600">${ssrInterpolate(challenge.deadline || "\u6682\u65E0\u6570\u636E")}</p></div>`);
          if (challenge.website) {
            _push(`<a${ssrRenderAttr("href", challenge.website)} target="_blank" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"> \u8BBF\u95EE\u5B98\u7F51 </a>`);
          } else {
            _push(`<span class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">\u6682\u65E0\u5B98\u7F51</span>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-xl font-bold mb-2">\u8D21\u732E\u4FE1\u606F</h2><p>\u5982\u679C\u60A8\u6709\u66F4\u591A\u671F\u520A\u4F1A\u8BAE\u4FE1\u606F\u60F3\u8981\u6DFB\u52A0\uFF0C\u8BF7\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ol class="list-decimal pl-6 mt-2"><li class="mb-1">Fork \u672C\u4ED3\u5E93</li><li class="mb-1">\u5728 resources/journals_conferences.md \u6587\u4EF6\u4E2D\u6DFB\u52A0\u5185\u5BB9</li><li class="mb-1">\u63D0\u4EA4 Pull Request</li></ol></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/journals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=journals-BvZ2iiWJ.mjs.map

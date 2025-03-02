import { _ as _sfc_main$1 } from "./NavBar-DleWZSEV.js";
import { ref, computed, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "./index-BabADJUJ.js";
import "./nuxt-link-yh-mS4-T.js";
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
  __name: "professors",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "计算机视觉领域教授信息 - Computer Vision Reference",
      meta: [
        { name: "description", content: "计算机视觉领域知名教授的研究方向、成果和指导风格" }
      ]
    });
    const tabs = [
      { id: "all", name: "全部教授" },
      { id: "north-america", name: "北美地区" },
      { id: "europe", name: "欧洲地区" },
      { id: "asia", name: "亚洲地区" },
      { id: "rising-stars", name: "新锐学者" }
    ];
    const activeTab = ref("all");
    const searchQuery = ref("");
    const selectedInstitution = ref("");
    const professors = ref([
      {
        name: "Luc Van Gool",
        institution: "苏黎世联邦理工学院/鲁汶大学",
        researchAreas: "三维重建、自动驾驶",
        achievements: "COLMAP三维重建系统，获2019年CVPR最佳论文奖",
        mentorStyle: "强调工业界合作，每周组织跨校学术沙龙",
        homepage: "https://vision.ee.ethz.ch/people-details.OTAyMzM=.TGlzdC8zMDQ4LC0xOTcxNDY1MTc4.html",
        googleScholar: "https://scholar.google.com/citations?user=TwMib_QAAAAJ",
        region: "europe"
      },
      {
        name: "Abe Davis",
        institution: "康奈尔大学",
        researchAreas: "计算成像、增强现实",
        achievements: "视觉振动分析技术，获SIGGRAPH 2023最佳技术奖",
        mentorStyle: "鼓励学生开发开源工具，提供硬件实验室支持",
        homepage: "https://www.abedavis.com/",
        googleScholar: "https://scholar.google.com/citations?user=dQoGEWQAAAAJ",
        region: "north-america"
      },
      {
        name: "田奇",
        institution: "华为诺亚方舟实验室",
        researchAreas: "语义理解、多模态融合",
        achievements: "HRNet高分辨率网络架构，主导SPTAG十亿级检索系统",
        mentorStyle: "产学研深度结合，提供华为云算力资源",
        homepage: "https://www.noahlab.com.hk/",
        googleScholar: "https://scholar.google.com/",
        region: "asia"
      },
      {
        name: "Bill Freeman",
        institution: "MIT CSAIL",
        researchAreas: "计算摄影、神经渲染",
        achievements: "提出HDR重建算法，开发MIT-IBM联合医疗影像平台",
        mentorStyle: '推崇"理论-代码-论文"三位一体培养模式',
        homepage: "http://people.csail.mit.edu/billf/",
        googleScholar: "https://scholar.google.com/citations?user=X-HGBHMAAAAJ",
        region: "north-america"
      },
      {
        name: "程明显",
        institution: "南开大学",
        researchAreas: "显著性检测",
        achievements: "U²-Net++架构，GitHub星标超15k",
        mentorStyle: "提供Docker容器化实验环境",
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
      _push(`<div class="container mx-auto px-4 py-8"><header class="mb-10"><h1 class="text-3xl font-bold mb-4">计算机视觉领域教授信息</h1><p class="text-gray-600">收集计算机视觉领域知名教授的信息，帮助研究人员了解各位教授的研究方向、成果和指导风格。</p></header><div class="mb-8 bg-white p-4 rounded-lg shadow"><div class="flex flex-col md:flex-row gap-4"><div class="flex-1"><label for="search" class="block text-sm font-medium text-gray-700 mb-1">搜索教授</label><input type="text" id="search"${ssrRenderAttr("value", searchQuery.value)} placeholder="输入教授姓名、所属机构或研究方向" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div class="md:w-1/4"><label for="institution" class="block text-sm font-medium text-gray-700 mb-1">机构筛选</label><select id="institution" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "") : ssrLooseEqual(selectedInstitution.value, "")) ? " selected" : ""}>全部机构</option><option value="mit"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "mit") : ssrLooseEqual(selectedInstitution.value, "mit")) ? " selected" : ""}>MIT</option><option value="cmu"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "cmu") : ssrLooseEqual(selectedInstitution.value, "cmu")) ? " selected" : ""}>CMU</option><option value="stanford"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "stanford") : ssrLooseEqual(selectedInstitution.value, "stanford")) ? " selected" : ""}>Stanford</option><option value="tsinghua"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "tsinghua") : ssrLooseEqual(selectedInstitution.value, "tsinghua")) ? " selected" : ""}>清华大学</option><option value="pku"${ssrIncludeBooleanAttr(Array.isArray(selectedInstitution.value) ? ssrLooseContain(selectedInstitution.value, "pku") : ssrLooseEqual(selectedInstitution.value, "pku")) ? " selected" : ""}>北京大学</option></select></div></div></div><div class="mb-8"><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          `px-4 py-2 rounded-md font-medium`,
          activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        ])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="mb-10"><h2 class="text-2xl font-bold mb-4">教授列表</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(filteredProfessors.value, (professor, index) => {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">${ssrInterpolate(professor.name || "暂无数据")}</h3><p class="text-gray-600 mb-2">${ssrInterpolate(professor.institution)}</p><div class="mb-3"><h4 class="font-semibold text-gray-700">研究方向：</h4><p class="text-gray-600">${ssrInterpolate(professor.researchAreas || "暂无数据")}</p></div><div class="mb-3"><h4 class="font-semibold text-gray-700">代表成果：</h4><p class="text-gray-600">${ssrInterpolate(professor.achievements || "暂无数据")}</p></div><div class="mb-4"><h4 class="font-semibold text-gray-700">指导风格：</h4><p class="text-gray-600">${ssrInterpolate(professor.mentorStyle || "暂无数据")}</p></div><div class="flex space-x-2">`);
        if (professor.homepage) {
          _push(`<a${ssrRenderAttr("href", professor.homepage)} target="_blank" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"> 访问主页 </a>`);
        } else {
          _push(`<span class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">暂无主页</span>`);
        }
        if (professor.googleScholar) {
          _push(`<a${ssrRenderAttr("href", professor.googleScholar)} target="_blank" class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"> Google Scholar </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-xl font-bold mb-2">贡献信息</h2><p>如果您有更多教授信息想要添加，请按照以下步骤：</p><ol class="list-decimal pl-6 mt-2"><li class="mb-1">Fork 本仓库</li><li class="mb-1">在 resources/professors.md 文件中添加内容</li><li class="mb-1">提交 Pull Request</li></ol></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/professors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=professors-CIzK50tD.js.map

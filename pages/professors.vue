<template>
  <div>
    <!-- 添加导航栏 -->
    <NavBar />
    
    <div class="container mx-auto px-4 py-8">
      <header class="mb-10">
        <h1 class="text-3xl font-bold mb-4">计算机视觉领域教授信息</h1>
        <p class="text-gray-600">收集计算机视觉领域知名教授的信息，帮助研究人员了解各位教授的研究方向、成果和指导风格。</p>
      </header>

      <!-- 搜索和筛选区域 -->
      <div class="mb-8 bg-white p-4 rounded-lg shadow">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <label for="search" class="block text-sm font-medium text-gray-700 mb-1">搜索教授</label>
            <input
              type="text"
              id="search"
              v-model="searchQuery"
              placeholder="输入教授姓名、所属机构或研究方向"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="md:w-1/4">
            <label for="institution" class="block text-sm font-medium text-gray-700 mb-1">机构筛选</label>
            <select
              id="institution"
              v-model="selectedInstitution"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">全部机构</option>
              <option value="mit">MIT</option>
              <option value="cmu">CMU</option>
              <option value="stanford">Stanford</option>
              <option value="tsinghua">清华大学</option>
              <option value="pku">北京大学</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 标签导航 -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[`px-4 py-2 rounded-md font-medium`, 
                    activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- 教授列表 -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-4">教授列表</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(professor, index) in filteredProfessors" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ professor.name || '暂无数据' }}</h3>
              <p class="text-gray-600 mb-2">{{ professor.institution }}</p>
              <div class="mb-3">
                <h4 class="font-semibold text-gray-700">研究方向：</h4>
                <p class="text-gray-600">{{ professor.researchAreas || '暂无数据' }}</p>
              </div>
              <div class="mb-3">
                <h4 class="font-semibold text-gray-700">代表成果：</h4>
                <p class="text-gray-600">{{ professor.achievements || '暂无数据' }}</p>
              </div>
              <div class="mb-4">
                <h4 class="font-semibold text-gray-700">指导风格：</h4>
                <p class="text-gray-600">{{ professor.mentorStyle || '暂无数据' }}</p>
              </div>
              <div class="flex space-x-2">
                <a 
                  v-if="professor.homepage" 
                  :href="professor.homepage" 
                  target="_blank" 
                  class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  访问主页
                </a>
                <span v-else class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">暂无主页</span>
                <a 
                  v-if="professor.googleScholar" 
                  :href="professor.googleScholar" 
                  target="_blank" 
                  class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 贡献信息 -->
      <div class="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 class="text-xl font-bold mb-2">贡献信息</h2>
        <p>如果您有更多教授信息想要添加，请按照以下步骤：</p>
        <ol class="list-decimal pl-6 mt-2">
          <li class="mb-1">Fork 本仓库</li>
          <li class="mb-1">在 resources/professors.md 文件中添加内容</li>
          <li class="mb-1">提交 Pull Request</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: '计算机视觉领域教授信息 - Computer Vision Reference',
  meta: [
    { name: 'description', content: '计算机视觉领域知名教授的研究方向、成果和指导风格' }
  ]
})

// 标签页数据
const tabs = [
  { id: 'all', name: '全部教授' },
  { id: 'north-america', name: '北美地区' },
  { id: 'europe', name: '欧洲地区' },
  { id: 'asia', name: '亚洲地区' },
  { id: 'rising-stars', name: '新锐学者' }
]

// 当前激活的标签
const activeTab = ref('all')

// 搜索和筛选
const searchQuery = ref('')
const selectedInstitution = ref('')

// 模拟数据 - 实际项目中应该从API或Markdown文件中获取
const professors = ref([
  { 
    name: 'Luc Van Gool', 
    institution: '苏黎世联邦理工学院/鲁汶大学', 
    researchAreas: '三维重建、自动驾驶', 
    achievements: 'COLMAP三维重建系统，获2019年CVPR最佳论文奖',
    mentorStyle: '强调工业界合作，每周组织跨校学术沙龙',
    homepage: 'https://vision.ee.ethz.ch/people-details.OTAyMzM=.TGlzdC8zMDQ4LC0xOTcxNDY1MTc4.html',
    googleScholar: 'https://scholar.google.com/citations?user=TwMib_QAAAAJ',
    region: 'europe'
  },
  { 
    name: 'Abe Davis', 
    institution: '康奈尔大学', 
    researchAreas: '计算成像、增强现实', 
    achievements: '视觉振动分析技术，获SIGGRAPH 2023最佳技术奖',
    mentorStyle: '鼓励学生开发开源工具，提供硬件实验室支持',
    homepage: 'https://www.abedavis.com/',
    googleScholar: 'https://scholar.google.com/citations?user=dQoGEWQAAAAJ',
    region: 'north-america'
  },
  { 
    name: '田奇', 
    institution: '华为诺亚方舟实验室', 
    researchAreas: '语义理解、多模态融合', 
    achievements: 'HRNet高分辨率网络架构，主导SPTAG十亿级检索系统',
    mentorStyle: '产学研深度结合，提供华为云算力资源',
    homepage: 'https://www.noahlab.com.hk/',
    googleScholar: 'https://scholar.google.com/',
    region: 'asia'
  },
  { 
    name: 'Bill Freeman', 
    institution: 'MIT CSAIL', 
    researchAreas: '计算摄影、神经渲染', 
    achievements: '提出HDR重建算法，开发MIT-IBM联合医疗影像平台',
    mentorStyle: '推崇"理论-代码-论文"三位一体培养模式',
    homepage: 'http://people.csail.mit.edu/billf/',
    googleScholar: 'https://scholar.google.com/citations?user=X-HGBHMAAAAJ',
    region: 'north-america'
  },
  { 
    name: '程明显', 
    institution: '南开大学', 
    researchAreas: '显著性检测', 
    achievements: 'U²-Net++架构，GitHub星标超15k',
    mentorStyle: '提供Docker容器化实验环境',
    homepage: 'https://mmcheng.net/',
    googleScholar: 'https://scholar.google.com/citations?user=huWpVyEAAAAJ',
    region: 'rising-stars'
  }
])

// 过滤后的教授数据
const filteredProfessors = computed(() => {
  return professors.value.filter(professor => {
    // 搜索匹配
    const matchesSearch = searchQuery.value === '' || 
      (professor.name && professor.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      professor.institution.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (professor.researchAreas && professor.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    // 机构匹配
    const matchesInstitution = selectedInstitution.value === '' || 
      (professor.institution.toLowerCase().includes(selectedInstitution.value.toLowerCase()))
    
    // 标签匹配
    const matchesTab = activeTab.value === 'all' || professor.region === activeTab.value
    
    return matchesSearch && matchesInstitution && matchesTab
  })
})
</script>
<template>
  <div>
    <!-- 添加导航栏 -->
    <NavBar />
    
    <div class="container mx-auto px-4 py-8">
      <header class="mb-10">
        <h1 class="text-3xl font-bold mb-4">计算机视觉实验室信息</h1>
        <p class="text-gray-600">收集全球顶尖高校的计算机视觉实验室信息，帮助研究人员了解各个实验室的研究方向、成果和特色。</p>
      </header>

      <!-- 搜索和筛选区域 -->
      <div class="mb-8 bg-white p-4 rounded-lg shadow">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <label for="search" class="block text-sm font-medium text-gray-700 mb-1">搜索实验室</label>
            <input
              type="text"
              id="search"
              v-model="searchQuery"
              placeholder="输入实验室名称、所属大学或研究方向"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="md:w-1/4">
            <label for="region" class="block text-sm font-medium text-gray-700 mb-1">地区筛选</label>
            <select
              id="region"
              v-model="selectedRegion"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">全部地区</option>
              <option value="north-america">北美</option>
              <option value="europe">欧洲</option>
              <option value="asia">亚洲</option>
              <option value="china">中国</option>
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

      <!-- QS世界大学排名前50名院校 -->
      <div v-if="activeTab === 'qs-top50'" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">QS世界大学排名前50名院校</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-4 border-b text-left">QS排名</th>
                <th class="py-3 px-4 border-b text-left">实验室名称</th>
                <th class="py-3 px-4 border-b text-left">所属大学</th>
                <th class="py-3 px-4 border-b text-left">主要研究方向</th>
                <th class="py-3 px-4 border-b text-left">实验室主页</th>
                <th class="py-3 px-4 border-b text-left">代表性成果</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(lab, index) in filteredQsLabs" :key="index" class="hover:bg-gray-50 border-b">
                <td class="py-3 px-4">{{ lab.rank || '暂无数据' }}</td>
                <td class="py-3 px-4">{{ lab.name || '暂无数据' }}</td>
                <td class="py-3 px-4">{{ lab.university }}</td>
                <td class="py-3 px-4">{{ lab.researchAreas || '暂无数据' }}</td>
                <td class="py-3 px-4">
                  <a v-if="lab.website" :href="lab.website" target="_blank" class="text-blue-600 hover:underline">访问</a>
                  <span v-else>暂无数据</span>
                </td>
                <td class="py-3 px-4">{{ lab.achievements || '暂无数据' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 北美高校 -->
      <div v-if="activeTab === 'north-america'" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">北美高校计算机视觉实验室</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(lab, index) in filteredNorthAmericaLabs" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ lab.name || lab.university }}</h3>
              <p class="text-gray-600 mb-2">{{ lab.university }}</p>
              <div class="mb-3">
                <h4 class="font-semibold text-gray-700">研究方向：</h4>
                <p class="text-gray-600">{{ lab.researchAreas || '暂无数据' }}</p>
              </div>
              <div class="mb-3">
                <h4 class="font-semibold text-gray-700">代表成果：</h4>
                <p class="text-gray-600">{{ lab.achievements || '暂无数据' }}</p>
              </div>
              <a 
                v-if="lab.website" 
                :href="lab.website" 
                target="_blank" 
                class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                访问实验室
              </a>
              <span v-else class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">暂无网站</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 中国高校 -->
      <div v-if="activeTab === 'china'" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">中国高校计算机视觉实验室</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(lab, index) in filteredChinaLabs" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ lab.name || lab.university }}</h3>
              <p class="text-gray-600 mb-2">{{ lab.university }}</p>
              <div class="mb-3">
                <h4 class="font-semibold text-gray-700">研究方向：</h4>
                <p class="text-gray-600">{{ lab.researchAreas || '暂无数据' }}</p>
              </div>
              <div class="mb-3">
                <h4 class="font-semibold text-gray-700">代表成果：</h4>
                <p class="text-gray-600">{{ lab.achievements || '暂无数据' }}</p>
              </div>
              <a 
                v-if="lab.website" 
                :href="lab.website" 
                target="_blank" 
                class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                访问实验室
              </a>
              <span v-else class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">暂无网站</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 贡献信息 -->
      <div class="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 class="text-xl font-bold mb-2">贡献信息</h2>
        <p>如果您有更多实验室信息想要添加，请按照以下步骤：</p>
        <ol class="list-decimal pl-6 mt-2">
          <li class="mb-1">Fork 本仓库</li>
          <li class="mb-1">在 resources/labs.md 文件中添加内容</li>
          <li class="mb-1">提交 Pull Request</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: '计算机视觉实验室信息 - Computer Vision Reference',
  meta: [
    { name: 'description', content: '全球顶尖计算机视觉实验室信息，包括研究方向和代表性成果' }
  ]
})

// 标签页数据
const tabs = [
  { id: 'qs-top50', name: 'QS世界排名前50' },
  { id: 'north-america', name: '北美高校' },
  { id: 'china', name: '中国高校' }
]

// 当前激活的标签
const activeTab = ref('qs-top50')

// 搜索和筛选
const searchQuery = ref('')
const selectedRegion = ref('')

// 模拟数据 - 实际项目中应该从API或Markdown文件中获取
const qsLabs = ref([
  { rank: 1, name: 'CSAIL CV Group', university: 'Massachusetts Institute of Technology (MIT)', researchAreas: '手术机器人视觉/非视距成像', website: 'http://www.csail.mit.edu', achievements: 'CVPR2024最佳论文《Neural Holography》' },
  { rank: 2, name: 'Vision & Learning Lab', university: 'Stanford University', researchAreas: '多模态基础模型', website: 'https://github.com/stanfordvl', achievements: 'CLIP-3模型（NeurIPS2024）' },
  { rank: 4, name: 'Active Vision Lab', university: 'University of Oxford', researchAreas: '动态SLAM/事件相机', website: 'https://www.robots.ox.ac.uk', achievements: 'SLAMBench 3.0' },
  { rank: 5, name: 'BAIR Lab', university: 'University of California, Berkeley (UCB)', researchAreas: '具身智能/跨模态生成', website: 'https://bair.berkeley.edu', achievements: 'DALL-E 5框架' },
  { rank: 7, name: 'Vector CV Lab', university: '多伦多大学', researchAreas: '自监督学习', website: 'https://vectorinstitute.ai', achievements: 'Swin Transformer V3' },
  { rank: 8, name: 'CVG Group', university: 'ETH Zurich', researchAreas: '城市三维重建', website: 'https://ethz.ch/cvg', achievements: 'Zurich-3D数据集' }
])

const northAmericaLabs = ref([
  { no: 1, name: 'CSAIL CV Group', university: 'MIT', researchAreas: '手术机器人视觉/非视距成像', website: 'http://www.csail.mit.edu', achievements: 'CVPR2024最佳论文《Neural Holography》' },
  { no: 2, name: 'Vision & Learning Lab', university: 'Stanford', researchAreas: '多模态基础模型', website: 'https://github.com/stanfordvl', achievements: 'CLIP-3模型（NeurIPS2024）' },
  { no: 3, name: 'BAIR Lab', university: 'UC Berkeley', researchAreas: '具身智能/跨模态生成', website: 'https://bair.berkeley.edu', achievements: 'DALL-E 5框架' },
  { no: 4, name: '3D Vision Group', university: 'UIUC', researchAreas: '三维重建', website: 'http://3dvision.illinois.edu', achievements: 'ShapeNet 2.0数据集' },
  { no: 5, name: 'Dynamic Vision', university: '多伦多大学', researchAreas: '运动分析', website: 'https://www.utoronto.ca', achievements: 'HockeyAI识别系统' },
  { no: 6, name: 'Vector CV Lab', university: '多伦多大学', researchAreas: '自监督学习', website: 'https://vectorinstitute.ai', achievements: 'Swin Transformer V3' }
])

const chinaLabs = ref([
  { rank: 7, name: 'CVDA Lab', university: '中国香港科技大学', researchAreas: '生成式模型', website: 'https://cse.hkust.edu.hk', achievements: '3D-GAN 2.0' },
  { rank: 12, name: '智能视觉实验室', university: '清华大学 / Tsinghua University', researchAreas: '病理诊断', website: 'http://learn.tsinghua.edu.cn', achievements: '协和病理数据集' },
  { rank: 19, name: 'SCV Lab', university: '南洋理工', researchAreas: '卫星视觉', website: 'https://www.ntu.edu.sg', achievements: 'TerraSentinel系统' },
  { rank: 4, name: '', university: '浙江大学 / Zhejiang University', researchAreas: '三维视觉/增强现实', website: 'https://www.zju.edu.cn', achievements: 'AR导航系统' },
  { rank: 5, name: '', university: '西北工业大学 / Northwestern Polytechnical University', researchAreas: '无人机视觉/目标跟踪', website: 'https://www.nwpu.edu.cn', achievements: 'DroneTrack数据集' }
])

// 过滤后的实验室数据
const filteredQSLabs = computed(() => {
  return qsLabs.value.filter(lab => {
    const matchesSearch = searchQuery.value === '' || 
      (lab.name && lab.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      lab.university.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (lab.researchAreas && lab.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesRegion = selectedRegion.value === '' || 
      (selectedRegion.value === 'north-america' && (lab.university.includes('MIT') || lab.university.includes('Carnegie') || lab.university.includes('Stanford') || lab.university.includes('California'))) ||
      (selectedRegion.value === 'europe' && (lab.university.includes('Oxford') || lab.university.includes('Cambridge'))) ||
      (selectedRegion.value === 'asia' && (lab.university.includes('Tokyo') || lab.university.includes('Singapore'))) ||
      (selectedRegion.value === 'china' && (lab.university.includes('Tsinghua') || lab.university.includes('Peking') || lab.university.includes('Shanghai')))
    
    return matchesSearch && matchesRegion
  })
})

const filteredNorthAmericaLabs = computed(() => {
  return northAmericaLabs.value.filter(lab => {
    const matchesSearch = searchQuery.value === '' || 
      (lab.name && lab.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      lab.university.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (lab.researchAreas && lab.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesRegion = selectedRegion.value === '' || selectedRegion.value === 'north-america'
    
    return matchesSearch && matchesRegion
  })
})

const filteredChinaLabs = computed(() => {
  return chinaLabs.value.filter(lab => {
    const matchesSearch = searchQuery.value === '' || 
      (lab.name && lab.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      lab.university.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (lab.researchAreas && lab.researchAreas.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesRegion = selectedRegion.value === '' || selectedRegion.value === 'china' || selectedRegion.value === 'asia'
    
    return matchesSearch && matchesRegion
  })
})
</script>
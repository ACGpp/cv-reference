<template>
  <div>
    <!-- 添加导航栏 -->
    <NavBar />
    
    <div class="container mx-auto px-4 py-8">
      <header class="mb-10">
        <h1 class="text-3xl font-bold mb-4">计算机视觉期刊会议信息</h1>
        <p class="text-gray-600">收集计算机视觉领域重要期刊和会议的信息，帮助研究人员了解投稿要求和重要日期。</p>
      </header>

      <!-- 搜索和筛选区域 -->
      <div class="mb-8 bg-white p-4 rounded-lg shadow">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <label for="search" class="block text-sm font-medium text-gray-700 mb-1">搜索期刊/会议</label>
            <input
              type="text"
              id="search"
              v-model="searchQuery"
              placeholder="输入期刊名称、会议名称或研究领域"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="md:w-1/4">
            <label for="type" class="block text-sm font-medium text-gray-700 mb-1">类型筛选</label>
            <select
              id="type"
              v-model="selectedType"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">全部类型</option>
              <option value="journal">期刊</option>
              <option value="conference">会议</option>
              <option value="challenge">挑战赛</option>
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

      <!-- 期刊列表 -->
      <div v-if="activeTab === 'journals'" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">顶级期刊</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-4 border-b text-left">期刊名称</th>
                <th class="py-3 px-4 border-b text-left">影响因子</th>
                <th class="py-3 px-4 border-b text-left">审稿周期</th>
                <th class="py-3 px-4 border-b text-left">投稿网址</th>
                <th class="py-3 px-4 border-b text-left">投稿费用</th>
                <th class="py-3 px-4 border-b text-left">其他信息</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(journal, index) in filteredJournals" :key="index" class="hover:bg-gray-50 border-b">
                <td class="py-3 px-4 font-medium">{{ journal.name || '暂无数据' }}</td>
                <td class="py-3 px-4"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded">{{ journal.impactFactor || '暂无数据' }}</span></td>
                <td class="py-3 px-4">{{ journal.reviewPeriod || '暂无数据' }}</td>
                <td class="py-3 px-4">
                  <a v-if="journal.submissionUrl" :href="journal.submissionUrl" target="_blank" class="text-blue-600 hover:underline flex items-center">
                    <span>访问</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span v-else>暂无数据</span>
                </td>
                <td class="py-3 px-4">{{ journal.submissionFee || '暂无数据' }}</td>
                <td class="py-3 px-4">{{ journal.others || '暂无数据' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- 投稿策略提示 -->
        <div class="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 class="text-lg font-semibold text-blue-800 mb-2">投稿策略提示</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li><span class="font-medium">预算有限：</span>选择CVM（免版面费）或TIP（IEEE会员优惠）</li>
            <li><span class="font-medium">快速发表：</span>优先CVM（10天初审）和MedIA（最快4个月见刊）</li>
            <li><span class="font-medium">理论创新：</span>推荐TPAMI（接收长篇幅数学证明）</li>
            <li><span class="font-medium">工业应用：</span>适合CVIU（强制代码提交政策）</li>
          </ul>
        </div>
      </div>

      <!-- 会议列表 -->
      <div v-if="activeTab === 'conferences'" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">重要会议</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-4 border-b text-left">会议名称</th>
                <th class="py-3 px-4 border-b text-left">等级</th>
                <th class="py-3 px-4 border-b text-left">截稿日期</th>
                <th class="py-3 px-4 border-b text-left">举办地点</th>
                <th class="py-3 px-4 border-b text-left">会议网址</th>
                <th class="py-3 px-4 border-b text-left">其他信息</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(conference, index) in filteredConferences" :key="index" class="hover:bg-gray-50 border-b">
                <td class="py-3 px-4">{{ conference.name || '暂无数据' }}</td>
                <td class="py-3 px-4">{{ conference.tier || '暂无数据' }}</td>
                <td class="py-3 px-4">{{ conference.deadline || '暂无数据' }}</td>
                <td class="py-3 px-4">{{ conference.location || '暂无数据' }}</td>
                <td class="py-3 px-4">
                  <a v-if="conference.website" :href="conference.website" target="_blank" class="text-blue-600 hover:underline">访问</a>
                  <span v-else>暂无数据</span>
                </td>
                <td class="py-3 px-4">{{ conference.others || '暂无数据' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 挑战赛列表 -->
      <div v-if="activeTab === 'challenges'" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">计算机视觉挑战赛</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(challenge, index) in filteredChallenges" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ challenge.name || '暂无数据' }}</h3>
              <p class="text-gray-600 mb-2">{{ challenge.organizer || '暂无数据' }}</p>
              <div class="mb-4">
                <h4 class="font-semibold text-gray-700">任务描述：</h4>
                <p class="text-gray-600">{{ challenge.description || '暂无数据' }}</p>
              </div>
              <div class="mb-4">
                <h4 class="font-semibold text-gray-700">截止日期：</h4>
                <p class="text-gray-600">{{ challenge.deadline || '暂无数据' }}</p>
              </div>
              <a 
                v-if="challenge.website" 
                :href="challenge.website" 
                target="_blank" 
                class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                访问官网
              </a>
              <span v-else class="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">暂无官网</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 贡献信息 -->
      <div class="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 class="text-xl font-bold mb-2">贡献信息</h2>
        <p>如果您有更多期刊会议信息想要添加，请按照以下步骤：</p>
        <ol class="list-decimal pl-6 mt-2">
          <li class="mb-1">Fork 本仓库</li>
          <li class="mb-1">在 resources/journals_conferences.md 文件中添加内容</li>
          <li class="mb-1">提交 Pull Request</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: '计算机视觉期刊会议信息 - Computer Vision Reference',
  meta: [
    { name: 'description', content: '计算机视觉领域重要期刊和会议的投稿要求和重要日期' }
  ]
})

// 标签页数据
const tabs = [
  { id: 'journals', name: '期刊' },
  { id: 'conferences', name: '会议' },
  { id: 'challenges', name: '挑战赛' }
]

// 当前激活的标签
const activeTab = ref('journals')

// 搜索和筛选
const searchQuery = ref('')
const selectedType = ref('')

// 使用来自resources/journals_conferences.md的真实数据
const journals = ref([
  { 
    name: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)', 
    impactFactor: '24.6', 
    reviewPeriod: '6-9个月', 
    submissionUrl: 'https://mc.manuscriptcentral.com/tpami', 
    submissionFee: '$1,950 (审稿费) + $2,300 (版面费)', 
    others: '必须提交理论证明附录，LaTeX模板强制使用' 
  },
  { 
    name: 'International Journal of Computer Vision (IJCV)', 
    impactFactor: '13.8', 
    reviewPeriod: '5-8个月', 
    submissionUrl: 'https://www.editorialmanager.com/ijcv', 
    submissionFee: '$3,690 (开放获取)', 
    others: '会议扩展论文需标注原始版本，参考文献不超过80条' 
  },
  { 
    name: 'Medical Image Analysis (MedIA)', 
    impactFactor: '11.7', 
    reviewPeriod: '4-6个月', 
    submissionUrl: 'https://ees.elsevier.com/mia', 
    submissionFee: '$2,800 (含数据审查费)', 
    others: 'DICOM格式数据强制公开，接受视频附件（最长5分钟）' 
  },
  { 
    name: 'IEEE Transactions on Image Processing (TIP)', 
    impactFactor: '10.2', 
    reviewPeriod: '5-8个月', 
    submissionUrl: 'https://ieee.atyponrex.com', 
    submissionFee: '$1,750 (会员)/$2,100 (非会员)', 
    others: '图像压缩论文需提供PSNR/SSIM对比指标' 
  },
  { 
    name: 'Computer Vision and Image Understanding (CVIU)', 
    impactFactor: '9.4', 
    reviewPeriod: '4-6个月', 
    submissionUrl: 'https://ees.elsevier.com/cviu', 
    submissionFee: '$2,200', 
    others: '代码需提交至GitLab/GitHub，页数限制14页（双栏）' 
  },
  { 
    name: 'Computational Visual Media (CVM)', 
    impactFactor: '17.3', 
    reviewPeriod: '10天初审', 
    submissionUrl: 'https://www.springer.com/cvm', 
    submissionFee: '免费', 
    others: '提供100小时GPU算力支持，接收中文投稿（附英文翻译）' 
  }
])

const conferences = ref([
  { name: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)', tier: 'A*', deadline: '每年11月', location: '美国', website: '', others: '' },
  { name: 'International Conference on Computer Vision (ICCV)', tier: 'A*', deadline: '每年3月', location: '全球轮换', website: '', others: '' },
  { name: 'European Conference on Computer Vision (ECCV)', tier: 'A*', deadline: '每年3月', location: '欧洲', website: '', others: '' },
  { name: 'Neural Information Processing Systems (NeurIPS)', tier: 'A*', deadline: '每年5月', location: '全球轮换', website: '', others: '' },
  { name: 'International Conference on Machine Learning (ICML)', tier: 'A*', deadline: '每年1月', location: '全球轮换', website: '', others: '' },
  // 更多数据...
])

const challenges = ref([
  { name: 'COCO - Common Objects in Context', organizer: 'Microsoft', description: '目标检测、分割和关键点检测挑战', deadline: '每年6月', website: '' },
  { name: 'ImageNet Large Scale Visual Recognition Challenge', organizer: 'ImageNet', description: '图像分类和目标检测挑战', deadline: '每年7月', website: '' },
  { name: 'Visual Object Tracking Challenge (VOT)', organizer: 'VOT Committee', description: '视觉目标跟踪挑战', deadline: '每年5月', website: '' },
  { name: 'DAVIS Challenge on Video Object Segmentation', organizer: 'DAVIS', description: '视频目标分割挑战', deadline: '每年4月', website: '' },
  { name: 'AI City Challenge', organizer: 'NVIDIA', description: '智能交通系统视觉分析挑战', deadline: '每年3月', website: '' },
  // 更多数据...
])

// 过滤后的数据
const filteredJournals = computed(() => {
  return journals.value.filter(journal => {
    const matchesSearch = searchQuery.value === '' || 
      (journal.name && journal.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesType = selectedType.value === '' || selectedType.value === 'journal'
    
    return matchesSearch && matchesType
  })
})

const filteredConferences = computed(() => {
  return conferences.value.filter(conference => {
    const matchesSearch = searchQuery.value === '' || 
      (conference.name && conference.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesType = selectedType.value === '' || selectedType.value === 'conference'
    
    return matchesSearch && matchesType
  })
})

const filteredChallenges = computed(() => {
  return challenges.value.filter(challenge => {
    const matchesSearch = searchQuery.value === '' || 
      (challenge.name && challenge.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      (challenge.description && challenge.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesType = selectedType.value === '' || selectedType.value === 'challenge'
    
    return matchesSearch && matchesType
  })
})
</script>
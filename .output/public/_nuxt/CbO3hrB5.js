import{_ as f}from"./NpGFjm90.js";import{r as c,j as w,c as o,b as k,a as e,k as m,l as v,v as C,m as M,F as b,n as h,o as r,p as _,t as a}from"./Cc6jgwR_.js";import{u as L}from"./B5lyKY2F.js";import"./LzXGs3JV.js";const S={class:"container mx-auto px-4 py-8"},T={class:"mb-8 bg-white p-4 rounded-lg shadow"},H={class:"flex flex-col md:flex-row gap-4"},I={class:"flex-1"},B={class:"md:w-1/4"},A={class:"mb-8"},U={class:"flex flex-wrap gap-2"},V=["onClick"],j={class:"mb-10"},D={class:"overflow-x-auto"},K={class:"min-w-full bg-white border border-gray-300"},P={class:"py-3 px-4 font-medium"},E={class:"py-3 px-4"},G={class:"py-3 px-4"},N={class:"py-3 px-4"},R={class:"py-3 px-4"},z={class:"px-2 py-1 bg-purple-100 text-purple-800 rounded"},F={class:"py-3 px-4"},O=["href"],Z={key:1},X={__name:"courses",setup($){L({title:"计算机视觉课程信息 - Computer Vision Reference",meta:[{name:"description",content:"国内外高校开设的计算机视觉相关课程信息和学习资源"}]});const g=[{id:"all",name:"全部课程"},{id:"north-america",name:"北美地区"},{id:"europe",name:"欧洲地区"},{id:"asia",name:"亚洲地区"},{id:"oceania",name:"大洋洲地区"}],n=c("all"),i=c(""),d=c(""),x=c([{name:"6.869 三维视觉与机器人",university:"Massachusetts Institute of Technology (MIT)",instructor:"Antonio Torralba",content:"SLAM算法/神经辐射场/触觉反馈",resources:"开源Gazebo机器人仿真平台",version:"2025春季",website:"http://6.869.csail.mit.edu/"},{name:"CS231n 深度学习与视觉",university:"Stanford University",instructor:"Fei-Fei Li",content:"Vision Transformers架构解析",resources:"Colab实时编程环境",version:"2024冬季",website:"https://www.cs.stanford.edu/~feifeili/cs231n/"},{name:"CS294 具身视觉智能",university:"University of California, Berkeley (UCB)",instructor:"Alexei Efros",content:"机器人操作视觉推理",resources:"MuJoCo物理引擎实验套件",version:"2025春季",website:"https://inst.eecs.berkeley.edu/~cs180/sp23"},{name:"16-720 计算摄影学",university:"Carnegie Mellon University",instructor:"Kris Kitani",content:"光场成像/非视距成像",resources:"Lytro光场相机开发套件",version:"2024秋季",website:"http://16-385.com/"},{name:"Visual Computing MSc",university:"ETH Zurich",instructor:"Luc Van Gool",content:"多图像融合/超分辨率重建",resources:"开放HDR视频数据集（100TB）",version:"2024/25学年",website:"https://ethz.ch"},{name:"Robot Perception",university:"University of Oxford",instructor:"Andrew Zisserman",content:"动态场景理解/语义SLAM",resources:"WebGL三维场景标注工具",version:"2024 Michaelmas学期",website:"https://www.robots.ox.ac.uk"},{name:"DD2423 医疗影像分析",university:"KTH皇家理工",instructor:"",content:"CT/MRI病灶分割",resources:"瑞典卡罗林斯卡医院真实病例库",version:"2025春季",website:"https://kth.se"},{name:"COMP5421 生成式视觉模型",university:"中国香港科技大学",instructor:"",content:"3D扩散模型/神经材质生成",resources:"华为昇腾算力平台接入权限",version:"2024年度",website:"https://cse.hkust.edu.hk"},{name:"80240312 医学影像分析",university:"清华大学 / Tsinghua University",instructor:"",content:"病理切片AI诊断",resources:"协和医院标注数据集（10万+病例）",version:"2025春季",website:"http://learn.tsinghua.edu.cn"},{name:"CS774 视觉-语言模型",university:"KAIST",instructor:"",content:"CLIP架构优化/多模态对齐",resources:"韩英双语图文数据集",version:"2024秋季",website:"https://cvlab.kaist.ac.kr"},{name:"COMP90022 工业视觉检测",university:"墨尔本大学",instructor:"",content:"微米级缺陷检测",resources:"澳航飞机零件检测数据库",version:"2025 Semester 1",website:"https://unimelb.edu.au"},{name:"ELEC5307 农业视觉系统",university:"悉尼大学",instructor:"",content:"作物表型分析",resources:"无人机多光谱农田数据集",version:"2024年度",website:"https://agrivision.sydney.edu.au"}]),y=w(()=>x.value.filter(s=>{const t=i.value===""||s.name&&s.name.toLowerCase().includes(i.value.toLowerCase())||s.university.toLowerCase().includes(i.value.toLowerCase())||s.instructor&&s.instructor.toLowerCase().includes(i.value.toLowerCase())||s.content&&s.content.toLowerCase().includes(i.value.toLowerCase())||s.resources&&s.resources.toLowerCase().includes(i.value.toLowerCase()),p=d.value===""||s.university.toLowerCase().includes(d.value.toLowerCase()),l=n.value==="all"||n.value==="north-america"&&(s.university.includes("MIT")||s.university.includes("Stanford")||s.university.includes("Berkeley")||s.university.includes("CMU"))||n.value==="europe"&&(s.university.includes("Oxford")||s.university.includes("ETH")||s.university.includes("KTH"))||n.value==="asia"&&(s.university.includes("清华")||s.university.includes("Tsinghua")||s.university.includes("北京")||s.university.includes("Peking")||s.university.includes("KAIST"))||n.value==="oceania"&&(s.university.includes("Melbourne")||s.university.includes("Sydney"));return t&&p&&l}));return(s,t)=>{const p=f;return r(),o("div",null,[k(p),e("div",S,[t[8]||(t[8]=e("header",{class:"mb-10"},[e("h1",{class:"text-3xl font-bold mb-4"},"计算机视觉课程信息"),e("p",{class:"text-gray-600"},"收集国内外高校开设的计算机视觉相关课程信息，帮助学习者找到优质的学习资源。")],-1)),e("div",T,[e("div",H,[e("div",I,[t[2]||(t[2]=e("label",{for:"search",class:"block text-sm font-medium text-gray-700 mb-1"},"搜索课程",-1)),v(e("input",{type:"text",id:"search","onUpdate:modelValue":t[0]||(t[0]=l=>i.value=l),placeholder:"输入课程名称、学校或教师名",class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[C,i.value]])]),e("div",B,[t[4]||(t[4]=e("label",{for:"university",class:"block text-sm font-medium text-gray-700 mb-1"},"学校筛选",-1)),v(e("select",{id:"university","onUpdate:modelValue":t[1]||(t[1]=l=>d.value=l),class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},t[3]||(t[3]=[m('<option value="">全部学校</option><option value="mit">MIT</option><option value="cmu">CMU</option><option value="stanford">Stanford</option><option value="tsinghua">清华大学</option><option value="pku">北京大学</option>',6)]),512),[[M,d.value]])])])]),e("div",A,[e("div",U,[(r(),o(b,null,h(g,l=>e("button",{key:l.id,onClick:u=>n.value=l.id,class:_(["px-4 py-2 rounded-md font-medium",n.value===l.id?"bg-purple-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"])},a(l.name),11,V)),64))])]),e("div",j,[t[7]||(t[7]=e("h2",{class:"text-2xl font-bold mb-4"},"课程列表",-1)),e("div",D,[e("table",K,[t[6]||(t[6]=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"py-3 px-4 border-b text-left"},"课程名称"),e("th",{class:"py-3 px-4 border-b text-left"},"开课学校"),e("th",{class:"py-3 px-4 border-b text-left"},"核心内容"),e("th",{class:"py-3 px-4 border-b text-left"},"特色资源"),e("th",{class:"py-3 px-4 border-b text-left"},"最新版本"),e("th",{class:"py-3 px-4 border-b text-left"},"课程链接")])],-1)),e("tbody",null,[(r(!0),o(b,null,h(y.value,(l,u)=>(r(),o("tr",{key:u,class:"hover:bg-gray-50 border-b"},[e("td",P,a(l.name||"暂无数据"),1),e("td",E,a(l.university),1),e("td",G,a(l.content||"暂无数据"),1),e("td",N,a(l.resources||"暂无数据"),1),e("td",R,[e("span",z,a(l.version||"暂无数据"),1)]),e("td",F,[l.website?(r(),o("a",{key:0,href:l.website,target:"_blank",class:"text-blue-600 hover:underline flex items-center"},t[5]||(t[5]=[e("span",null,"访问",-1),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1)]),8,O)):(r(),o("span",Z,"暂无数据"))])]))),128))])])])]),t[9]||(t[9]=m('<div class="mb-10"><h2 class="text-2xl font-bold mb-4">推荐课程</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-blue-500"><div class="p-6"><div class="flex justify-between items-start mb-2"><h3 class="text-xl font-bold">计算机视觉导论</h3><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">2024冬季</span></div><p class="text-gray-600 mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> Stanford University </p><div class="mb-3 mt-3"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vision Transformers</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">深度学习</span></div><p class="text-gray-700 mb-4">这门课程涵盖了计算机视觉的基础知识，包括图像处理、特征提取、目标检测等内容。特色是Colab实时编程环境。</p><a href="https://www.cs.stanford.edu/~feifeili/cs231n/" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"><span>查看详情</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div><div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-green-500"><div class="p-6"><div class="flex justify-between items-start mb-2"><h3 class="text-xl font-bold">三维视觉与机器人</h3><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">2025春季</span></div><p class="text-gray-600 mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> MIT </p><div class="mb-3 mt-3"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SLAM算法</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">神经辐射场</span></div><p class="text-gray-700 mb-4">这门课程专注于深度学习在计算机视觉中的应用，包括CNN、目标检测、图像分割等。特色是开源Gazebo机器人仿真平台。</p><a href="http://6.869.csail.mit.edu/" target="_blank" class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"><span>查看详情</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div><div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-purple-500"><div class="p-6"><div class="flex justify-between items-start mb-2"><h3 class="text-xl font-bold">医学影像分析</h3><span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">2025春季</span></div><p class="text-gray-600 mb-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> 清华大学 </p><div class="mb-3 mt-3"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">病理切片AI诊断</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">医学成像</span></div><p class="text-gray-700 mb-4">这门课程涵盖了医学影像分析的各个方面，包括病理切片AI诊断。特色是协和医院标注数据集（10万+病例）。</p><a href="http://learn.tsinghua.edu.cn" target="_blank" class="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"><span>查看详情</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div></div></div><div class="mb-10"><h2 class="text-2xl font-bold mb-4">学习路径推荐</h2><div class="bg-white p-6 rounded-lg shadow-md"><div class="mb-6"><h3 class="text-xl font-semibold mb-3 text-purple-700">入门路径</h3><div class="flex flex-col md:flex-row gap-4"><div class="flex-1 border-l-4 border-purple-300 pl-4"><h4 class="font-bold mb-2">第一阶段：基础知识</h4><p class="text-gray-700 mb-2">推荐课程：Stanford CS231n</p><p class="text-gray-600">掌握图像处理基础、卷积神经网络原理和基本视觉任务</p></div><div class="flex-1 border-l-4 border-purple-500 pl-4"><h4 class="font-bold mb-2">第二阶段：实践应用</h4><p class="text-gray-700 mb-2">推荐课程：Berkeley CS294</p><p class="text-gray-600">完成目标检测、图像分割等实际项目，构建完整视觉系统</p></div><div class="flex-1 border-l-4 border-purple-700 pl-4"><h4 class="font-bold mb-2">第三阶段：前沿探索</h4><p class="text-gray-700 mb-2">推荐课程：MIT 6.869</p><p class="text-gray-600">学习神经辐射场、视觉Transformer等前沿技术</p></div></div></div><div class="mb-6"><h3 class="text-xl font-semibold mb-3 text-blue-700">专业方向路径</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><div class="bg-blue-50 p-4 rounded-lg"><h4 class="font-bold mb-2 text-blue-800">医学影像方向</h4><ul class="list-disc pl-5 space-y-1 text-gray-700"><li>基础：KTH DD2423 医疗影像分析</li><li>进阶：清华大学 80240312 医学影像分析</li><li>实践：参与MICCAI挑战赛</li></ul></div><div class="bg-green-50 p-4 rounded-lg"><h4 class="font-bold mb-2 text-green-800">机器人视觉方向</h4><ul class="list-disc pl-5 space-y-1 text-gray-700"><li>基础：牛津大学 Robot Perception</li><li>进阶：MIT 6.869 三维视觉与机器人</li><li>实践：使用Gazebo平台构建SLAM系统</li></ul></div><div class="bg-amber-50 p-4 rounded-lg"><h4 class="font-bold mb-2 text-amber-800">生成式模型方向</h4><ul class="list-disc pl-5 space-y-1 text-gray-700"><li>基础：Stanford CS231n (生成模型部分)</li><li>进阶：香港科技大学 COMP5421</li><li>实践：实现3D扩散模型和神经材质生成</li></ul></div></div></div><div class="bg-purple-50 p-4 rounded-lg border border-purple-200"><h3 class="text-lg font-semibold text-purple-800 mb-2">学习建议</h3><ul class="list-disc pl-5 space-y-1"><li><span class="font-medium">理论与实践结合：</span>每门课程的项目作业至少完成80%</li><li><span class="font-medium">代码复现：</span>尝试复现每门课程中至少3篇核心论文的方法</li><li><span class="font-medium">开源贡献：</span>参与至少一个GitHub上的计算机视觉开源项目</li><li><span class="font-medium">竞赛实践：</span>参加Kaggle或AI City Challenge等视觉竞赛</li></ul></div></div></div><div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-xl font-bold mb-2">贡献信息</h2><p>如果您有更多课程信息想要添加，请按照以下步骤：</p><ol class="list-decimal pl-6 mt-2"><li class="mb-1">Fork 本仓库</li><li class="mb-1">在 resources/courses.md 文件中添加内容</li><li class="mb-1">提交 Pull Request</li></ol></div>',3))])])}}};export{X as default};

import{_ as C}from"./FEvLJAiu.js";import{r as u,j as p,c as i,b as A,a as e,q as y,k as b,l as g,v as S,m as V,F as v,n as m,o,p as I,t as n}from"./bgRjbl0G.js";import{u as T}from"./C07T3uEb.js";import"./DPNqbmI6.js";const N={class:"container mx-auto px-4 py-8"},U={class:"mb-8 bg-white p-4 rounded-lg shadow"},R={class:"flex flex-col md:flex-row gap-4"},B={class:"flex-1"},D={class:"md:w-1/4"},P={class:"mb-8"},M={class:"flex flex-wrap gap-2"},q=["onClick"],G={key:0,class:"mb-10"},H={class:"overflow-x-auto"},Q={class:"min-w-full bg-white border border-gray-300"},E={class:"py-3 px-4"},j={class:"py-3 px-4"},z={class:"py-3 px-4"},F={class:"py-3 px-4"},Z={class:"py-3 px-4"},O=["href"],$={key:1},J={class:"py-3 px-4"},K={key:1,class:"mb-10"},W={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},X={class:"p-6"},Y={class:"text-xl font-bold mb-2"},ee={class:"text-gray-600 mb-2"},se={class:"mb-3"},te={class:"text-gray-600"},re={class:"mb-3"},ie={class:"text-gray-600"},oe=["href"],ae={key:1,class:"inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"},ne={key:2,class:"mb-10"},le={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},ce={class:"p-6"},de={class:"text-xl font-bold mb-2"},ue={class:"text-gray-600 mb-2"},he={class:"mb-3"},ve={class:"text-gray-600"},me={class:"mb-3"},pe={class:"text-gray-600"},ye=["href"],be={key:1,class:"inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"},ke={__name:"labs",setup(ge){T({title:"计算机视觉实验室信息 - Computer Vision Reference",meta:[{name:"description",content:"全球顶尖计算机视觉实验室信息，包括研究方向和代表性成果"}]});const w=[{id:"qs-top50",name:"QS世界排名前50"},{id:"north-america",name:"北美高校"},{id:"china",name:"中国高校"}],h=u("qs-top50"),a=u(""),l=u(""),x=u([{rank:1,name:"CSAIL CV Group",university:"Massachusetts Institute of Technology (MIT)",researchAreas:"手术机器人视觉/非视距成像",website:"http://www.csail.mit.edu",achievements:"CVPR2024最佳论文《Neural Holography》"},{rank:2,name:"Vision & Learning Lab",university:"Stanford University",researchAreas:"多模态基础模型",website:"https://github.com/stanfordvl",achievements:"CLIP-3模型（NeurIPS2024）"},{rank:4,name:"Active Vision Lab",university:"University of Oxford",researchAreas:"动态SLAM/事件相机",website:"https://www.robots.ox.ac.uk",achievements:"SLAMBench 3.0"},{rank:5,name:"BAIR Lab",university:"University of California, Berkeley (UCB)",researchAreas:"具身智能/跨模态生成",website:"https://bair.berkeley.edu",achievements:"DALL-E 5框架"},{rank:7,name:"Vector CV Lab",university:"多伦多大学",researchAreas:"自监督学习",website:"https://vectorinstitute.ai",achievements:"Swin Transformer V3"},{rank:8,name:"CVG Group",university:"ETH Zurich",researchAreas:"城市三维重建",website:"https://ethz.ch/cvg",achievements:"Zurich-3D数据集"}]),f=u([{no:1,name:"CSAIL CV Group",university:"MIT",researchAreas:"手术机器人视觉/非视距成像",website:"http://www.csail.mit.edu",achievements:"CVPR2024最佳论文《Neural Holography》"},{no:2,name:"Vision & Learning Lab",university:"Stanford",researchAreas:"多模态基础模型",website:"https://github.com/stanfordvl",achievements:"CLIP-3模型（NeurIPS2024）"},{no:3,name:"BAIR Lab",university:"UC Berkeley",researchAreas:"具身智能/跨模态生成",website:"https://bair.berkeley.edu",achievements:"DALL-E 5框架"},{no:4,name:"3D Vision Group",university:"UIUC",researchAreas:"三维重建",website:"http://3dvision.illinois.edu",achievements:"ShapeNet 2.0数据集"},{no:5,name:"Dynamic Vision",university:"多伦多大学",researchAreas:"运动分析",website:"https://www.utoronto.ca",achievements:"HockeyAI识别系统"},{no:6,name:"Vector CV Lab",university:"多伦多大学",researchAreas:"自监督学习",website:"https://vectorinstitute.ai",achievements:"Swin Transformer V3"}]),_=u([{rank:7,name:"CVDA Lab",university:"中国香港科技大学",researchAreas:"生成式模型",website:"https://cse.hkust.edu.hk",achievements:"3D-GAN 2.0"},{rank:12,name:"智能视觉实验室",university:"清华大学 / Tsinghua University",researchAreas:"病理诊断",website:"http://learn.tsinghua.edu.cn",achievements:"协和病理数据集"},{rank:19,name:"SCV Lab",university:"南洋理工",researchAreas:"卫星视觉",website:"https://www.ntu.edu.sg",achievements:"TerraSentinel系统"},{rank:4,name:"",university:"浙江大学 / Zhejiang University",researchAreas:"三维视觉/增强现实",website:"https://www.zju.edu.cn",achievements:"AR导航系统"},{rank:5,name:"",university:"西北工业大学 / Northwestern Polytechnical University",researchAreas:"无人机视觉/目标跟踪",website:"https://www.nwpu.edu.cn",achievements:"DroneTrack数据集"}]);p(()=>x.value.filter(r=>{const s=a.value===""||r.name&&r.name.toLowerCase().includes(a.value.toLowerCase())||r.university.toLowerCase().includes(a.value.toLowerCase())||r.researchAreas&&r.researchAreas.toLowerCase().includes(a.value.toLowerCase()),c=l.value===""||l.value==="north-america"&&(r.university.includes("MIT")||r.university.includes("Carnegie")||r.university.includes("Stanford")||r.university.includes("California"))||l.value==="europe"&&(r.university.includes("Oxford")||r.university.includes("Cambridge"))||l.value==="asia"&&(r.university.includes("Tokyo")||r.university.includes("Singapore"))||l.value==="china"&&(r.university.includes("Tsinghua")||r.university.includes("Peking")||r.university.includes("Shanghai"));return s&&c}));const k=p(()=>f.value.filter(r=>{const s=a.value===""||r.name&&r.name.toLowerCase().includes(a.value.toLowerCase())||r.university.toLowerCase().includes(a.value.toLowerCase())||r.researchAreas&&r.researchAreas.toLowerCase().includes(a.value.toLowerCase()),c=l.value===""||l.value==="north-america";return s&&c})),L=p(()=>_.value.filter(r=>{const s=a.value===""||r.name&&r.name.toLowerCase().includes(a.value.toLowerCase())||r.university.toLowerCase().includes(a.value.toLowerCase())||r.researchAreas&&r.researchAreas.toLowerCase().includes(a.value.toLowerCase()),c=l.value===""||l.value==="china"||l.value==="asia";return s&&c}));return(r,s)=>{const c=C;return o(),i("div",null,[A(c),e("div",N,[s[13]||(s[13]=e("header",{class:"mb-10"},[e("h1",{class:"text-3xl font-bold mb-4"},"计算机视觉实验室信息"),e("p",{class:"text-gray-600"},"收集全球顶尖高校的计算机视觉实验室信息，帮助研究人员了解各个实验室的研究方向、成果和特色。")],-1)),e("div",U,[e("div",R,[e("div",B,[s[2]||(s[2]=e("label",{for:"search",class:"block text-sm font-medium text-gray-700 mb-1"},"搜索实验室",-1)),g(e("input",{type:"text",id:"search","onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),placeholder:"输入实验室名称、所属大学或研究方向",class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[S,a.value]])]),e("div",D,[s[4]||(s[4]=e("label",{for:"region",class:"block text-sm font-medium text-gray-700 mb-1"},"地区筛选",-1)),g(e("select",{id:"region","onUpdate:modelValue":s[1]||(s[1]=t=>l.value=t),class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},s[3]||(s[3]=[b('<option value="">全部地区</option><option value="north-america">北美</option><option value="europe">欧洲</option><option value="asia">亚洲</option><option value="china">中国</option>',5)]),512),[[V,l.value]])])])]),e("div",P,[e("div",M,[(o(),i(v,null,m(w,t=>e("button",{key:t.id,onClick:d=>h.value=t.id,class:I(["px-4 py-2 rounded-md font-medium",h.value===t.id?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"])},n(t.name),11,q)),64))])]),h.value==="qs-top50"?(o(),i("div",G,[s[6]||(s[6]=e("h2",{class:"text-2xl font-bold mb-4"},"QS世界大学排名前50名院校",-1)),e("div",H,[e("table",Q,[s[5]||(s[5]=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"py-3 px-4 border-b text-left"},"QS排名"),e("th",{class:"py-3 px-4 border-b text-left"},"实验室名称"),e("th",{class:"py-3 px-4 border-b text-left"},"所属大学"),e("th",{class:"py-3 px-4 border-b text-left"},"主要研究方向"),e("th",{class:"py-3 px-4 border-b text-left"},"实验室主页"),e("th",{class:"py-3 px-4 border-b text-left"},"代表性成果")])],-1)),e("tbody",null,[(o(!0),i(v,null,m(r.filteredQsLabs,(t,d)=>(o(),i("tr",{key:d,class:"hover:bg-gray-50 border-b"},[e("td",E,n(t.rank||"暂无数据"),1),e("td",j,n(t.name||"暂无数据"),1),e("td",z,n(t.university),1),e("td",F,n(t.researchAreas||"暂无数据"),1),e("td",Z,[t.website?(o(),i("a",{key:0,href:t.website,target:"_blank",class:"text-blue-600 hover:underline"},"访问",8,O)):(o(),i("span",$,"暂无数据"))]),e("td",J,n(t.achievements||"暂无数据"),1)]))),128))])])])])):y("",!0),h.value==="north-america"?(o(),i("div",K,[s[9]||(s[9]=e("h2",{class:"text-2xl font-bold mb-4"},"北美高校计算机视觉实验室",-1)),e("div",W,[(o(!0),i(v,null,m(k.value,(t,d)=>(o(),i("div",{key:d,class:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"},[e("div",X,[e("h3",Y,n(t.name||t.university),1),e("p",ee,n(t.university),1),e("div",se,[s[7]||(s[7]=e("h4",{class:"font-semibold text-gray-700"},"研究方向：",-1)),e("p",te,n(t.researchAreas||"暂无数据"),1)]),e("div",re,[s[8]||(s[8]=e("h4",{class:"font-semibold text-gray-700"},"代表成果：",-1)),e("p",ie,n(t.achievements||"暂无数据"),1)]),t.website?(o(),i("a",{key:0,href:t.website,target:"_blank",class:"inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"}," 访问实验室 ",8,oe)):(o(),i("span",ae,"暂无网站"))])]))),128))])])):y("",!0),h.value==="china"?(o(),i("div",ne,[s[12]||(s[12]=e("h2",{class:"text-2xl font-bold mb-4"},"中国高校计算机视觉实验室",-1)),e("div",le,[(o(!0),i(v,null,m(L.value,(t,d)=>(o(),i("div",{key:d,class:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"},[e("div",ce,[e("h3",de,n(t.name||t.university),1),e("p",ue,n(t.university),1),e("div",he,[s[10]||(s[10]=e("h4",{class:"font-semibold text-gray-700"},"研究方向：",-1)),e("p",ve,n(t.researchAreas||"暂无数据"),1)]),e("div",me,[s[11]||(s[11]=e("h4",{class:"font-semibold text-gray-700"},"代表成果：",-1)),e("p",pe,n(t.achievements||"暂无数据"),1)]),t.website?(o(),i("a",{key:0,href:t.website,target:"_blank",class:"inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"}," 访问实验室 ",8,ye)):(o(),i("span",be,"暂无网站"))])]))),128))])])):y("",!0),s[14]||(s[14]=b('<div class="mt-12 bg-gray-100 p-6 rounded-lg"><h2 class="text-xl font-bold mb-2">贡献信息</h2><p>如果您有更多实验室信息想要添加，请按照以下步骤：</p><ol class="list-decimal pl-6 mt-2"><li class="mb-1">Fork 本仓库</li><li class="mb-1">在 resources/labs.md 文件中添加内容</li><li class="mb-1">提交 Pull Request</li></ol></div>',1))])])}}};export{ke as default};

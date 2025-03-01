<template>
  <nav class="bg-gray-800 text-white py-3 mb-6 shadow-md">
    <div class="container mx-auto px-4 flex flex-wrap items-center justify-between">
      <!-- 网站标题/Logo -->
      <NuxtLink to="/" class="text-xl font-bold hover:text-gray-300 transition-colors">
        计算机视觉资源参考
      </NuxtLink>
      
      <!-- 导航链接 -->
      <div class="flex space-x-4 mt-2 md:mt-0">
        <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-gray-700 transition-colors" active-class="bg-gray-700">
          首页
        </NuxtLink>
        <NuxtLink to="/labs" class="px-3 py-2 rounded hover:bg-gray-700 transition-colors" active-class="bg-gray-700">
          实验室
        </NuxtLink>
        <NuxtLink to="/professors" class="px-3 py-2 rounded hover:bg-gray-700 transition-colors" active-class="bg-gray-700">
          教授
        </NuxtLink>
        <NuxtLink to="/courses" class="px-3 py-2 rounded hover:bg-gray-700 transition-colors" active-class="bg-gray-700">
          课程
        </NuxtLink>
        <NuxtLink to="/journals" class="px-3 py-2 rounded hover:bg-gray-700 transition-colors" active-class="bg-gray-700">
          期刊会议
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 导航栏组件不需要特殊逻辑
</script>
<template>
    <div class="app">
        <h2 class="title">Vue路由测试</h2>

        <!-- 导航区 -->
        <div class="navigate">
            <!-- <a href="#" class="active">首页</a>
            <a href="#">新闻</a>
            <a href="#">关于</a> -->

            <RouterLink to="/home" active-class="active">首页</RouterLink>
            
            <!-- <RouterLink to="/news" active-class="active">新闻</RouterLink> -->
            <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>

            <RouterLink :to="{name:'xinwen2'}" active-class="active">新闻2</RouterLink>

            <RouterLink :to="{name:'xinwen3'}" active-class="active">新闻3</RouterLink>

            <!-- <RouterLink to="/about" active-class="active">关于</RouterLink> -->
            <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
        </div>

        <!-- 展示区 -->
        <div class="main-content">
            <!-- 路由组件默认是被‘卸载’的，需要的时候再次进行挂载 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>

// 局部注册组件。但是setup内，不需要使用export default，这是setup的语法糖
// export default {
//     components: {Person}
// }

import {RouterView, RouterLink} from 'vue-router'
</script>

<style scoped>
/* 1. 整体容器：限制最大宽度并居中，提供舒适的阅读体验 */
.app {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

/* 2. 标题样式优化 */
.title {
  margin-bottom: 24px;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 600;
}

/* 3. 导航区：使用 Flexbox 实现横向排列 */
.navigate {
  display: flex;
  gap: 10px; /* 页签之间的间距 */
  margin-bottom: 24px;
  border-bottom: 2px solid #f0f0f0; /* 底部视觉分割线 */
  padding-bottom: 10px;
}

/* 4. 导航链接基础样式 */
.navigate a {
  text-decoration: none;
  color: #606266;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease; /* 平滑过渡效果 */
}

/* 5. 导航链接悬停效果 */
.navigate a:hover {
  color: #409eff;
  background-color: #ecf5ff;
}

/* 6. 导航链接激活状态（针对你添加的 .active 类） */
/* 如果你后续决定让 Vue Router 自动帮你管理高亮状态，
只需把 .active 改回 .router-link-active 即可 */
.navigate a.active {
  color: #fff;
  background-color: #409eff;
}

/* 7. 展示区：卡片式背景，让内容更聚焦 */
.main-content {
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  padding: 24px;
  min-height: 300px; /* 保证内容区有基础高度 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  color: #333;
  line-height: 1.6;
}
</style>
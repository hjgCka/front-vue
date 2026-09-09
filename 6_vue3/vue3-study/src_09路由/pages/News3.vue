<template>
    <!-- 1. 最外层大容器：控制整个页面的垂直布局 -->
    <div class="news-page">
        <!-- 2. 顶部标题区：独占一行 -->
        <h2 class="page-title">欢迎来到News页面</h2>

        <!-- 3. 下方内容区容器：控制左右水平布局 -->
        <div class="main-container">
            <!-- 左侧导航区 -->
            <ul class="nav-list">
                <li v-for="item in newsList" :key="item.id">
                    <!-- <RouterLink :to="`/news3/detail/${item.id}/${item.title}/${item.content}`">
                        {{ item.title }}
                    </RouterLink> -->

                    <RouterLink :to="{
                        // 这里只能用name，而不能用path
                        name: 'xiangqing3',
                        // 传参不支持对象和数组，且占位的参数必须要传。可传可不传的参数，要加上问号。
                        params: {
                            id: item.id,
                            title: item.title,
                            content: item.content
                        }
                    }">
                        {{ item.title }}
                    </RouterLink>
                </li>
            </ul>

            <!-- 右侧展示区 -->
            <div class="news-content">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {reactive} from 'vue'

    const newsList = reactive([
        {id:'abcde1', title:'篮球比赛', content:'中国男篮夺得冠军'},
        {id:'abcde2', title:'足球比赛', content:'中国男足夺得冠军'},
        {id:'abcde3', title:'好看的电影', content:'欢迎来到龙餐馆'},
        {id:'abcde4', title:'好听的歌', content:'单车'},
        {id:'abcde5', title:'好吃的食物', content:'虾仁'}
    ])
</script>

<style scoped>
/* 1. 最外层容器：去掉 height: 100vh，让它根据内容自然撑开 */
.news-page {
  display: flex;
  flex-direction: column;
  /* 删除 height: 100vh; */
}

/* 2. 下方主容器：去掉 flex: 1，让它不再强制占满剩余空间 */
.main-container {
  display: flex;
  /* 删除 flex: 1; */
  /* overflow: hidden; 也可以视情况去掉 */
}

/* 3. 左侧导航区：去掉高度限制和独立滚动 */
.nav-list {
  list-style: none;
  padding: 16px 0;
  margin: 0;
  width: 200px;
  flex-shrink: 0;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  /* 删除 overflow-y: auto; */
}

/* 4. 右侧内容区保持自适应 */
.news-content {
  flex: 1;
  padding: 16px 24px;
  background-color: #fff;
}
</style>
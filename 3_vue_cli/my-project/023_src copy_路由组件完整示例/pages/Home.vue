<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
        </li>
      </ul>

      <!-- 不写include，这里所有的组件都会被缓存。这里要写组件对应名称。 -->
      <!-- 这个include支持数组写法，此时要绑定到include。简单地用逗号分隔也可以 -->
      <!-- <keep-alive :include="['News']"> -->
      <keep-alive include="News,Message">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("home组件挂载完毕", this);
  },
  beforeDestroy() {
    console.log("Home组件即将被销毁");
  },
};
</script>

<style>
</style>
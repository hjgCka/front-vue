<template>
  <div class="container">
    <Category title="食物">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
      <a slot="footer" href="">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <a slot="footer" href="">单机游戏</a>
      <a slot="footer" href="">网络游戏</a>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
      <template v-slot:footer>
        <a href="">经典</a>
        <a href="">热门</a>
        <a href="">分类</a>
        <h4>欢迎观影</h4>
      </template>
      <!-- <a slot="footer" href="">经典</a>
      <a slot="footer" href="">热门</a>
      <a slot="footer" href="">分类</a>
      <h4 slot="footer">欢迎观影</h4> -->
    </Category>

    <Demo>
      <template v-slot:default="slotProps">
        <ul>
          <li v-for="(item, index) in slotProps.dgames" :key="index">{{item}}</li>
        </ul>
      </template>
    </Demo>

    <Demo>
      <!-- {dgames} 这里相当于解构赋值的左边 -->
      <template v-slot="{dgames}">
        <ol>
          <li v-for="(item, index) in dgames" :key="index">{{item}}</li>
        </ol>
      </template>
    </Demo>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Demo from "./components/Demo.vue"

export default {
  name: "App",
  components: {
    Category,
    Demo
  },
  data() {
    return {
      foods: ["烧烤", "火锅", "冰淇淋", "西餐"],
      games: ["红警", "CF", "LOL", "Dota"],
      films: ["教父", "速度与激情", "钢铁侠", "流浪地球"],
    };
  },
};
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
</style>
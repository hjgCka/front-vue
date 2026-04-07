<template>
  <div class="container">
    <Category title="食物">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
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
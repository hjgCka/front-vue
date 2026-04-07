<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-show="users.length" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="isFirst">欢迎使用</h1>
    <!-- 展示加载中 -->
    <h1 v-show="isLoading">加载中</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="errMsg">{{errMsg}}</h1>

    <!-- <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="../assets/logo.svg" style="width: 100px" />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="../assets/logo.svg" style="width: 100px" />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="../assets/logo.svg" style="width: 100px" />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="../assets/logo.svg" style="width: 100px" />
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="../assets/logo.svg" style="width: 100px" />
      </a>
      <p class="card-text">xxxxxx</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    // 页面dom，由数据驱动
    return {
        isFirst: true,
        isLoading: false,
        errMsg: '',
        users: [],
    };
  },
  mounted() {
    this.$bus.$on("showUsers", (userList) => {
      console.log("List组件收到数据", userList);
      this.users = userList;
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
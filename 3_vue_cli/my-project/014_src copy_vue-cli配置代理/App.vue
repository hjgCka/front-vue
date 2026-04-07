<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  components: {
  },
  methods: {
    getStudents() {
      //协议名、主机名（域名, ip）、端口号需要一致才算不跨域
      //这里配置了转发，如果8080本身就有对应路径，就不会进行转发。public文件夹是8080的根目录
      axios.get('http://localhost:8080/hjg/cka/get/properties').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    }
  }
};
</script>

<style>

</style>
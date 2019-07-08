<template>
  <el-container>
    <Navbar></Navbar>
    <el-container class="is-vertical">
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
#app {
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-container {
  height: 100%;
}
.el-main {
  background: #f4f6f6;
}
html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}

</style>
<script>
  import Navbar from "./components/Navbar";
  export default {
    components: {Navbar}
  }
</script>
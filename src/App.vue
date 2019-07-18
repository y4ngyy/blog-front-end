<template>
  <el-container>
    <Navbar ></Navbar>
    <el-container class="is-vertical">
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
#app {
  font-family: -Helvetica, STXihei, "Microsoft YaHei", Arial, SimSun,sans-serif;
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
  line-height: 35px;
}
code {
  font-family: "Source Code Pro", Monaco,sans-serif;
  background: #f4f6f6;
  padding: 3px;
}
article {
  font-family: Helvetica, STXihei, "Microsoft YaHei", Arial, SimSun,Monaco,sans-serif;
}
.el-card {
  padding: 50px;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 0;
  position: relative;
}
</style>
<script>
  import Navbar from "./components/Navbar";
  export default {
    components: {Navbar}
  }
</script>
<template>
  <el-container>
    <Navbar class="hidden-sm-and-down"></Navbar>
    <el-container class="is-vertical">
      <navbar-mobile class="hidden-md-and-up"></navbar-mobile>
      <el-main>
        <router-view></router-view>
        <my-footer></my-footer>
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
table {
  width: 100%;
  border: 1px solid #dedede;
  margin: 15px 0;
  border-collapse: collapse;
}
table tr {
  height:35px;
}
table th,td{
  border: 1px solid #dedede;
  padding: 0 10px;
}
  table thead tr {
    background: #f8f8f8;
  }
blockquote {
  background: #f6f6f6;
  border-left: 5px solid #657b83;
  padding:15px 20px;
  margin-top: 10px;
}
</style>
<script>
  import Navbar from "./components/Navbar";
  import NavbarMobile from "./components/NavbarMobile";
  import MyFooter from "./components/MyFooter";
  export default {
    components: {MyFooter, NavbarMobile, Navbar}
  }
</script>
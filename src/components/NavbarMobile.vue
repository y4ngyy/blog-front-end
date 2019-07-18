<template>
    <el-header style="height: auto">
        <i class="el-icon-menu menu-button" @click="switchMenu"></i>
        <span class="header-name">y4ngyy</span>
        <el-collapse-transition >
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#63aabc"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    v-show="menu">
                <router-link to="/">
                    <el-menu-item index="1">
                        <i class="el-icon-house"></i>
                        <span slot="title">Home</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/archive">
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span slot="title">Archive</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/categories">
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Categories</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/about">
                    <el-menu-item index="4">
                        <i class="el-icon-user"></i>
                        <span slot="title">About Me</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/test">
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Test</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-collapse-transition>
    </el-header>
</template>

<script>
    import ElCollapseTransition from "element-ui/lib/transitions/collapse-transition";
    export default {
        name: "Navbar-Mobile",
        components: {ElCollapseTransition},
        data: function () {
            return {
                menu:false,
            }
        },
        methods:{
            switchMenu: function () {
                this.menu = !this.menu;
            }
        }
    }
</script>

<style scoped>
    @import url(http://fonts.googleapis.com/css?family=Condiment);
    .el-header {
        background: #63aabc;
        color: white;
        text-align: center;
        height: 100px;

    }

    /*.el-header i:first-child {*/
    /*    float: left;*/
    /*}*/
    /*.el-menu-item i {*/
    /*    float: none;*/
    /*}*/
    .header-name{
        display: block;
        font-size: 24px;
        padding: 10px;
        font-family: Condiment, sans-serif;
    }
    .menu-button {
        float: left;
        margin-top: 20px;
        font-size:20px;
    }
    .el-menu a {
        text-decoration: none;
    }
    .el-menu {
        border: none;
    }
</style>
<template>
    <el-aside>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#63aabc"
                text-color="#fff"
                active-text-color="#ffd04b">
            <div class="intro">
                <el-avatar src="https://y4ngyy.xyz/assets/avatar.jpg"></el-avatar>
                <h1>y4ngyy</h1>
            </div>
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
<!--            <router-link to="/test">-->
<!--                <el-menu-item index="5">-->
<!--                    <i class="el-icon-setting"></i>-->
<!--                    <span slot="title">Test</span>-->
<!--                </el-menu-item>-->
<!--            </router-link>-->
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
.el-menu {
    height: 100%;
    text-align: center;
}

.el-avatar {
    width: 140px;
    height: 140px;
}
.el-menu-item i{
    color: white;
}
.intro {
    padding-top: 100px;
    text-align: center;
    color: white;
}
.intro h1{
    margin-top: 0px;
    font-size: 24px;
}
a {
    text-decoration: none;
}
</style>

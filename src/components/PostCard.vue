<template>
    <div>
        <el-card shadow="never" v-for="(post,index) in posts" :key="index">
            <div class="color-block"></div>
            <h2><a v-bind:href="post.url">{{ post.title }}</a></h2>
            <div class="date">
                <i class="el-icon-date"></i>
                <span>{{ post.date }}</span>
            </div>
            <el-divider></el-divider>
            <div v-html="post.summary" v-highlight></div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "postCard",
        props:['posts'],
    }
</script>

<style scoped>
.el-card {
    margin-left: 30px;
    margin-right: 30px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 0;
    position: relative;
    margin-bottom: 30px;
}
.color-block {
    width: 10px;
    height: 80px;
    position: absolute;
    left: 0;
    top: 0;
    background: #3fceff;
}
.date {
    position: absolute;
    right: 50px;
    top: 20px;
}
.date span {
    margin-left: 5px;
}
a {
    text-decoration: none;
    color: black;
}
</style>

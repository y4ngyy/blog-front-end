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
@media screen and (min-width: 769px){
    .el-card {
        margin-left: 30px;
        margin-right: 30px;
        padding-left: 50px;
        padding-right: 50px;
        margin-bottom: 30px;
    }
    .date {
        position: absolute;
        right: 50px;
        top: 20px;
    }
    .color-block {
        width: 10px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        background: #3fceff;
    }
}
.el-card {
    border-radius: 0;
    position: relative;
}
@media screen and (max-width: 768px){
    .el-card {
        margin-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 0.9em;
    }
    .color-block {
        width: 8px;
        height: 50px;
        position: absolute;
        left: 0;
        top: 0;
        background: #3fceff;
    }
}


.date span {
    margin-left: 5px;
}
a {
    text-decoration: none;
    color: black;
}
</style>

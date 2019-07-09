<template>
    <el-card shadow="never">
        <div class="color-block"></div>
        <h2>文章标题</h2>
        <div class="date">
            <i class="el-icon-date"></i>
            <span>2019-7</span>
        </div>
        <el-divider></el-divider>
        <div class="">摘录</div>
    </el-card>
</template>

<script>
    export default {
        name: "postCard"
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
</style>

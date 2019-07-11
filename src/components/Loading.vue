<template>
    <el-card shadow="never">
        <div class="loading">
            <i class="el-icon-loading"></i>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
.loading {
    text-align: center;
    font-size: 50px;
}
.el-card {
    border-radius: 0;
}
</style>
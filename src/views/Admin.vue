<template>
    <el-card shadow="never">
        <el-form label-width="80px" v-if="!admin">
            <el-form-item label="用户名">
                <el-input v-model="username" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password" show-password clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button v-on:click="sendAdminInfo" type="primary">确定</el-button>
            </el-form-item>
        </el-form>
        <el-form v-else>
            <el-upload
                    class="upload-demo"
                    action="/api/upload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: "Admin",
        data: function() {
            return {
                admin: true,
                username:'请输入管理员用户名',
                password:'请输入管理员密码',
            }
        },
        methods: {
            sendAdminInfo: function() {

            },
            uploadFile: function () {

            }
        }
    }
</script>

<style scoped>
.el-card{
    border-radius: 0;
    padding: 100px;
}
.el-form{
    text-align: center;
}

</style>
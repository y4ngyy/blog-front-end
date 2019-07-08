<template>
    <el-card shadow="never">
        <div class="text-center">
        <h1>文章标题</h1>
        <div class="date">
            <i class="el-icon-date"></i>
            <span>2019-7-9</span>
        </div>
        </div>
        <el-divider></el-divider>
        <article v-html="articleData">
        </article>
    </el-card>
</template>

<script>
    export default {
        name: "postCard",
        data: function() {
            return {
                articleData: ''
            }
        },
        created: function() {
          this.getPost()
        },
        methods: {
            getPost: function () {
                this.articleData = '<p><i class="el-icon-loading"></i></p>';
                var absoluteUrl = document.location.toString();
                var relativeUrl = absoluteUrl.split('//')[1];
                var firstSplitIndex = relativeUrl.indexOf('/');
                relativeUrl = relativeUrl.substring(firstSplitIndex);
                var url = "/api" + relativeUrl;
                this.$http({
                    method: 'get',
                    url: url,
                }).then((response) => {
                    this.articleData = response;
                })
            }
        }
    }

</script>

<style scoped>
h1 {
    font-size: 34px;
    font-weight: 700;
}
h2 {
    font-size: 24px;
    font-weight: 700;
}
.date {
    font-size: 20px;
    margin-top: 10px;
}
.text-center {
    text-align: center;
}
</style>

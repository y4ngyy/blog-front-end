<!--used for Test-->
<template>
    <el-card shadow="never">
        <div class="color-block"></div>
        <div class="text-center article_head">
            <h1>文章标题</h1>
            <div class="date">
                <i class="el-icon-date"></i>
                <span>2019-7-9</span>
            </div>
        </div>
        <el-divider></el-divider>
        <article v-html="articleData" v-highlight>
        </article>
    </el-card>
</template>

<script>
    export default {
        name: "article",
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
                // this.articleData = '<p><i class="el-icon-loading"></i></p>';
                // var absoluteUrl = document.location.toString();
                // var relativeUrl = absoluteUrl.split('//')[1];
                // var firstSplitIndex = relativeUrl.indexOf('/');
                // relativeUrl = relativeUrl.substring(firstSplitIndex);
                var relativeUrl = this.$route.name;
                var url = "/api/" + relativeUrl;
                this.$http({
                    method: 'get',
                    url: url,
                }).then((response) => {
                    this.articleData = response.data;
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
    .el-card {
        padding: 50px;
        margin-right: 30px;
        margin-left: 30px;
        border-radius: 0;
        position: relative;
    }
    .date {
        position: absolute;
        top: -50px;
        right: 60px;
        font-size: 16px;
        margin-top: 10px;
        color: #818383;

    }
    .text-center {
        text-align: center;
    }
    .article_head {
        position: relative;
    }
    .color-block {
        width: 15px;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0;
        background: #3fceff;
    }
</style>

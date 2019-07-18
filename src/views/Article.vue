<!--used for Test-->
<template>
    <div>
        <loading v-if="!complete"></loading>
        <el-card shadow="never" v-else>
            <div class="color-block"></div>
            <div class="text-center article_head">
                <h1>{{ title }}</h1>
                <div class="date">
                    <i class="el-icon-date"></i>
                    <span>{{ date }}</span>
                </div>
            </div>
            <el-divider></el-divider>
            <article v-html="articleData" v-highlight>
            </article>
        </el-card>
    </div>
</template>

<script>
    import Loading from "../components/Loading";
    export default {
        name: "article",
        components: {Loading},
        data: function() {
            return {
                articleData: '',
                title: '',
                date: '',
                complete: false
            };
        },
        created: function() {
            this.getArticle()
        },
        methods: {
            getArticle: function () {
                // this.articleData = '<p><i class="el-icon-loading"></i></p>';
                // var absoluteUrl = document.location.toString();
                // var relativeUrl = absoluteUrl.split('//')[1];
                // var firstSplitIndex = relativeUrl.indexOf('/');
                // relativeUrl = relativeUrl.substring(firstSplitIndex);
                var relativeUrl = this.$route.name + '/'+this.$route.params.articleName;
                var url = "/api/" + relativeUrl;
                this.$http({
                    method: 'get',
                    url: url,
                }).then((response) => {
                    var res = response.data;
                    this.title = res.title;
                    this.date = res.date;
                    this.articleData = res.content;
                    this.complete=true;
                })
            }
        }
    }

</script>

<style scoped>
    @media screen and  (min-width: 769px){
        .el-card {
            padding: 50px;
            margin-right: 30px;
            margin-left: 30px;

        }
        .date {
            position: absolute;
            top: -50px;
            right: 60px;
            font-size: 16px;
            margin-top: 10px;
            color: #818383;
        }
        .color-block {
            width: 15px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 0;
            background: #3fceff;
        }
        h1 {
            font-size: 34px;
            font-weight: 700;
        }
        h2 {
            font-size: 24px;
            font-weight: 700;
        }
    }
    .el-card {
        border-radius: 0;
        position: relative;
    }
    @media screen and (max-width: 768px){
        .el-card{
            padding-left: 10px;
            padding-right: 10px;
        }
        .color-block {
            width: 10px;
            height: 80px;
            position: absolute;
            left: 0;
            top: 0;
            background: #3fceff;
        }
        h1 {
            font-size: 24px;
            font-weight: 700;
        }
        h2 {
            font-size: 16px;
            font-weight: 700;
        }
        article {
            font-size: 0.9em;
        }
    }

    .date span {
        margin-left: 5px;
    }
    .text-center {
        text-align: center;
    }
    .article_head {
        position: relative;
    }

</style>

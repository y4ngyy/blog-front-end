<template>
    <loading v-if="!complete"></loading>
    <el-card shadow="never" v-else>
        <el-timeline>
            <el-timeline-item  v-for="article in articles" :key="article" :timestamp="article.date" placement="top">
                <p><a :href="article.url"> {{ article.title }}</a></p>
            </el-timeline-item>
        </el-timeline>
    </el-card>
</template>

<script>
    import Loading from "../components/Loading";
    export default {
        name: "Archive",
        components: {Loading},
        data: function() {
            return {
                complete: false,
                articles:[]
            }
        },
        created() {
            this.getArticleInfo();
        },
        methods:{
            getArticleInfo: function () {
                this.$http({
                    method:"get",
                    url:"/api/get-article-info"
                }).then((response)=> {
                    var articleInfo = response.data;
                    for (var item in articleInfo) {
                        articleInfo[item].url = '/article/'+item;
                    }
                    var tempArticles = [];
                    for (item in articleInfo) {
                        tempArticles.push(articleInfo[item]);
                    }
                    tempArticles.sort(function (b, a) {
                       var aYear = a.date.split('-')[0];
                       var bYear = b.date.split('-')[0];
                       if ( aYear-bYear === 0) {
                           var aMonth = a.date.split('-')[1];
                           var bMonth = b.date.split('-')[1];
                           if (aMonth - bMonth === 0) {
                               var aDay = a.date.split('-')[2];
                               var bDay = b.date.split('-')[2];
                               return aDay-bDay;
                           } else {
                               return aMonth-bMonth;
                           }
                       } else {
                           return aYear-bYear;
                       }
                    });
                    for (var i=0;i<tempArticles.length;i++){
                        this.$set(this.articles, i, tempArticles[i]);
                    }
                    this.complete = true;
                })
            }
        }

    }
</script>

<style scoped>
    a{
       text-decoration: none;
        color: black;
    }
    .el-card {
      border-radius: 0;
    }
</style>

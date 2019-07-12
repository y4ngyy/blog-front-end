<template>
    <div>
    <loading v-if="!complete"></loading>
    <el-card shadow="never" v-else>
        <div v-if="categories">
            <ul>
                <li v-for="item in categoriesInfo" :key="item"><a :href="item.url">{{ item.name }}({{ item.amount }})</a></li>
            </ul>
        </div>
        <div v-else>
            <ul>
                <li v-for="item in articles" :key="item"><a :href="item.url">{{item.title}}({{item.date}})</a></li>
            </ul>
        </div>
    </el-card>
    </div>
</template>

<script>
    import Loading from "../components/Loading";
    export default {
        name: "Categories",
        components: {Loading},
        data: function () {
            return {
                complete: false,
                categories: true,
                articles:[],
                categoriesInfo:[]
            }
        },
        created() {
            this.getArticleInfo();
        },
        methods: {
            getArticleInfo: function () {
                this.$http({
                    method: 'get',
                    url:'/api/get-article-info'
                }).then((response)=>{
                    var articleInfo = response.data;
                    this.categories = this.$route.name === 'categories';
                    if (this.categories) {
                        var categoryNames = [];
                        var articleAmount = [];
                        for (var k in articleInfo) {
                            if (categoryNames.indexOf(articleInfo[k].categories) === -1) {
                                categoryNames.push(articleInfo[k].categories);
                                articleAmount.push(1);
                            } else {
                                articleAmount[categoryNames.indexOf(articleInfo[k].categories)]++;
                            }
                        }
                        for (var i=0;i<categoryNames.length;i++) {
                            var tempItem = {};
                            tempItem.url= "/categories/" + categoryNames[i];
                            tempItem.name= categoryNames[i];
                            tempItem.amount = articleAmount[i];
                            this.$set(this.categoriesInfo, i, tempItem);
                        }
                    } else {
                        var categoryName = this.$route.params.categoryName;
                        var j = 0;
                        for (var key in articleInfo) {
                            if (articleInfo[key].categories === categoryName) {
                                var temp= {};
                                temp.title = articleInfo[key].title;
                                temp.date = articleInfo[key].date;
                                temp.url = '/article/'+ temp.title;
                                this.$set(this.articles, j++, temp);
                            }
                        }
                    }
                    this.complete = true;
                })
            }
        }

    }
</script>

<style scoped>
.el-card{
    border-radius: 0;
    margin-right: 30px;
    margin-left: 30px;
    padding: 50px;
}
a {
    color: #2fa3c5;
}
</style>

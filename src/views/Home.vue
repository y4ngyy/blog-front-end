<template>
  <loading v-if="!complete"></loading>
  <post-card :posts="posts" v-else></post-card>
</template>

<script>
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

export default {
  name: 'home',
  components: {
    Loading,
    PostCard,
  },
  data: function () {
    return {
      complete: false,
      articleDataCache: null,
      posts: []
    }
  },
  created() {
    this.getArticleInfo();
  },
  methods: {
    getArticleInfo: function() {
      this.$http({
        method: 'get',
        url: '/api/get-article-info'
      }).then((response) => {
        // 显示最新的10篇文章
          this.articleDataCache = response.data;
          var i =0;
          for (var key in this.articleDataCache) {
            this.articleDataCache[key].url = '/article/'+key;
          }
          var tempArticles = [];
          for (var item in this.articleDataCache) {
            tempArticles.push(this.articleDataCache[item]);
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
          for (key in tempArticles) {
            this.$set(this.posts, i++, tempArticles[key]);
            if (i === 10) break;
          }
          this.complete = true;
      })
    }
  }

}
</script>

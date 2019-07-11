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
          this.articleDataCache = response.data;
          var i =0;
          for (var key in this.articleDataCache) {
            this.articleDataCache[key].url = '/article/'+key;
          }
          for (key in this.articleDataCache) {
            this.$set(this.posts, i++, this.articleDataCache[key]);
            if (i === 10) break;
          }
          this.complete = true;
      })
    }
  }

}
</script>

<template>
  <post-card :posts="posts"></post-card>
</template>

<script>
import PostCard from "../components/PostCard";

export default {
  name: 'home',
  components: {
    PostCard,
  },
  data: function () {
    return {
      complete: false,
      articleDataCache: null,
      posts: [{title:"abcd",date:"abcd",summary:"<p>abcd</p>"}]
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
          for (var key in this.articleDataCache) {
            console.log(this.articleDataCache[key].summary);
            this.$set(this.posts, i++, this.articleDataCache[key]);
            if (i === 10) break;
          }
          console.log(this.posts);
      })
    }
  }

}
</script>

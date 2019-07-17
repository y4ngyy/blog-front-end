import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('./views/Archive.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue')
    },
    {
      path:'/categories/:categoryName',
      name: 'subcategory',
      component: () => import('./views/Categories.vue')
    }
      ,
    {
      path: '/article/:articleName',
      name: 'article',
      component: () => import('./views/Article.vue')
    },
    {
      path:'/y4ngyy',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Article.vue')
    }
  ]
})

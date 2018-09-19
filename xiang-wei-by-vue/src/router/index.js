import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index/index.vue';
import About from '../views/about/about.vue';
import News from '../views/news/news.vue';
import Partners from '../views/partners/parthners.vue';
import Produce from '../views/produce/produce.vue';
import Technical from '../views/technical/technical.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/partners',
      component: Partners
    },
    {
      path: '/produce',
      component: Produce
    },
    {
      path: '/technical',
      component: Technical
    }
  ]
});

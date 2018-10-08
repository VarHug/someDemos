import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/index/index.vue';
import About from '../components/about/about.vue';
import Contact from '../components/contact/contact.vue';
import Server from '../components/server/server.vue';

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
      path: '/contact',
      component: Contact
    },
    {
      path: '/server',
      component: Server
    }
  ]
});

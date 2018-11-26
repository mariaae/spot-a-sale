import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import Store from './views/Stores.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/stores',
      name: 'stores',
      component: Store,
    },
  ],
});

import {
  createRouter, createWebHashHistory,
} from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      layout: false,
    },
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      layout: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

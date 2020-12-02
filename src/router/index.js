import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/CreatePage.vue'),
  },
  {
    path: '/multiroot',
    name: 'Multiroot',
    component: () => import('@/views/Multiroot.vue'),
  },
  {
    path: '/*',
    name: 'Error404',
    component: () => import('@/views/Error404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

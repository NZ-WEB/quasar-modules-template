export default {
  path: '/cart',
  component: () => import('./CartModule.vue'),
  children: [
    {
      path: '',
      component: () => import('./views/CartView.vue')
    }
  ]
};

const routes = [
  {
    path: '/:author_name',
    component: () => import('@/pages/[author_name]/index.vue'),
  },
  {
    path: '/:author_name/:post_title',
    component: () => import('@/pages/[author_name]/[post_title].vue'),
  }
]
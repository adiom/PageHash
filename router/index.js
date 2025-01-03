const routes = [
    {
      path: '/p/:post_id',
      component: () => import('@/pages/Post.vue'), // Укажите путь к компоненту страницы просмотра записи
    }
  ]
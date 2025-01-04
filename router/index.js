const routes = [
    {
      path: '/p/:post_id',
      component: () => import('@/pages/Post.vue'), // Укажите путь к компоненту страницы просмотра записи
    },
    {
        path: '/:author_name/:post_title',
        component: () => import('@/pages/[author_name]/[post_title].vue'), // Укажите путь к компоненту просмотра поста
    },  
/*    {
      path: '/:author_name',
      component: () => import('@/pages/[author_name].vue'), // Укажите путь к компоненту профиля автора
    }, */
  ]
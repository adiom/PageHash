<template>
  <div class="container mx-auto p-8">
    <div class="text-center mb-10">
      <h1 class="text-4xl font-semibold text-blue-600">Welcome to Canfly</h1>
    </div>

    <div class="mt-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="post in posts" :key="post.id" class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-bold text-gray-800">{{ post.title }}</h3>
          <p class="text-gray-600">{{ post.author }}</p>
          <p class="mt-2 text-gray-500">{{ post.content.slice(0, 100) }}...</p>
          <router-link :to="`/${post.author}/${post.title}`" class="text-blue-600 hover:underline mt-4 inline-block">
            read post..
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/composables/useSupabase'

const title = ref('')
const author = ref('')
const content = ref('')
const posts = ref([])

const getPosts = async () => {
  const { data, error } = await supabase.from('posts').select('*')
  if (data) {
    posts.value = data
  } else {
    console.error(error)
  }
}

// Функция для сохранения поста
const savePost = async () => {
  const postId = `${author.value}-${title.value}-${Date.now()}`

  const { data, error } = await supabase.from('posts').insert([
    {
      title: title.value,
      author: author.value,
      content: content.value,
      post_id: postId,
    }
  ])

  if (error) {
    console.error('Error saving post:', error.message)
  } else {
    alert('Пост успешно сохранён!')
    title.value = ''
    author.value = ''
    content.value = ''
    await getPosts() // Обновление списка постов
  }
}

// Загрузка всех постов при монтировании компонента
onMounted(getPosts)
</script>
<template>
    <div class="container mx-auto p-8">
      <div v-if="post">
        <h1 class="text-4xl font-semibold text-blue-600">{{ post.title }}</h1>
        <p class="text-2xl font-semibold text-blue-600 mb-4">{{ post.author }}</p>
        <div v-html="post.content" class="prose mb-4"></div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { marked } from 'marked'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { supabase } from '@/composables/useSupabase'
  
  const route = useRoute()
  const post = ref(null)
  
  onMounted(async () => {
    const { post_id } = route.params // Получаем post_id из параметров маршрута
  
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('post_id', post_id) // Ищем запись по ID
        .single()
  
      if (error) {
        throw error
      }
  
      if (data) {
        post.value = {
          ...data,
          content: marked(data.content), // Преобразуем Markdown в HTML
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error.message)
    }
  })
  </script>
<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p><strong>Автор:</strong> {{ post.author }}</p>
    <p>{{ post.content }}</p>
  </div>
  <div v-else>
    <p>Запись не найдена.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'

const route = useRoute()

// Реф для хранения поста
const post = ref(null)

onMounted(async () => {
  const { author_name, post_title } = route.params

  try {
    // Выполняем запрос к базе данных на основе автора и заголовка
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('author', author_name)
      .eq('title', post_title)
      .single()  // Ожидаем только одну запись

    if (error) {
      throw error
    }

    // Сохраняем пост в реф, если он найден
    if (data) {
      post.value = data
    }
  } catch (error) {
    console.error('Error fetching post:', error.message)
  }
})
</script>
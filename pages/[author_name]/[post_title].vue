<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'
import { marked } from 'marked'

const route = useRoute()
const post = ref(null)

onMounted(async () => {
  const { author_name, post_title } = route.params
  
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('author', author_name)
      .eq('title', post_title)
      .single()

    if (error) throw error
    
    if (data) {
      post.value = {
        ...data,
        content: marked(data.content)
      }
    }
  } catch (error) {
    console.error('Error fetching post:', error.message)
  }
})
</script>

<template>
  <div class="container mx-auto p-8">
    <div v-if="post" class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
      <div class="flex items-center mb-6">
        <span class="text-gray-600">Автор: 
          <router-link 
          :to="`/${post.author}`"
          class="text-blue-600 hover:underline mt-4 inline-block">
          {{ route.params.author_name }}
        </router-link>
        </span>
      </div>
      <div class="flex items-center mb-6">
        <span class="mx-2">Date</span>
        <span class="text-gray-600">{{ new Date(post.created_at).toLocaleDateString() }}</span>
      </div>
      <div v-html="post.content" class="prose prose-lg max-w-none"></div>
    </div>
    <div v-else class="text-center text-gray-600">
      Loading...
    </div>
  </div>
</template>
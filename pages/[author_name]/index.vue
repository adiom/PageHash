<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-semibold text-blue-600 mb-4">
      Name: {{ author_name }}
    </h1>
    
    <div v-if="posts.length" class="grid grid-cols-1 gap-6">
      <div v-for="post in posts" 
           :key="post.id" 
           class="bg-white shadow-md rounded-lg p-6">
        <h3 class="text-xl font-bold text-gray-800">{{ post.title }}</h3>
        <p class="text-gray-600 mt-2">{{ post.content.slice(0, 100) }}...</p>
        <router-link 
          :to="`/${post.author}/${post.title}`"
          class="text-blue-600 hover:underline mt-4 inline-block">
          Read →
        </router-link>
      </div>
    </div>
    
    <div v-else class="text-center text-gray-600">
      Loading profile..
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/composables/useSupabase'

const route = useRoute()
const author_name = ref(route.params.author_name)
const posts = ref([])

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('author', author_name.value)
      .order('created_at', { ascending: false })

    if (error) throw error
    posts.value = data
  } catch (error) {
    console.error('Error fetching author posts:', error.message)
  }
})
</script>
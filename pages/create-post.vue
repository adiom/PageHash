<template>
    <!-- Форма добавления поста -->
    <div class="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      
      <h2 class="text-2xl font-semibold text-center text-blue-600 mb-4">Создать пост {{ currentUser?.name }}</h2>
      <form @submit.prevent="savePost">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Заголовок</label>
          <input
            id="title"
            v-model="title"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Контент</label>
          <textarea
            id="content"
            v-model="content"
            class="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            required
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';
import { supabase } from '@/composables/useSupabase'
import md5 from 'md5'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore();
const currentUser = computed(() => authStore.currentUser);

// Проверка авторизации
onMounted(() => {
  if (!currentUser.value) {
    router.push('/login')
  }
})

const title = ref('')
const content = ref('')

const savePost = async () => {
  if (!currentUser.value) {
    router.push('/login')
    return
  }

  if (!title.value || !content.value) {
    alert('Пожалуйста, заполните все поля!')
    return
  }

  const postId = md5(title.value)

  try {
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title: title.value,
          author: currentUser.value.name,
          content: content.value,
          post_id: postId
        }
      ])
      .select()

    if (error) throw error

    if (data && data.length > 0) {
      alert('Пост успешно сохранён! ID записи: ' + data[0].id)
    } else {
      throw new Error('Нет данных после сохранения')
    }

    title.value = ''
    content.value = ''
  } catch (error) {
    console.error('Post Save Error:', error.message)
    alert('Ошибка сохранения поста: ' + error.message)
  }
}
</script>
<template>
  <div>
    <h1>Post create</h1>
    <form @submit.prevent="savePost">
      <div>
        <label>Заголовок:</label>
        <input v-model="title" placeholder="title post" />
      </div>
      <div>
        <label>Автор:</label>
        <input v-model="author" placeholder="Author name" />
      </div>
      <div>
        <label>Текст:</label>
        <textarea v-model="content" placeholder="Post Content"></textarea>
      </div>
      <button type="submit">Save post</button>
    </form>
  </div>
</template>

<script setup>
import { supabase } from '@/composables/useSupabase'
import md5 from 'md5'

// Рефы для данных формы
const title = ref('')
const author = ref('')
const content = ref('')

const savePost = async () => {
  // Проверка, что все поля заполнены
  if (!title.value || !author.value || !content.value) {
    alert('Пожалуйста, заполните все поля!')
    return
  }

  // Генерация уникального post_id на основе md5
  const postId = md5(title.value)

  try {
    // Сохраняем пост в таблице и запрашиваем возвращение данных
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title: title.value,
          author: author.value,
          content: content.value,
          post_id: postId
        }
      ])
      .select() // Запросить возвращение данных

    // Обработка ошибок
    if (error) {
      throw error
    }

    // Проверка на наличие данных
    if (data && data.length > 0) {
      // Уведомляем об успешном сохранении
      alert('Пост успешно сохранён! ID записи: ' + data[0].id)
    } else {
      throw new Error('Нет данных после сохранения')
    }

    // Очистка формы
    title.value = ''
    author.value = ''
    content.value = ''
  } catch (error) {
    console.error('Post Save Error:', error.message)
    alert('Ошибка сохранения поста: ' + error.message)
  }
}
</script>
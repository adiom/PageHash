<template>
  <div class="telegraph">
    <input
      v-model="title"
      type="text"
      class="telegraph-title"
      placeholder="Заголовок..."
    />

    <EditorContent :editor="editor" class="telegraph-editor" />

    <!-- Загрузка изображений -->
    <input type="file" @change="uploadImage" accept="image/*" />

    <button class="publish-button" @click="publish">Опубликовать</button>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { supabase } from '@/composables/useSupabase'


export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      title: '',
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>Начните писать здесь...</p>',
      extensions: [
        StarterKit,
        Image,
        Placeholder.configure({
          placeholder: 'Ваш текст здесь...',
        }),
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },

  methods: {
    async uploadImage(event) {
      const file = event.target.files[0]
      if (!file) return

      // Загрузка файла в хранилище Supabase
      const { data, error } = await supabase.storage
        .from('uploads') // Хранилище "uploads"
        .upload(`images/${Date.now()}-${file.name}`, file)

      if (error) {
        console.error('Ошибка загрузки:', error.message)
        return
      }

      // Получение публичного URL изображения
      const { publicURL } = supabase.storage.from('uploads').getPublicUrl(data.path)

      if (publicURL) {
        // Добавление изображения в редактор
        this.editor.chain().focus().setImage({ src: publicURL }).run()
      }
    },

    async publish() {
      const content = this.editor.getHTML()

      // Сохранение статьи в Supabase
      const { error } = await supabase
        .from('articles') // Таблица "articles"
        .insert({
          title: this.title,
          content,
        })

      if (error) {
        console.error('Ошибка сохранения статьи:', error.message)
        return
      }

      alert('Статья опубликована!')
      this.title = ''
      this.editor.commands.setContent('<p>Начните писать здесь...</p>')
    },
  },
}
</script>

<style scoped>
.telegraph {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.telegraph-title {
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.telegraph-editor {
  min-height: 300px;
  border: none;
  outline: none;
  padding: 10px 0;
  font-size: 18px;
  line-height: 1.6;
}

.publish-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.publish-button:hover {
  background-color: #45a049;
}
</style>
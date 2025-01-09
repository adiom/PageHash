<template>
    <div class="heal-page">
      <h1>Heal Service</h1>
      <div v-if="loading">Загрузка...</div>
      <div v-else>
        <p><strong>Текст:</strong> {{ message.text }}</p>
        <p><strong>Почта:</strong> {{ message.email || 'Не указана' }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { supabase } from '@/composables/useSupabase';
  
  const route = useRoute();
  const pincode = route.params.pincode as string;
  const message = ref<{ text: string; email: string | null }>({ text: '', email: null });
  const loading = ref(true);
  
  const loadMessage = async () => {
    const { data, error } = await supabase
      .from('heal')
      .select('text, email')
      .eq('pincode', pincode)
      .single();
  
    if (error) {
      console.error('Error loading message:', error.message);
      alert('Ошибка при загрузке сообщения');
    } else {
      message.value = data;
    }
  
    loading.value = false;
  };
  
  onMounted(() => {
    loadMessage();
  });
  </script>
  
  <style scoped>
  .heal-page {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .heal-page h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
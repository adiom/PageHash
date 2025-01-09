<template>
    <div class="heal-page bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div class="container bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Ответ на ваш запрос</h1>
        <div v-if="loading" class="text-center text-gray-500">Загрузка...</div>
        <div v-else>
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-gray-800">Ваш вопрос:</h2>
            <div class="formatted-text text-base">{{ question.text }}</div>
            <p class="mt-4"><strong>Почта:</strong> {{ obfuscatedEmail }}</p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-800">Ответ:</h2>
            <div v-if="answer" class="formatted-text text-base">{{ answer.answer }}</div>
            <div v-else class="text-gray-500 italic">Ваш вопрос обрабатывается. Пожалуйста, подождите.</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { supabase } from '@/composables/useSupabase';
  
  const route = useRoute();
  const pincode = route.params.pincode as string;
  
  // Данные о вопросе и ответе
  const question = ref<{ text: string; email: string | null }>({ text: '', email: null });
  const answer = ref<{ author_name: string | null; answer: string | null }>({ author_name: null, answer: null });
  const loading = ref(true);
  
  // Загружаем данные
  const loadData = async () => {
    try {
      // Загружаем вопрос
      const { data: questionData, error: questionError } = await supabase
        .from('heal')
        .select('text, email')
        .eq('pincode', pincode)
        .single();
  
      if (questionError) throw questionError;
      question.value = questionData;
  
      // Загружаем ответ
      const { data: answerData, error: answerError } = await supabase
        .from('heal_answers')
        .select('author_name, answer')
        .eq('pincode', pincode)
        .single();
  
      if (answerError && answerError.code !== 'PGRST116') throw answerError; // Игнорируем ошибку "нет данных"
      answer.value = answerData || { author_name: null, answer: null };
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error.message);
      alert('Не удалось загрузить данные. Попробуйте позже.');
    } finally {
      loading.value = false;
    }
  };
  
  // Скрытие части email
  const obfuscatedEmail = computed(() => {
    if (!question.value.email) return 'Не указана';
    const [localPart, domainPart] = question.value.email.split('@');
    const obfuscatedLocalPart = localPart.slice(0, 2) + '***';
    const obfuscatedDomainPart = domainPart.slice(0, 2) + '***';
    return `${obfuscatedLocalPart}@${obfuscatedDomainPart}`;
  });
  
  onMounted(() => {
    loadData();
  });
  </script>
  
  <style scoped>
  
  .heal-page {
    /* Обеспечивает вертикальное центрирование и адаптивность */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f9fafb;
  }
  
  .container {
    /* Адаптивная ширина контейнера */
    width: 100%;
    max-width: 700px; /* На мобильных */
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 900px; /* Для планшетов */
    }
  }
  
  @media (min-width: 1024px) {
    .container {
      max-width: 1200px; /* Для больших экранов */
    }
  }
  
  .formatted-text {
    white-space: pre-wrap;
    background-color: #edf2f7;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 10px;
    word-break: break-word;
  }
  </style>
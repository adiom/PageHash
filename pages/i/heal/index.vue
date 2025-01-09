<template>
  <div class="heal-page bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div class="container bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">Heal Up My Life ❤️</h1>
      <p class="text-sm text-gray-600 text-center mb-6">
        Напишите нам о своей проблеме. Мы постараемся вам помочь. Все данные остаются анонимными.
      </p>

      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Поле ввода текста -->
        <div>
          <label for="text" class="block text-gray-700 font-medium mb-1">Ваш вопрос:</label>
          <textarea
            v-model="text"
            id="text"
            class="textarea-field"
            placeholder="Опишите свою проблему здесь..."
            required
          ></textarea>
        </div>

        <!-- Поле ввода почты -->
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-1">Ваша почта (необязательно):</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="input-field"
            placeholder="example@email.com"
          />
        </div>

        <!-- Кнопка отправки -->
        <button type="submit" class="btn-primary">Отправить</button>
      </form>

      <!-- Пин-код -->
      <p v-if="generatedPincode" class="mt-4 text-center text-green-600 font-semibold">
        Ваш PIN-код: {{ generatedPincode }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/composables/useSupabase';

const text = ref('');
const email = ref('');
const generatedPincode = ref<string | null>(null);

const generatePincode = async (): Promise<string> => {
  let pincode: string;
  let isUnique = false;

  while (!isUnique) {
    pincode = Math.floor(1000 + Math.random() * 9000).toString();
    const { data } = await supabase
      .from('heal')
      .select('pincode')
      .eq('pincode', pincode);

    if (data.length === 0) {
      isUnique = true;
    }
  }

  return pincode;
};

const submitForm = async () => {
  const pincode = await generatePincode();

  const { error } = await supabase.from('heal').insert([
    {
      text: text.value,
      email: email.value,
      pincode: pincode,
    },
  ]);

  if (error) {
    console.error('Error inserting data:', error.message);
    alert('Ошибка при отправке данных');
  } else {
    alert('Ваш запрос отправлен. Спасибо!');
    generatedPincode.value = pincode;
    text.value = '';
    email.value = '';
  }
};
</script>

<style scoped>
/* Основные стили */
.heal-page {
  background-color: #f7fafc; /* Мягкий фон */
}
.container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Поля ввода */
.input-field,
.textarea-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  color: #4b5563;
  transition: border-color 0.3s;
}

.input-field:focus,
.textarea-field:focus {
  border-color: #3182ce;
  outline: none;
}

/* Кнопка */
.btn-primary {
  width: 100%;
  padding: 10px;
  background-color: #3182ce;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2c5282;
}
</style>
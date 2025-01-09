<template>
  <div class="heal-page">
    <h1>Heal Service</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="text">Текст:</label>
        <textarea v-model="text" id="text" required></textarea>
      </div>
      <div>
        <label for="email">Почта (не обязательно):</label>
        <input type="email" v-model="email" id="email" />
      </div>
      <button type="submit">Отправить</button>
    </form>
    <p v-if="generatedPincode">Ваш PIN-код: {{ generatedPincode }}</p>
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
    alert('Данные успешно отправлены');
    generatedPincode.value = pincode;
    text.value = '';
    email.value = '';
  }
};
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
.heal-page form div {
  margin-bottom: 15px;
}
.heal-page label {
  display: block;
  margin-bottom: 5px;
}
.heal-page input,
.heal-page textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.heal-page button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
.heal-page button:hover {
  background-color: #555;
}
</style>
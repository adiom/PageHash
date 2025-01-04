<template>
  <div class="login-page">
    <h1>Вход</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="author">Имя пользователя:</label>
        <input type="text" v-model="author" id="author" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const author = ref('');
const password = ref('');
const error = ref('');

const handleLogin = () => {
  if (author.value.trim()) {
    authStore.login({ name: author.value });
    navigateTo('/create-post');
  } else {
    error.value = 'Пожалуйста, введите имя пользователя.';
  }
};
</script>

<style scoped>
/* Стили для страницы входа */
.login-page {
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.login-page h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.login-page form div {
  margin-bottom: 1rem;
}
.login-page label {
  display: block;
  margin-bottom: 0.5rem;
}
.login-page input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
.login-page button {
  width: 100%;
  padding: 0.75rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
.login-page button:hover {
  background-color: #555;
}
</style>
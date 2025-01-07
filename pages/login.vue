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
    <div class="metamask-login">
      <button @click="connectMetaMask" class="metamask-button">
        Войти через MetaMask
      </button>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

interface MetaMaskError {
  code: number;
  message: string;
}

const authStore = useAuthStore();
const author = ref<string>('');
const password = ref<string>('');
const error = ref<string>('');

const connectMetaMask = async (): Promise<void> => {
  try {
    if (typeof window.ethereum === 'undefined') {
      error.value = 'Пожалуйста, установите MetaMask';
      return;
    }

    const accounts: string[] = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    });
    
    if (accounts[0]) {
      authStore.login({ name: accounts[0] });
      navigateTo('/create-post');
    }
  } catch (err) {
    const metamaskError = err as MetaMaskError;
    if (metamaskError.code === 4001) {
      error.value = 'Пользователь отклонил подключение';
    } else {
      error.value = 'Ошибка при подключении к MetaMask';
    }
  }
};

const handleLogin = (): void => {
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
.metamask-login {
  margin-top: 1rem;
  text-align: center;
}
.metamask-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #f6851b;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.metamask-button:hover {
  background-color: #e2761b;
}
.error {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
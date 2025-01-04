<template>
  <div class="login-page">
    <h1>Вход</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth', // Указываем использовать макет auth.vue
  // Остальная часть компонента
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Обработка входа
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      // Добавьте логику аутентификации
    }
  }
}
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

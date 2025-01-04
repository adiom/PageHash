<template>
    <header>
      <nav>
        <!-- Ваше меню навигации -->
        <ul>
          <li><nuxt-link to="/">Canfly</nuxt-link></li>
          <li><nuxt-link to="/login"></nuxt-link></li>
          <!-- Добавьте другие ссылки по необходимости -->
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  /* Стили для Header */
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  nav a {
    color: #fff;
    text-decoration: none;
  }
  </style>
  
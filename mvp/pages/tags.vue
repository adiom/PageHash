<template>
    <div class="container">
      <h1>Теги</h1>
      <ul>
        <li v-for="tag in tags" :key="tag">
          <nuxt-link :to="'/tag/' + tag">{{ tag }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tags: []
      };
    },
    async mounted() {
      const res = await fetch('/api/get_tags');
      const data = await res.json();
      this.tags = data.tags;
    }
  };
  </script>
  
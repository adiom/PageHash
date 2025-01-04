<template>
  <div class="dashboard">
    <h1>Добро пожаловать, {{ currentUser?.name }}!</h1>
    <button @click="handleLogout">Выйти</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const currentUser = computed(() => authStore.currentUser);

const handleLogout = () => {
  authStore.logout();
  navigateTo('/login');
};
</script>
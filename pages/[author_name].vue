<template>
  <div class="profile-page">
    <div class="profile-header">
      <h1>Профиль пользователя</h1>
      <div class="profile-info">
        <p><strong>Имя пользователя:</strong> {{ author }}</p>
        <template v-if="userInfo">
          <p v-if="userInfo.walletAddress">
            <strong>Адрес кошелька:</strong> 
            {{ formatWalletAddress(userInfo.walletAddress) }}
          </p>
          <p v-if="userInfo.pazanBalance">
            <strong>Баланс PAZAN:</strong> 
            {{ userInfo.pazanBalance }}
          </p>
        </template>
      </div>
    </div>
    <!-- Здесь можно добавить список постов пользователя -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const route = useRoute();
const author = route.params.author_name as string;
const authStore = useAuthStore();

const userInfo = computed(() => {
  return authStore.currentUser;
});

const formatWalletAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.profile-header {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.profile-info {
  margin-top: 1rem;
}

.profile-info p {
  margin: 0.5rem 0;
}
</style>

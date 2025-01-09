<template>
  <div class="profile-page">
    <h1>Профиль пользователя</h1>
    <form @submit.prevent="updateProfile">
      <div>
        <label for="walletAddress">Адрес кошелька:</label>
        <input type="text" v-model="walletAddress" id="walletAddress" />
      </div>
      <div>
        <label for="bio">Био:</label>
        <textarea v-model="bio" id="bio"></textarea>
      </div>
      <button type="submit">Обновить профиль</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const currentUser = computed(() => authStore.currentUser);

const walletAddress = ref(currentUser.value?.walletAddress || '');
const bio = ref(currentUser.value?.bio || '');

onMounted(() => {
  if (!currentUser.value) {
    router.push('/login');
  }
});

const updateProfile = () => {
  if (currentUser.value) {
    authStore.updateProfile({ walletAddress: walletAddress.value, bio: bio.value });
    alert('Профиль обновлен');
  }
};
</script>

<style scoped>
.profile-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.profile-page h1 {
  text-align: center;
  margin-bottom: 20px;
}
.profile-page form div {
  margin-bottom: 15px;
}
.profile-page label {
  display: block;
  margin-bottom: 5px;
}
.profile-page input,
.profile-page textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.profile-page button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
.profile-page button:hover {
  background-color: #555;
}
</style>
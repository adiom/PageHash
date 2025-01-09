import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { name: string, walletAddress?: string, bio?: string } | null,
    isAuthenticated: false,
  }),
  actions: {
    login(user: { name: string, walletAddress?: string, bio?: string }) {
      this.user = user;
      this.isAuthenticated = true;
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
    updateProfile(profile: { walletAddress?: string, bio?: string }) {
      if (this.user) {
        this.user.walletAddress = profile.walletAddress;
        this.user.bio = profile.bio;
      }
    },
  },
  getters: {
    currentUser: (state) => state.user,
  },
});
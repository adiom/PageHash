<template>
  <div class="container">
    <h1>Создать пост</h1>
    <form @submit.prevent="savePost">
      <div class="form-group">
        <label for="title">Заголовок</label>
        <input v-model="title" id="title" type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="content">Текст</label>
        <textarea v-model="content" id="content" class="form-control" required></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Теги (через запятую)</label>
        <input v-model="tags" id="tags" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
    <p v-if="walletAddress">Адрес: {{ walletAddress }}</p>
  </div>
</template>

<script>
import { ethers } from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
  data() {
    return {
      title: '',
      content: '',
      tags: '',
      walletAddress: '',
    };
  },
  methods: {
    async savePost() {
      const res = await fetch('/api/add_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
          tags: this.tags,
          walletAddress: this.walletAddress
        }),
      });

      const data = await res.json();
      if (data.success) {
        this.$router.push('/');
      }
    },
    async connectWallet() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      this.walletAddress = accounts[0];
    },
    async connectWalletConnect() {
      const provider = new WalletConnectProvider({
        infuraId: "YOUR_INFURA_ID"
      });

      await provider.enable();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      this.walletAddress = await signer.getAddress();
    }
  },
  mounted() {
    if (window.ethereum) {
      this.connectWallet();
    } else {
      this.connectWalletConnect();
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin-top: 50px;
}
</style>

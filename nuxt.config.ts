export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/yandex-metrika.js', mode: 'client' }
  ],

  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL || '',
      SUPABASE_KEY: process.env.SUPABASE_KEY || ''
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }]
  ],

  imports: {
    dirs: ['stores']
  },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/tailwind.css',
  ],

  nitro: {
    preset: 'vercel'
  },

  compatibilityDate: '2025-01-07'
})
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
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/tailwind.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  compatibilityDate: '2025-01-03'
})
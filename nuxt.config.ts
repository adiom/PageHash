export default defineNuxtConfig({
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
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-01-03'
})
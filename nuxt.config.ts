export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL || '',
      SUPABASE_KEY: process.env.SUPABASE_KEY || ''
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-01-03'
})
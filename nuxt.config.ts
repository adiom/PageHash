export default defineNuxtConfig({
  head: {
    script: [
      {
        innerHTML: `
          <!-- Yandex.Metrika counter -->
          <script type="text/javascript" >
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

             ym(99403866, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
           });
          </script>
          <noscript><div><img src="https://mc.yandex.ru/watch/99403866" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <!-- /Yandex.Metrika counter -->
        `,
      },
    ],
  },
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
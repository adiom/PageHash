<template>
    <div class="ty-cho-byk bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <img src="/2CB.png" alt="2CB" />

        <div class="max-w-4xl text-center">
            <br />
        <h1 class="text-6xl font-bold mb-4 animate-pulse">
          ТЫ ЧО БЫК
        </h1>
        
        <p class="text-xl mb-8">
          Творческое объединение, которое стало легендой Санкт-Петербурга.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold mb-4">История</h2>
            <p class="text-lg">
              "TY CHO BYK" — это история о музыке, хип-хоп культуре и жизни в Санкт-Петербурге. Основанное в 1970-х годах, объединение прошло путь от подпольных концертов до международного признания.
            </p>
          </div>
  
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 class="text-3xl font-semibold mb-4">Музыка</h2>
            <p class="text-lg">
              Музыка "TY CHO BYK" — это смесь хип-хопа, джаза и электроники. Их треки стали саундтреком к жизни целого поколения.
            </p>
          </div>
        </div>
  
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TyChoByk',
  };
  </script>
  
  <style scoped>
  .ty-cho-byk {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 100%);
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .animate-pulse {
    animation: pulse 2s infinite;
  }
  </style>
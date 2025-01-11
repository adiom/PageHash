<template>
  <div id="app">
    <!-- Фон с частицами -->

    <!-- Контент страницы -->
    <div class="content">
      <p>
        Canfly is an innovative ecosystem that combines blockchain technology, decentralized autonomous organizations (DAO), artificial intelligence, and new standards for interaction with digital services. We are creating a space where everyone can experience the freedom of technology, secure data access, and complete control over their assets. Our solutions are powered by AI, ensuring smarter and more efficient tools for users.
      </p>
      <p>
        🌐 Our website is currently under development, so stay tuned for exciting updates soon!
      </p>
      <!-- Ссылки на соцсети -->
      <div class="social-icons">
            <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://facebook.com/yourusername" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://flickr.com/yourusername" target="_blank" aria-label="Flickr"><i class="fab fa-flickr"></i></a>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* Сброс стилей */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Стили для тела страницы */
body {
  font-family: "Montserrat", sans-serif;
}

/* Контейнер контента */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.content h1 {
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.content p {

  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.content .signature {
  font-size: 1rem;
  text-align: right;
  margin-top: 20px;
  font-style: italic;
}

/* Кнопки соцсетей */
.social-icons {
  margin-top: 20px;
}

.social-icons a {
  color: #0095ff;
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ff6f61;
}

/* Адаптивность */
@media (max-width: 768px) {
  .content h1 {
    font-size: 2.5rem;
  }

  .content p {
    font-size: 1rem;
  }

  .social-icons a {
    font-size: 1.2rem;
    margin: 0 8px;
  }
}
</style>
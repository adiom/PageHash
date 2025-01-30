<template>
  <div class="container">
    <header class="header">
      <h1>CanFly: Умное устройство Daria</h1>
      <p>OpenHardware устройство с камерой на базе ESP32, работающее в сети Amalgam/Polygon</p>
    </header>

    <section class="features">
      <h2>Основные особенности</h2>
      <div class="feature-list">
        <div class="feature">
          <h3>OpenHardware</h3>
          <p>Daria — это устройство с открытым исходным кодом, что позволяет вам модифицировать и улучшать его под свои нужды.</p>
        </div>
        <div class="feature">
          <h3>Камера</h3>
          <p>Встроенная камера позволяет захватывать изображения и видео, которые можно использовать для различных задач, таких как мониторинг или анализ данных.</p>
        </div>
        <div class="feature">
          <h3>ESP32</h3>
          <p>На базе мощного микроконтроллера ESP32, Daria обеспечивает высокую производительность и низкое энергопотребление.</p>
        </div>
        <div class="feature">
          <h3>Блокчейн интеграция</h3>
          <p>Работая в сети Amalgam/Polygon, Daria обеспечивает безопасность и прозрачность данных, используя преимущества блокчейн-технологий.</p>
        </div>
      </div>
    </section>

    <section class="prototype-details">
      <h2>Детали прототипа</h2>
      <p>
        Прототип устройства Daria представляет собой компактное и мощное решение для задач, требующих интеграции аппаратного обеспечения с блокчейн-технологиями. 
        Устройство оснащено камерой, которая может быть использована для захвата изображений и видео, а также для выполнения задач компьютерного зрения.
      </p>
      <p>
        ESP32 обеспечивает стабильное соединение с сетью и возможность обработки данных на устройстве, что делает Daria идеальным решением для IoT-приложений.
      </p>
      <p>
        Интеграция с сетью Amalgam/Polygon позволяет использовать смарт-контракты для управления устройством и обработки данных, обеспечивая высокий уровень безопасности и прозрачности.
      </p>
    </section>

    <section class="cta">
      <h2>Присоединяйтесь к проекту CanFly</h2>
      <p>Узнайте больше о проекте и присоединяйтесь к нашему сообществу разработчиков и энтузиастов.</p>
      <button @click="joinCommunity" class="cta-button">Присоединиться</button>
    </section>

    <footer class="footer">
      <p>&copy; CanFly Project. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    joinCommunity() {
      // Логика для присоединения к сообществу
      window.location.href = 'https://x.com/_canfly';
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
  color: #666;
}

.features {
  margin-bottom: 40px;
}

.features h2 {
  text-align: center;
  margin-bottom: 20px;
}

.feature-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.feature {
  flex: 1 1 45%;
  margin: 10px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1rem;
  color: #555;
}

.prototype-details {
  margin-bottom: 40px;
}

.prototype-details h2 {
  text-align: center;
  margin-bottom: 20px;
}

.prototype-details p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
}

.cta {
  text-align: center;
  margin-bottom: 40px;
}

.cta h2 {
  margin-bottom: 20px;
}

.cta-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #0056b3;
}

.footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.footer p {
  font-size: 0.9rem;
  color: #666;
}
</style>
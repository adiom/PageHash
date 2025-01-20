<template>
    <div class="pazan-token-page">
      <!-- Hero секция -->
      <div class="hero-section">
        <div class="content">
          <h1 class="title">$PAZAN Token</h1>
          <p class="subtitle">In Memory of Start-Up (2014 - 2024)</p>
          <div class="token-address">
            <span>Token Address:</span>
            <a href="https://polygonscan.com/address/0xe5e2cce485b1de3565ef1c4b4f0796cc777dad0c" target="_blank">
              0xe5e2cce485b1de3565ef1c4b4f0796cc777dad0c
            </a>
          </div>
        </div>
        <div class="cat-image">
          <img src="/Start-Up.png" alt="Start-Up the Cat" />
        </div>
      </div>
  
      <!-- Основной контент -->
      <div class="main-content">
        <!-- Информация о токене -->
        <div class="token-info">
          <h2>About $PAZAN Token</h2>
          <p>A unique token created in memory of my beloved cat, Start-Up. Join our community and honor his legacy!</p>
          
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Network</h3>
              <p>Polygon</p>
            </div>
            <div class="stat-card">
              <h3>Type</h3>
              <p>ERC-20</p>
            </div>
            <div class="stat-card">
              <h3>Supply</h3>
              <p>1,000,000 $PAZAN</p>
            </div>
          </div>
        </div>
  
        <!-- Кнопки действий -->
        <div class="action-buttons">
          <a href="#" class="button primary">Buy $PAZAN</a>
          <a href="#" class="button secondary">Join Airdrop</a>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .pazan-token-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    font-family: 'Arial', sans-serif;
  }
  
  .hero-section {
    padding: 100px 20px;
    text-align: center;
    background-image: url('/cat-background.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
    animation: fadeIn 2s ease-in-out;
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
    animation: fadeIn 2.5s ease-in-out;
  }
  
  .token-address {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 8px;
    backdrop-filter: blur(5px);
    animation: fadeIn 3s ease-in-out;
  }
  
  .token-address a {
    color: #00ff88;
    text-decoration: none;
    word-break: break-all;
  }
  
  .cat-image {
    margin-top: 30px;
    animation: float 3s ease-in-out infinite;
  }
  
  .cat-image img {
    width: 150px;
    height: auto;
    border-radius: 50%;
    border: 5px solid #00ff88;
  }
  
  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
  }
  
  .token-info {
    margin-bottom: 50px;
  }
  
  .token-info h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .stat-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    animation: fadeIn 1.5s ease-in-out;
  }
  
  .stat-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .stat-card p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .action-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
  }
  
  .button {
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.2s;
  }
  
  .button:hover {
    transform: translateY(-2px);
  }
  
  .primary {
    background: #00ff88;
    color: #1e3c72;
  }
  
  .secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid white;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 3rem;
    }
    
    .action-buttons {
      flex-direction: column;
    }
    
    .button {
      width: 100%;
      text-align: center;
    }
  }
  </style>
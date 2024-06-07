import React from 'react';
import '../Css/HomeScreen.css';

const HomeScreen: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-screen">
        <h1>Bem-vindo ao BooPeep App</h1>
        <p>O BooPeep é um aplicativo móvel dedicado a achados e perdidos. A nossa missão é ajudar você a encontrar o que perdeu e devolver o que encontrou.</p>

        <section className="features">
          <h2>Recursos</h2>
          <ul>
            <li><strong>Rastreamento de Itens Perdidos:</strong> Encontre itens perdidos de forma rápida e eficiente.</li>
            <li><strong>Notificações Instantâneas:</strong> Receba notificações quando seu item perdido for encontrado.</li>
            <li><strong>Comunidade Colaborativa:</strong> Contribua com a comunidade informando itens encontrados.</li>
            <li><strong>Mapa de Itens:</strong> Veja os itens perdidos e encontrados em um mapa interativo.</li>
            <li><strong>Suporte 24/7:</strong> Suporte ao usuário disponível 24 horas por dia, 7 dias por semana.</li>
          </ul>
        </section>

        <section className="download">
          <h2>Baixe o BooPeep App</h2>
          <p>Disponível para Android. Clique no botão abaixo para baixar o aplicativo e começar a usar agora mesmo.</p>
          <button className="download-button">Baixar Agora</button>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
import React from 'react';
import '../Css/HomeScreen.css';

const HomeScreen: React.FC = () => {
  return (
    <div className="home-screen">
      <h1>Bem-vindo ao Bo Peep App</h1>
      <p>O Bo Peep é um aplicativo móvel dedicado a achados e perdidos. A nossa missão é ajudar você a encontrar o que perdeu e devolver o que encontrou.</p>
      
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
      
      <section className="about-us">
        <h2>Sobre Nós</h2>
        <p>O Bo Peep foi criado para tornar o processo de encontrar itens perdidos mais fácil e rápido. Acreditamos no poder da comunidade e na importância de devolver o que não é nosso. Nosso objetivo é conectar pessoas e fazer do mundo um lugar melhor, um item encontrado por vez.</p>
      </section>
      
      <section className="download">
        <h2>Baixe o Bo Peep App</h2>
        <p>Disponível para Android e iOS. Clique no botão abaixo para baixar o aplicativo e começar a usar agora mesmo.</p>
        <button className="download-button">Baixar Agora</button>
      </section>
    </div>
  );
};

export default HomeScreen;

import React from 'react';
import '../Css/AboutScreen.css';

const AboutScreen: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-screen">
        <h1>Sobre o BooPeep App</h1>
        <p>O BooPeep é um aplicativo móvel dedicado a achados e perdidos. A nossa missão é ajudar você a encontrar o que perdeu e devolver o que encontrou.</p>

        <section className="about-details">
          <h2>Nosso Objetivo</h2>
          <p>Nosso objetivo é conectar pessoas e fazer do mundo um lugar melhor, um item encontrado por vez.</p>

          <h2>Como Funciona</h2>
          <p>Você pode registrar itens perdidos e encontrados, receber notificações instantâneas, e visualizar itens em um mapa interativo. Nossa comunidade colaborativa ajuda a garantir que itens perdidos sejam devolvidos aos seus respectivos donos.</p>
        </section>
      </div>
    </div>
  );
};

export default AboutScreen;

import React from 'react';
import '../Css/AboutScreen.css';

const AboutScreen: React.FC = () => {
  return (
    <div className="about-screen">
      <h1>Sobre o Bo Peep App</h1>
      <p>O Bo Peep é uma plataforma inovadora de achados e perdidos. Nosso objetivo é conectar pessoas para que possam encontrar itens perdidos de maneira rápida e eficiente.</p>
      <section className="mission">
        <h2>Missão</h2>
        <p>A nossa missão é ajudar as pessoas a reencontrar seus pertences perdidos e promover um senso de comunidade e colaboração.</p>
      </section>
      <section className="team">
        <h2>Equipe</h2>
        <p>Nosso time é composto por desenvolvedores, designers e especialistas dedicados a criar uma experiência de usuário excepcional.</p>
      </section>
    </div>
  );
};

export default AboutScreen;

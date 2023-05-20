import React from 'react';
import "./home.css";
import Pesquisar from '../Pesquisar';

const Home = () => {
  return (
    <div className="home">
        <div className='logo'>
            <img src="/imagens/logo.webp" alt='logo imagem' className='logo-projeto'/>
        </div>
      <div className='lupa'>
        <Pesquisar />
      </div>
      <p>
        
        <p className="texto">Lorem ipsum dolor sit amet...</p>
      </p>
    </div>
  );
}

export default Home;

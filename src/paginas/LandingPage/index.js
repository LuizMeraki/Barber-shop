import React, { useState } from 'react';
import './style.css';

// Imagens
import barbearia_logo from '../../assets/barbearia-logo.png';

export default function LandingPage(){

     // Tema da página
     const tema_light = 'tema-light';
     const tema_dark = 'tema-dark';
     const [alterarCorTema, setAlterarCorTema] = useState(true);

     // Logo do botão de tema
     const logo_light = '../../assets/sun.png';
     const logo_dark = '../../assets/moon.png';

     // Posição Logo botão de tema
     const img_botao_tema_light = 'img-botao-tema-light'
     const img_botao_tema_dark = 'img-botao-tema-dark';

     // Estilo botão de tema
     const botao_estilo_light = 'botao-estilo-light';
     const botao_estilo_dark = 'botao-estilo-dark';


     function alterarEstilos(){
          setAlterarCorTema(!alterarCorTema);
     }

     return (
          <div className={ alterarCorTema ? tema_light : tema_dark }>
               <header>
                    <div className='menu limite-secao'>
                         <img className='menu-logo' src={ barbearia_logo } alt='Logo Barber Shop'></img>
                         <div className='box-header-button'>
                              <button className={ alterarCorTema ? botao_estilo_light : botao_estilo_dark } onClick={ alterarEstilos }>
                                   <img className={ alterarCorTema ? img_botao_tema_light : img_botao_tema_dark } src={ alterarCorTema ? logo_light : logo_dark } alt='Ícone botão de tema'></img>
                              </button>
                         </div>
                    </div>
               </header>
               <main>
                    <section id='secao-banner'></section>
                    <section id='secao-apresentacao'>
                         <div className='limite-secao'>
                              <div className='box-titulo'>
                                   <h1>Bem-vindo a Barber Shop</h1>
                              </div>
                              <div className='box-texto'>
                                   <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                                   <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>                                   
                                   
                                   <div className='box-assinatura'>
                                        <span>S. Kelly</span>
                                   </div>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
}
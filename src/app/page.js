// page.js
import React from 'react';
import Link from 'next/link';
import headerSectionStyles from '../styles/HeaderSectionStyle.module.css';
import backgroundHeader from '../assets/background-header.png';
import MeuBotao from '../styles/Botao.module.css';

function Page() {
  return (
    <main className={headerSectionStyles.home}>
      <section className={headerSectionStyles.headerSection}>
        <div className={headerSectionStyles['header-section-box']}>
          <h1>
            Faça sua vistoria agora. <br />
            Online, rápido e fácil.
          </h1>
          <p>
            Mais do que um seguro para bicicleta, uma solução completa que oferece
            proteção e serviços para você se aventurar sem medo.
          </p>

          {/* Removi a lógica de estado e as funções de mouse */}
          <Link href="/login/page">
           
              <button className={`${MeuBotao.elevated} ${MeuBotao.elevatedHovered}`}>
                Fazer vistoria
              </button>
            
          </Link>
        </div>
        <div
          className={headerSectionStyles['header-section-background']}
          style={{ backgroundImage: `url(${backgroundHeader})` }}
        />
      </section>
    </main>
  );
}

export default Page;

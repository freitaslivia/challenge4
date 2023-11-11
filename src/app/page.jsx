
import React from 'react';
import Link from 'next/link';
import headerSectionStyles from '../styles/HeaderSectionStyle.module.css';
import MeuBotao from '../styles/Botao.module.css';
import StepByStepSection from '../components/Steps/Step';
import SurveySection from '../components/Survey/Survey';
import MembersSection from '../components/Members/Members';
import Rodape from '../components/Rodape/Rodape'

function Page() {
  const backgroundImageStyle = {
    backgroundImage: 'url("/background-header.png")',
  };

  const cards = [
    {
      backgroundImage: '/step-1-background.png',
      title: 'Cadastro',
      description:
        'Cadastre os dados da bicicleta, com informações da marca, modelo, cores e etc',
    },
    {
      backgroundImage: '/step-2-background.png',
      title: 'Fotos',
      description:
        'Tire fotos da bicicleta para que nosso sistema de reconhecimento comprove os dados cadastrados',
    },
    {
      backgroundImage: '/step-3-background.png',
      title: 'Análise',
      description:
        'Os dados serão analisados e salvos no nosso sistema para aprovação',
    },
  ];

  return (
    <main className={headerSectionStyles.home}>
      <section className={headerSectionStyles.headerSection}>
        <div className={headerSectionStyles.headerSectionBox}>
          <h1>
            Faça sua vistoria agora. <br />
            Online, rápido e fácil.
          </h1>
          <p>
            Mais do que um seguro para bicicleta, uma solução completa que oferece
            proteção e serviços para você se aventurar sem medo.
          </p>

          <Link href="/login">
            <button
              className={`${MeuBotao.elevated} ${MeuBotao.elevatedHovered} ${MeuBotao.botao}`}
            >
              Fazer vistoria
            </button>
          </Link>
        </div>
        <div
          className={headerSectionStyles.headerSectionBackground}
          style={backgroundImageStyle}
        />
      </section>

      <StepByStepSection cards={cards} />

      <SurveySection/>
      <MembersSection />
      <img
      src="/cyclist-background.png" 
      alt="Imagem de um ciclista andando de bicicleta"
    />
    <Rodape />
    </main>
  );
}

export default Page;

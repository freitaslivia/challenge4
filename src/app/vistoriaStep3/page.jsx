import Link from 'next/link';
import React from 'react';
import stepsLogin from '../../components/StepsLogin/StepsLogin';
import CustomButton from '@/components/CustomButton/Button';
import headerSectionStyles from '../../styles/HeaderSectionStyle.module.css';

const VistoriaStep3 = () => {
  const currentStep = stepsLogin[2];

  return (
    <div>
      
      <section className={headerSectionStyles.headerSection}>
        <div className={headerSectionStyles.surveyBox}>
        <h1>3 - {currentStep.title}</h1>
        <p>{currentStep.description}</p>

          <Link href="/vistoriaStep3">
          <CustomButton >
            Próxima Etapa
          </CustomButton>
          </Link>
        </div>
        <div className={headerSectionStyles.surveyChat} />
        
      </section>
    </div>
  );
};


<section className={styles.loginSection}>
<form className={styles.loginBox} onSubmit={handleSubmit} method="POST">
  <h1>Cadastrar</h1>

  {erro && <p style={{ color: 'red' }}>{erro}</p>}

  <div className={styles.inputField}>
    <label htmlFor="nome">Nome:</label>
    <input
      type="text"
      id="Idnome"
      name="nome"
      value={novo.nome}
      placeholder="Digite o seu nome"
      onChange={handleChange}
    />
  </div>
  <div className={styles.inputField}>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="idEmail"
      name="email"
      placeholder="Digite seu email"
      value={novo.email}
      onChange={handleChange}
    />
  </div>

  <div className={styles.inputField}>
    <label htmlFor="cpf">CPF:</label>
    <input
      type="text"
      id="idCpf"
      name="cpf"
      placeholder="Digite seu CPF(111.111.111-11)"
      value={novo.cpf}
      onChange={handleChange}
    />
  </div>

  <CustomButton type="submit">Cadastrar</CustomButton>
</form>
<div className={styles.loginBackground} style={backgroundImageStyle} />
</section>
);


export default VistoriaStep3;

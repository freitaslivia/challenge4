"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';
import MeuBotao from '../../styles/Botao.module.css';



const Login = () => {
  const [inspectionCode, setInspectionCode] = useState('');
  const [password, setPassword] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleInspectionCodeChange = (event) => {
    setInspectionCode(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Código de Vistoria:', inspectionCode);
    console.log('Senha:', password);

    setInspectionCode('');
    setPassword('');

    const loginSuccessful = true;

    if (loginSuccessful) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("/background-login.png")',
  };

  return (
    <section className={styles.loginSection}>
      <form className={styles.loginBox}>
        <h1>Iniciar vistoria</h1>

        <div className={styles.inputField}>
          <label htmlFor="codigoVistoria">Código de Vistoria:</label>
          <input
            type="text"
            id="codigoVistoria"
            name="codigoVistoria"
            value={inspectionCode}
            placeholder='Digite o código de vistoria'
            onChange={handleInspectionCodeChange}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder='Digite sua senha'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

       
        <Link href="/vistoria">
          <button className={`${MeuBotao.elevated} ${MeuBotao.elevatedHovered} ${MeuBotao.botao}`} onClick={handleSubmit}>
            Entrar
          </button>
        </Link>
      </form>
      <div className={styles.loginBackground} style={backgroundImageStyle} />
    </section>
  );
};

export default Login;

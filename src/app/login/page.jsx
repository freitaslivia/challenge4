"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';

import CustomButton from '../../components/CustomButton/Button';

const Login = () => {
  const [inspectionCode, setInspectionCode] = useState('');
  const [password, setPassword] = useState('');

  const handleInspectionCodeChange = (event) => {
    setInspectionCode(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

   
    const loginSuccessful = true;

    if (loginSuccessful) {
      
      window.location.href = '/vistoriaStep1';
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

        <Link href="/vistoriaStep1">
          <CustomButton onClick={handleLogin}>
            Entrar
          </CustomButton>
        </Link>
      </form>
      <div className={styles.loginBackground} style={backgroundImageStyle} />
    </section>
  );
};

export default Login;

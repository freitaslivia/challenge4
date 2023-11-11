
"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';
import MeuBotao from '../../styles/Botao.module.css';

const Login = () => {
  const [inspectionCode, setInspectionCode] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleInspectionCodeChange = (event) => {
    setInspectionCode(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Código de Vistoria:', inspectionCode);
    console.log('Senha:', password);

    setInspectionCode('');
    setPassword('');

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

        <Link href="/vistoria/1">
          <button
            className={`${MeuBotao.elevated} ${MeuBotao.elevatedHovered} ${MeuBotao.botao}`}
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </Link>
      </form>
      <div className={styles.loginBackground} />
    </section>
  );
};

export default Login;

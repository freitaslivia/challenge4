"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';
import CustomButton from '../../components/CustomButton/Button';

const FormCadastrar = () => {
  const [novo, setNovo] = useState({
    nome: '',
    email: '',
    cpf: ''
  });

  const [erro, setErro] = useState('');
  const router = require('next/router');  

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    if (!novo.nome || !novo.email || !novo.cpf) {
      setErro('Por favor, preencha todos os campos.');
      return false;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(novo.cpf)) {
      setErro('Formato de CPF inválido. Use o formato 111.111.111-11.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!validarFormulario()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(novo)
      });

      if (response.ok) {
        console.log('Cadastro realizado com sucesso');
      
        router.push('/vistoriaStep1');
      } else {
        console.error('Erro ao cadastrar. Status:', response.status);
        
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
     
    }
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("/background-login.png")',
  };

  return (
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

        <Link href="/vistoriaStep1">
        <CustomButton type="submit">
          Cadastrar
        </CustomButton>
        </Link>
      </form>
      <div className={styles.loginBackground} style={backgroundImageStyle} />
    </section>
  );
};

export default FormCadastrar;

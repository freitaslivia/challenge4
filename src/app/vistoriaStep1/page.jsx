"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import CustomButton from '@/components/CustomButton/Button';
import headerSectionStyles from '../../styles/HeaderSectionStyle.module.css';
import styles from '../../styles/Login.module.css';

const FormBike = () => {
  const [novo, setNovo] = useState({
    numeroDeSerie: '',
    modelo: '',
    marca: '',
    valor: ''
  });

  const [erro, setErro] = useState('');
  const router = require('next/router');

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    if (!novo.numeroDeSerie || !novo.modelo || !novo.marca || !novo.valor) {
      setErro('Por favor, preencha todos os campos.');
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
      const response = await fetch('http://localhost:8080/bicicletas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(novo)
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso');
        router.push('/vistoriaStep2');
      } else {
        console.error('Erro ao cadastrar. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };


  return (
      <section className={styles.loginSection}>
        <form className={styles.loginBox} onSubmit={handleSubmit} method="POST">
          <h1>Dados Bike</h1>

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <div  className={styles.inputField}>
            <label htmlFor="numeroDeSerie">Número de Série:</label>
            <input
              type="text"
              id="idNumeroDeSerie"
              name="numeroDeSerie"
              value={novo.numeroDeSerie}
              placeholder="Digite o número de série"
              onChange={handleChange}
            />
          </div>

          <div className={headerSectionStyles.inputField}>
            <label htmlFor="modelo">Modelo:</label>
            <input
              type="text"
              id="idModelo"
              name="modelo"
              value={novo.modelo}
              placeholder="Digite o modelo"
              onChange={handleChange}
            />
          </div>

          <div className={headerSectionStyles.inputField}>
            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              id="idMarca"
              name="marca"
              value={novo.marca}
              placeholder="Digite a marca"
              onChange={handleChange}
            />
          </div>

          <div className={headerSectionStyles.inputField}>
            <label htmlFor="valor">Valor:</label>
            <input
              type="text"
              id="idValor"
              name="valor"
              value={novo.valor}
              placeholder="Digite o valor"
              onChange={handleChange}
            />
          </div>

        <Link href="/vistoriaStep2">
        <CustomButton type="submit">
          Entrar
        </CustomButton>
        </Link>
        </form>
        <div />
      </section>
  );
};

export default FormBike;

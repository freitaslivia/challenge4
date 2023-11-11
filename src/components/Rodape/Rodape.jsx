import React from 'react';
import styles from '../../styles/Rodape.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img
          src="/logo-horizontal-footer.svg" 
          alt="Logo com a escrita Porto Seguro em azul e preto com fundo transparente"
        />
      </div>
      <span>© 2023 Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;

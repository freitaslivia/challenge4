
import React from 'react';
import MeuBotao from '../../styles/Botao.module.css';

const CustomButton = ({ onClick, children }) => {
  return (
    <button className={`${MeuBotao.elevated} ${MeuBotao.elevatedHovered} ${MeuBotao.botao}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;

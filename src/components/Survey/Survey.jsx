
import React from 'react';
import SurveyStyle  from '../../styles/SurveySection.module.css';
import MeuBotao from '../../styles/Botao.module.css'; 

const SurveySection = () => {
  return (
    <section className={SurveyStyle.surveySection}>
      <div className={SurveyStyle.surveyBox}>
        <h2>Não tem seguro bike ainda?</h2>
        <p>Acesse o site Seguro Porto Bike e faça sua cotação online</p>
        <button
              className={`${MeuBotao.elevated} ${MeuBotao.elevatedHovered} ${MeuBotao.botao}`}
            >
              Acessar Seguro Porto
            </button>
      </div>
    </section>
  );
};

export default SurveySection;

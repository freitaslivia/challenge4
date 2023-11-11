
import React from 'react';
import styles from '../../styles/Step.module.css';

const StepByStepSection = ({ cards }) => {
  return (
    <section className={styles.stepByStepSection} id="passo-a-passo">
      <div className={styles.stepByStepBox}>
        <h2>Como fazer sua vistoria online?</h2>
        <p>Entenda como funciona as etapas do processo de vistoria online da sua bike.</p>
      </div>
      <ul className={styles.stepByStepCards}>
        {cards.map((card, index) => (
          <li
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
          >
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StepByStepSection;

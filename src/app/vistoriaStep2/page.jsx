import Link from 'next/link';
import React from 'react';
import stepsLogin from '../../components/StepsLogin/StepsLogin';
import CustomButton from '@/components/CustomButton/Button';
import headerSectionStyles from '../../styles/HeaderSectionStyle.module.css';

const VistoriaStep2 = () => {
  const currentStep = stepsLogin[1];

  return (
    <div>
      
      <section className={headerSectionStyles.headerSection}>
        <div className={headerSectionStyles.surveyBox}>
        <h1>2 - {currentStep.title}</h1>
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

export default VistoriaStep2;

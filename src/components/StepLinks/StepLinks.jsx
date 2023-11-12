import React from 'react';
import Link from 'next/link';

const StepLinks = ({ currentStep, steps }) => {
  return (
    <div>
      <h2>Escolha uma etapa:</h2>
      <ul>
        {steps.map((step) => (
          <li key={step.id}>
            
            <div onClick={() => Router.push(`/vistoria/${step.id}`)} className={currentStep === step.id ? 'active' : ''}>
              {step.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepLinks;

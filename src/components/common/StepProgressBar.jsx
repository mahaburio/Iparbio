import React from 'react';
import '../../styles/components/stepper.css';

const StepProgress = ({ currentStep, steps = [], onStepClick, maxStepReached }) => {
  const fillPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="step-wrapper">
      <div className="step-progress">
        <div className="step-bar">
          <div className="step-bar__fill" style={{ width: `${fillPercentage}%` }}></div>
        </div>

        <div className="step-points">
          {steps.map((label, idx) => {
            const index = idx + 1;
            const pointClass =
              index < currentStep
                ? 'step-point step-complete'
                : index === currentStep
                ? 'step-point step-active'
                : 'step-point';

            const isClickable = index <= maxStepReached;

            return (
              <div
                key={index}
                className={pointClass}
                onClick={() => isClickable && onStepClick(index)}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <div className="step-bullet" />
                <label className="step-label">{label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepProgress;

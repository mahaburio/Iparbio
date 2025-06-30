import React, { useState } from 'react';
import './StepProgress.css';

const StepProgress = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Step 1-based

  const steps = ['Select', 'Review', 'Payment', 'Success', 'Complete'];

  const fillPercentage = ((activeIndex - 1) / (steps.length - 1)) * 100;

  return (
    <div className="step-wrapper">
      <div className="step-progress">
        <div className="step-bar">
          <div
            className="step-bar__fill"
            style={{ width: `${fillPercentage}%` }}
          ></div>
        </div>

        <div className="step-points">
          {steps.map((label, idx) => {
            const index = idx + 1;
            const pointClass =
              index < activeIndex
                ? 'step-point step-complete'
                : index === activeIndex
                ? 'step-point step-active'
                : 'step-point';

            return (
              <div
                key={idx}
                className={pointClass}
                onClick={() => setActiveIndex(index)}
              >
                <div className="step-bullet"></div>
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

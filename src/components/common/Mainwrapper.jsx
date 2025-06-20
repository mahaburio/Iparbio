import React from 'react';
import '../../styles/style.css'

function MainWrapper({ className = '', children }) {
  return (
    <div className={`main-wrapper ${className}`}>
      {children}
    </div>
  );
}

export default MainWrapper;


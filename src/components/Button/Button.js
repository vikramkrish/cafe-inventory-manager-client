import React from 'react';
import '../Button/Button.css';

const Button = ({ onClick, children, className = '' }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;

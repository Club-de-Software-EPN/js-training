import React from 'react';

import '../styles/button.css'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="button">{text}</button>
  );
}

export default Button;

import React from 'react';

import '../styles/button.css'

const Button = (props) => {
  return (
    <button className="button">{props.text}</button>
  );
}

export default Button;

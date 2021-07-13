import React from 'react';
import '../styles/components/button.css';

const Button = (props) => {

  const handleClick = () => {
    alert("Button clicked!")
  }

  return(
    <button onClick={handleClick} className="button">{props.text}</button>
  );
}

export default Button;

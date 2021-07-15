import React from 'react';
import Button from './Button';
import '../styles/counterActions.css';

const CounterActions = () => {
  return (
    <div className="counterActions__container">
      <Button text="+"/>
      <Button text="-"/>
    </div>
  );
}

export default CounterActions;

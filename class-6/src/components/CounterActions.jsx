import React from 'react';
import Button from './Button';
import '../styles/counterActions.css';

const CounterActions = ({setValue}) => {
  const add = () => {
    setValue((prevState) => {
      return prevState + 1;
    });
  }

  const min = () => {
    setValue((prevState) => {
      return prevState - 1;
    });
  }

  return (
    <div className="counterActions__container">
      <Button onClick={add} text="+"/>
      <Button onClick={min} text="-"/>
    </div>
  );
}

export default CounterActions;

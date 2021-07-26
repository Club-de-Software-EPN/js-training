import React from 'react';
import CounterActions from './CounterActions';

import '../styles/counterContainer.css';

const CounterContainer = ({value, setValue}) => {
  return (
    <div className="counter__container">
      <p className="counter__display">{value}</p>
      <CounterActions setValue={setValue}/>
    </div>
  );
}

export default CounterContainer;

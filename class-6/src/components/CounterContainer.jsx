import React from 'react';
import CounterActions from './CounterActions';

import '../styles/counterContainer.css';

const CounterContainer = () => {
  return (
    <div className="counter__container">
      <p className="counter__display">1</p>
      <CounterActions />
    </div>
  );
}

export default CounterContainer;

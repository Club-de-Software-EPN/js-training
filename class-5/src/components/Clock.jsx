import React from 'react';
import '../styles/components/clock.css'

const Clock = (props) => {
  return (
    <div className="clock__container">
      <span className="clock__time">{props.time}</span>
    </div>
  );
}

export default Clock;

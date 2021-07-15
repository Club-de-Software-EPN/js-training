import React from 'react';
import CounterContainer from './components/CounterContainer';
import './styles/app.css';

import imageLogo  from './assets/logo.png';

const App = () => {
  return (
    <>
      <img className="app__logo" src={imageLogo} alt="logo"/>
      <h1 className="app__title">Counter</h1>
      <CounterContainer />
    </>
  );
}

export default App;
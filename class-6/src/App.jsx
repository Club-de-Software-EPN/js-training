import React,{ useState, useEffect }  from 'react';
import CounterContainer from './components/CounterContainer';
import './styles/app.css';

import imageLogo  from './assets/logo.png';
import Button from './components/Button';

const App = () => {
  const [value, setValue] = useState(0);

  //onMount
  useEffect(() => {
    console.log("Esto se ejecuta al inicio");
    const storedValue = window.localStorage.getItem('value');
    if(storedValue !== null) {
      setValue(Number(storedValue));
    }
  },[]);

  //onUpdate
  useEffect(() => {
    window.localStorage.setItem('value', value);
  }, [value]);

  const clearLocalStorage = () => {
    window.localStorage.removeItem('value');
    setValue(0);
  }


  return (
    <>
      <img className="app__logo" src={imageLogo} alt="logo"/>
      <h1 className="app__title">Counter</h1>
      <CounterContainer value={value} setValue={setValue}/>
      <br/>
      <Button text="Clear" onClick={clearLocalStorage}/>
    </>
  );
}

export default App;
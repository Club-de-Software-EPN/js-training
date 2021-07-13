import React, { useState, useEffect } from 'react';
import logoImage from './assets/logo.png';
import Clock from './components/Clock';
import './styles/app.css';

const App = () => {
  const [time, setTime] = useState(new Date());

  //Before each and after render
  useEffect(() => {
    console.log("This happen first")
    //Real time update implementation
    const timer = setInterval(() => {
      //time = new Date() => Never!
      setTime(new Date()) // => OK!
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  // //After each render
  // useEffect(() => {
  //   return () => {
  //     console.log("Unmount")
  //   }
  // }, []);

  return(
    <>
      <img className="app__logo" src={logoImage} alt="logo"/>
      <h1 className="app_title">Clock</h1>
      <Clock time={time.toLocaleTimeString()}/>
    </>
  );
}

export default App;

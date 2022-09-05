import React from 'react';
import './App.css';
import {Greeting} from "./Greeting";
import {Banner} from "./Banner";


export const App = () => {
  return (
    <>
      <Banner/>
      <Greeting/>
    </>  
  );
}

export default App;

import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';
import style from './App.module.scss'
import { Itarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista tarefas={tarefas}></Lista> 
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;

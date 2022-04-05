import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';
import style from './App.module.scss'
import { Itarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionado: Itarefa) {
    setSelecionado(tarefaSelecionado);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      ></Lista> 
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Comentario} from './Componentes/ComponentesFuncionales'
import Inicio from './Componentes/Paginas/Inicio'

const miFucnion = (valor) => {
  return valor*2
}

function App() {
  return (
    <div className="App">
      <Comentario nombre="juan"/>
      <Comentario nombre="daniel"/>
      <Inicio multiplicar={miFucnion}/>
    </div>
  );
}

export default App;

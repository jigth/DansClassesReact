import React from 'react';
import './Sass/main.scss'
import {Comentario, Foto} from './Componentes/ComponentesFuncionales.js';
import Inicio from './Componentes/Paginas/Inicio.js';
import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js'
import Main from './Componentes/Paginas/Main.js'

function App() {
  return (
    <div class="App">
      
      <Header nombre="Dan's Classes" />
      <Main />
      <Footer />

      
  </div>
    
  );
}

export default App;

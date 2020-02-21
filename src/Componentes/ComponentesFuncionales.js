import React from 'react'

export function Comentario(props){
  return (
    <div>
      <Foto nombre_imagen="Mi fotico"/>
      <label>Nombre del usuario:{props.nombre}</label>
      <button> Enviar </button>
    </div>
  );
}

export const Foto = (props) => {
  return (
    <div className="card">
      <div className="prj-imagen">
        <img alt=""></img>
      </div>
      <span>{props.nombre_imagen}</span>
    </div>
  )
}
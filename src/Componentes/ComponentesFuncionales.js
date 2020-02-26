import React from 'react'

export const Comentario = (props) => {
  return (
    <div>
      <Foto nombre_imagen="Mi fotico"/>
      <label>Nombre del usuario: {props.nombre}</label><br />
      <button> Enviar </button><br />
    </div>
  );
}

function Foto (props) {
  return (
    <div className="card">
      <div className="prj-imagen">
        <img alt=""></img>
      </div>
      <span>{props.nombre_imagen}</span>
    </div>
  )
}
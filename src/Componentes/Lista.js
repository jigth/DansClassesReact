import React from 'react'

// Renderiza un arreglo de items como una lista
export default function Lista(props) {
    const lista = props.items.map((item, index) => <li key={index}>{item.nombre} - {item.correo} </li>) 
    return (
        <ul>{lista}</ul>
    )
}
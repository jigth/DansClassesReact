import React, {Component} from 'react'
import {Lista} from '../Componentes/Lista'

export default class UsuariosRegistrados extends Component{
   constructor(props) {
        super(props);
        this.state = { nombre: "", correo: "", registros: [] }
    }

    onChange = (e) => {
        if (e.target.id === "nombre") this.setState({nombre: e.target.value})
        else if (e.target.id === "correo") this.setState({correo: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const nuevoRegistro = { nombre: this.state.nombre, correo: this.state.correo, imagen: ""}
        this.setState({
            registros: [...this.state.registros, nuevoRegistro]
        })
    }

    render() {
        return (
        <div className="row">
            <div className="card formulario col">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Usuario</label>
                        <input onChange={this.onChange} className="form-control" id="nombre" placeholder="Nombre de usuario" />

                        <label htmlFor="correo">Correo</label>
                        <input onChange={this.onChange} type="email" className="form-control" id="correo" placeholder="Correo electrónico" />
                    </div>
                    <button type="submit" style={{width:'100%'}} className="btn btn-primary">Guardar</button>
                </form>
            </div>
            <div className="card formulario col">
                <div>
                    <h3>Usuarios Registrados</h3>
                    {<Lista items={this.state.registros} />}
                </div>
            </div>
        </div>
        )
    }
}
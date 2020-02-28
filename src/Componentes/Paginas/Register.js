import React, {Component} from 'react';
import {InformacionPersona} from '../ComponentesFuncionales'
import axios from 'axios';
import Lista from '../Lista'

export default class Register extends Component {
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
        <div>
            <center><h1 className="title-red">Regístrate</h1></center>
            <div className="row main-container">
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
                        <h3 className="title-green">Usuarios Registrados</h3>
                        {<Lista items={this.state.registros} />}
                    </div>
                </div>
            </div>
        </div>  
        
        )
    }
}
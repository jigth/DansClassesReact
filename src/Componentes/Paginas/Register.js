import React, {Component} from 'react';
import {InformacionPersona} from '../ComponentesFuncionales'
import axios from 'axios';  // No need to import it named as 'Api"

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: "",
            registros: []
        }
    }

    async consumirAPI() {
        let answer = await axios.get("https://pokeapi.co/api/v2/pokemon")
        console.log(answer.data);
    };


    llenarCampo = (e) => {
        if (e.target.id === "correo") {
            this.setState({correo: e.target.value});
        } else {  // If it's "nombre"...
        this.setState({nombre: e.target.value});
        }
    }

    nuevoItem = (e) => {
        e.preventDefault();
        let item = {
            correo: this.state.correo,
            nombre: this.state.nombre,
            imagen: ""
        }
        this.setState({registros: this.state.registros.push(item)})
        
        console.log('nuevo item ', this.state.registros)
    }


    render() {
        return (
        <div>
            <div className="row">    
                <div className="card formulario col">
                <button onClick={this.consumirAPI} className="btn btn-primary">Consumir API </button>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
                            <input onChange={this.llenarCampo} type="email" className="form-control" id="correo" placeholder="Introduzca su correo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contraseña</label>
                            <input onChange={this.llenarCampo} type="password" className="form-control" id="nombre" placeholder="Introduzca su contraseña" />
                        </div>
                        <button onClick={this.nuevoItem} type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                </div>
                <div className="col">
                {
                    //console.log('res ',this.state.registros)
                    
                }
                </div>
            </div>
        </div>
        )
    }
}
import React, {Component} from 'react';


export default class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <a class="navbar-brand" href="/">{this.props.nombre}</a>
                <a class='menu-item' href='/Login'>Iniciar Sesión</a>
                <a class='menu-item' href='/Registro'>Registrarse</a>
            </nav>
        )
    }
}
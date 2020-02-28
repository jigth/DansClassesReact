import React, {Component} from 'react';


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="/">{this.props.nombre}</a>
                <a className='menu-item' href='/Login'>Iniciar Sesión</a>
                <a className='menu-item' href='/Registro'>Registrarse</a>
            </nav>
        )
    }
}
import React,{Component} from 'react'

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">{this.props.nombre}</a>
            <a href="/Login" className="item-menu">Iniciar Sesion</a>
            <a href="/Registro" className="item-menu">Registrar</a>
          </nav>
        )
    }
}

export default Header;
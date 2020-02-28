import React,{Component} from 'react'

class Inicio extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
      elementos: []
    }

    this.actualizarContador = this.actualizarContador.bind(this);
  }

  componentDidMount(){
    this.setState({contador:1})
  }

  actualizarContador(){
    this.setState({contador:this.state.contador+1})
  }

  render(){
    return (
      <h1 class='title-red'>Iniciar Sesion</h1>
    )
  }
}

export default Inicio;
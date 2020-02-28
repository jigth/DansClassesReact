import React, {Component} from 'react'

export default class Contador extends Component {
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
          <div className="little-container container" style={{marginTop: "15px"}}>
                <div className="alert alert-primary">
                <h1 className="title-green">Contador ligero</h1>
                    <p className="text-center"><strong>Contador:</strong> {this.state.contador}</p>
                    <button className="btn btn-info w-100 p-3" onClick={this.actualizarContador}>Incrementar</button>
                </div>
          </div>
        )
      }
}
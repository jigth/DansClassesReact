import React,{Component} from 'react'
import {Route, BrowserRouter as Router}  from 'react-router-dom'
import Inicio from './Inicio'
import Register from './Register'

const Navegacion = (
  <Router>
    <Route path="/Login" component={Inicio} />
    <Route path="/Registro" component={Register} />
  </Router>
)

class Main extends Component{

    render(){
      return (
        <div className="main-container">
           {
             Navegacion
           }
        </div>
      )
    }
}

export default Main;
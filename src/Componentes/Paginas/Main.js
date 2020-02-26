import React, {Component} from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Inicio from './Inicio';
import Register from './Register';


export default class Main extends Component {
    constructor(props) {
        super(props);  // If this class is used to render content with props
        this.routes = (
            <BrowserRouter>
                <Route path='/Login' component={Inicio}></Route>
                <Route path='/Registro' component={Register}></Route>
            </BrowserRouter>
        )
    }

    render(){
        return (
            <div className=' main-container'>
                {this.routes}
            </div> 
        )
    }
}
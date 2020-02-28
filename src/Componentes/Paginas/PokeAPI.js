import React, {Component} from 'react'
import API from 'axios';

export default class PokeAPI extends Component {
    constructor(props) {
        super(props)
    }

    randomBetween(min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min
    }

    generarPokemon = async() => {
        const req = await API.get('https://pokeapi.co/api/v2/pokemon')
        const posicion = this.randomBetween(0, req.data.results.length-1);
        const pokemonCreado = req.data.results[posicion]
        alert(`Congratulations, you selected ${pokemonCreado.name.toUpperCase()}`)
    }

    render() {
        return (
            <center>
                <div className="little-container">
                    <center><h1 className="title-green"> Consume la PokeAPI :D</h1></center>
                    <button onClick={this.generarPokemon} className="btn btn-danger" style={{width: "100%"}}>Consumir API</button>
                </div>
            </center>
        )
    }
}
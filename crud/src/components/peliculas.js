import React, {Component} from 'react';

class Peliculas extends Component{
    render(){
        return this.props.data.map(e => <p  id="hello"> <h1>{e.titulo}</h1> {e.description} <br />
            <b>Director:</b> {e.director} <br />
            <b>Producción:</b> {e.produccion} <br />
            <b>Duración:</b> {e.duracion} <div id="imagen"></div></p>)
        
    }
}

export default Peliculas;
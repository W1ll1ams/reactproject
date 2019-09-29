import React from 'react';
import './App.css';
import data from './data.json'
import Lista from './components/lista.js'
import Add from './components/agregar.js'
import Crear from './components/crear.js'

/*function Helloworld(props) { //props en realidad es un objeto de llave valor
  return (
    <div id="hello">
      <h3>{props.subtitile}</h3>
      {props.mytext}
    </div> 
  );
}*/

/*class Helloworld extends React.Component {
  
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  
  render() {
    if (this.state.show){
      return(
        <div id="hello">
          <h3>{this.props.subtitile}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Apagame</button>
        </div>
      )
    }
    else{
      return(
        <div>
          <h3>No hay nada.</h3>
          <button onClick={this.toggleShow}>Enciendeme</button>
        </div>
      )
    }
    
  }
}*/

//const App = () => <div>This is my componenet: <Helloworld/> </div>

class App extends React.Component {
  constructor(){
    super();
    localStorage.setItem('data', JSON.stringify(data));
    this.state={data:JSON.parse(this.getData()),show:0};
  }

  pelicula = {
    id: "",
    titulo : "",
    description : "",
    director : "",
    produccion : "",
    duracion : "",
    imagen : "",
    done : false
  }

  getData() {
    return localStorage.getItem('data');
  }

  cr = () => {
    this.setState({show: 0});
  }

  add = () => {
    this.setState({show: 1});
  }

  mod = (p) => {
    this.setState({show: 2});
  }

  ver = () => {
    this.setState({show: 3});
  }
  
  change = (e) => {
    console.log(e);
  }

  render() {
    if (this.state.show === 0){
      return <div><Add accion={this.add} /><Lista data={this.state.data} mod={this.mod} ver={this.ver} /></div>
    }
    else if (this.state.show === 1){
      return <div><Crear accion={this.cr} cm="Crear" change={this.change} pelicula={this.pelicula} /></div>
    }
    else if (this.state.show === 2){
      return <div><Crear accion={this.cr} cm="Modificar" change={this.change} pelicula={this.pelicula}/></div>
    }
    
    /*return <div ><Pelis data={this.state.data}/></div>*/
  }
}

/*function App() {
  return (
    <div>
      This is my componenet: 
      <Helloworld mytext="Hello Fazt" subtitile="expecto patronum"/> 
      <Helloworld mytext="Hello Williams" subtitile="clase"/> 
      <Helloworld mytext="Hola Mundo" subtitile="España"/> 
    </div>
  );
}*/

export default App;

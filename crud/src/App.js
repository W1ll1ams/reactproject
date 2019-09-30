import React from 'react';
import './App.css';
import data from './data.json'
import Lista from './components/lista.js'
import Add from './components/agregar.js'
import Crear from './components/crear.js'
import Ver from './components/ver.js'

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

var pelicula = {
  id: "",
  titulo : "",
  description : "",
  director : "",
  produccion : "",
  duracion : "",
  imagen : "",
  done : false
};

var x = 4;

class App extends React.Component {
  constructor(){
    super();
    localStorage.setItem('data', JSON.stringify(data));
    this.state={
      data:JSON.parse(this.getData()),
      show:0
    };
  }

  getData() {
    return localStorage.getItem('data');
  }

  cr = (op) => {
    if(op===0){
      if (window.confirm("¿Está seguro que desea modifcar " + pelicula.titulo + "?")===true) {
        this.modPelicula(pelicula);
        this.setState({show: 0});
      } 
    }
    else{
      this.addPelicula(pelicula);
      alert(pelicula.titulo + " agregado exitosamente.");
      this.setState({show: 0});
    }
  }

   modPelicula(prmData){
    let dataPelicula = JSON.parse(this.getData());
    
    for (let i = 0; i < dataPelicula.length; i++) {
      if (dataPelicula[i].id === prmData.id) {
        dataPelicula.splice(i,1,prmData);
      }
    }

    localStorage.setItem('data',JSON.stringify(dataPelicula));
    this.setState({...this.state, data: JSON.parse(this.getData())});
  }

  addPelicula(prmData){
    x++;
    prmData=({...prmData, id:x});
    let dataPelicula = JSON.parse(this.getData());
    dataPelicula.push(prmData);

    localStorage.setItem('data',JSON.stringify(dataPelicula));
    this.setState({...this.state, data: JSON.parse(this.getData())});
  }

  add = () => {
    pelicula = {
      id: "",
      titulo : "",
      description : "",
      director : "",
      produccion : "",
      duracion : "",
      imagen : "",
      done : false
    };
    this.setState({show: 1});
  }

  mod = (p) => {
    pelicula = this.state.data.filter(movie => movie.id === p)[0];
    this.setState({show: 2});
  }

  del = (p) => {
    pelicula = this.state.data.filter(movie => movie.id === p)[0];
    if (window.confirm("¿Está seguro que desea eliminar " + pelicula.titulo + "?")) {
      pelicula = this.state.data.filter(movie => movie.id !== p);
      localStorage.setItem('data',JSON.stringify(pelicula));
      this.setState({...this.state, data: JSON.parse(this.getData())});
    } 
  }

  ver = (p) => {
    pelicula = this.state.data.filter(movie => movie.id === p)[0];
    this.setState({show: 3});
  }
  
  change = (e) => event => {
    pelicula = ({...pelicula, [e]:event.target.value})
  }

  cancel = () => {
    this.setState({show: 0});
  }

  render() {
    if (this.state.show === 0){
      return <div><Add accion={this.add} /><Lista data={this.state.data} mod={this.mod} del={this.del} ver={this.ver} /></div>
    }
    else if (this.state.show === 1){
      return <div><Crear accion={() => this.cr(1)} cancelar={this.cancel} cm={["Crear","Creación"]} change={this.change} pelicula={pelicula} /></div>
    }
    else if (this.state.show === 2){
      return <div><Crear accion={() => this.cr(0)} cancelar={this.cancel} cm={["Modificar","Modificación"]} change={this.change} pelicula={pelicula}/></div>
    }
    else if (this.state.show === 3){
      return <div><Ver data={[pelicula]} mod={this.mod} del={this.del} ver={this.ver}/></div>
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

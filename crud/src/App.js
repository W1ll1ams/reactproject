import React from 'react';
import './App.css';
import Lista from './components/lista.js'
import Add from './components/agregar.js'
import Crear from './components/crear.js'
import Ver from './components/ver.js'
import axios from 'axios'

var pelicula = {
  titulo : "",
  description : "",
  director : "",
  produccion : "",
  duracion : "",
  imagen : "",
  done : false
};

var datos = [];
class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:datos,
      show:0
    };
  }

  componentDidMount(){
    return this.getData().then(res => {
      return this.setState({data: res.data});
    })
  }

  getData() {
    return axios.get('http://localhost:4000/api/v1/peliculas/')
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
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

  async modPelicula (prmData){
    //let dataPelicula = JSON.parse(this.getData());
    
    await axios.put('http://localhost:4000/api/v1/peliculas/update', {pelicula: prmData})
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });

    /*for (let i = 0; i < dataPelicula.length; i++) {
      if (dataPelicula[i].id === prmData.id) {
        dataPelicula.splice(i,1,prmData);
      }
    }*/

    //localStorage.setItem('data',JSON.stringify(dataPelicula));
    //await this.setState({...this.state, data: this.getData()});
  }

  addPelicula(prmData){
    
    prmData=({...prmData});
    return axios.post('http://localhost:4000/api/v1/peliculas/add', {pelicula: prmData})
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
    //let dataPelicula = JSON.parse(this.getData());
    //dataPelicula.push(prmData);
    //localStorage.setItem('data',JSON.stringify(dataPelicula));
  }

  add = () => {
    pelicula = {
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

  mod = async (p) => {
    pelicula = await axios.get(`http://localhost:4000/api/v1/peliculas/${p}`)
      .then(function (response) {
        return response.data[0];
      })
      .catch(function (error) {
        return error;
      });
    this.setState({show: 2});
  }

  del = async (p) => {
    pelicula = await axios.get(`http://localhost:4000/api/v1/peliculas/${p}`)
      .then(function (response) {
        return response.data[0];
      })
      .catch(function (error) {
        return error;
      });
    if (window.confirm("¿Está seguro que desea eliminar " + pelicula.titulo + "?")) {
      axios.delete(`http://localhost:4000/api/v1/peliculas/del/${p}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
      //pelicula = this.state.data.filter(movie => movie.id !== p);
      //localStorage.setItem('data',JSON.stringify(pelicula));
      //await this.setState({...this.state, data: this.getData()});
    } 
  }

  ver = async (p) => {
    pelicula = await axios.get(`http://localhost:4000/api/v1/peliculas/${p}`)
      .then(function (response) {
        return response.data[0];
      })
      .catch(function (error) {
        return error;
      });
    //pelicula = this.state.data.filter(movie => movie.id === p)[0];
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
      return <div><Ver data={[pelicula]} regresar={this.cancel}/></div>
    }
    
    /*return <div ><Pelis data={this.state.data}/></div>*/
  }
}


export default App;

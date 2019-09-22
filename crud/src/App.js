import React from 'react';
import './App.css';
import data from './data.json'
import Pelis from './components/peliculas.js'

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

  state = {
    data: data
  }

  render() {
    return <div ><Pelis data={this.state.data}/></div>
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

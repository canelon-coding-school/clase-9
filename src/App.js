import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  sayHi = () => {
    axios.get('http://192.168.0.11:9000/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(response => alert(response.data))
      .catch(error => alert(error));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.sayHi}>
          get !
        </button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

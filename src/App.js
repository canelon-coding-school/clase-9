import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: null }
  }

  sayHi = () => {
    axios.get('http://192.168.0.11:9000/')
      .then(response => 
        this.setState({ message: response.data })
      )
      .catch(error => alert(error));
  }

  render() {
    const { message } = this.state;

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
            {message ? message : 'Learn React'}
          </a>
        </header>
      </div>
    );
  }
}

export default App;

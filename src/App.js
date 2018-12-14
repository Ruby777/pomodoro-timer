import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiqOH1fo1rlYdVS4ZKzy_ZHX85kgMoIlU",
  authDomain: "pomodoro-a4d1d.firebaseapp.com",
  databaseURL: "https://pomodoro-a4d1d.firebaseio.com",
  projectId: "pomodoro-a4d1d",
  storageBucket: "pomodoro-a4d1d.appspot.com",
  messagingSenderId: "108481377327"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
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

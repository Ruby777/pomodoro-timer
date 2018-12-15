import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import Timer from './components/Timer.js'

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
          <p> MY POMODORO TIMER </p>
        </header>

        <Timer />

      </div>
    );
  }
}

export default App;

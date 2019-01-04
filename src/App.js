import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Timer from './components/Timer.js';
import TaskHistory from './components/TaskHistory.js';

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

  constructor(props){
    super(props)

    this.state = {
      activeTask:null
    };
  }

  setActiveTask(task){
    this.setState({ activeTask: task });
  }



  render() {
    return (
      <section className="App">
        <header className="App-header">
          <p> MY POMODORO TIMER </p>
        </header>
        <div>
          <Timer />
        </div>
        <div>
          <TaskHistory
            firebase = {firebase} />
        </div>
      </section>
    );
  }
}

export default App;

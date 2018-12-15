import React, { Component } from 'react';
import './../assets/Timer.css'

class Timer extends Component {

    constructor(props){
        super(props);

        this.state = {
            time: 0,
            play: false,
            title:''
        }; /* this.state */
    }

    componentDidMount(){
        this.setDefaultTime();
    }

   // Formating Milliseconds to seconds and minutes
    format(timeInMilliseconds){
        var timeInSeconds = Math.floor(timeInMilliseconds / 1000);
        var minutes = Math.floor(timeInSeconds/60);
        var seconds = Math.floor(timeInSeconds - (minutes * 60));

        if(minutes < 10){ minutes = "0" + minutes;}
        if(seconds < 10){ seconds = "0" + seconds;}

        return minutes + ':' + seconds;
    }

    // Start and Stop the Work Session Timer
    playReset() {
        if (this.state.play === false){

            this.setState({ time : 1500000 });
            this.setState({ play: true });
            this.setState({title: 'Reset'});
            this.interval = setInterval(() => {
                this.setState(prevState => ({
                time: prevState.time - 1
              }));
      
                if (this.state.time === 0) {this.reset();}
            });

        } else {
            if (this.state.play === true ){
                clearInterval(this.interval);
                this.setDefaultTime();
                this.setState({ play: false });
                this.setState({title: 'Start a Work Session'});
            }
        }
    }

    //Reset Function
    reset(){
        if (this.state.play === true ){
            clearInterval(this.interval);
            this.setDefaultTime();
            this.setState({ play: false });
        }
    }

    /*
    break() {    
        if (this.state.play === false){

            this.setState({ time : 300000 });
      
            this.setState({ play: true });
            this.interval = setInterval(() => {
                this.setState(prevState => ({
                time: prevState.time - 1
              }));
      
                if (this.state.time === 0) {this.reset();}
            });

        } else {
            if (this.state.play === true ){
                clearInterval(this.interval);
                this.setDefaultTime();
                this.setState({ play: false });
            }
        }
    } */

    // Setting Defaults
    setDefaultTime() {
        let defaultTime = 0;

        this.setState({
            time: defaultTime,
            play: false,
            title: 'Start a Work Session' 
        });
    }


    render(){
        return(
            <div> 
                <span className="time">{this.format(this.state.time)}</span> <br/>
                <button className="start" onClick={() =>this.playReset()}>{this.state.title}</button>
                <button className="break" onClick={() =>this.break()}>Take a Break</button>
            </div>
        );
    }
}

export default Timer;
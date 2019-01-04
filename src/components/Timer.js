import React, { Component } from 'react';
import './../assets/Timer.css';
import alarm from './../assets/analog-watch-alarm_daniel-simion.wav';

class Timer extends Component {

    constructor(props){
        super(props);

        this.state = {
            time: 0,
            play: false,
            title:'',
            sessionsCount: 0
        }; /* this.state */
        this.interval = null;
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


    // A function to handle button onClick 
    handleToggleClick(){
        if (this.state.title === 'Start Work Session'){
            return this.workStart();
        } 
        if (this.state.title === 'Reset Work Session'){
            return this.resetWorkSession();
        } 
    }

    //function to handle work sessions
    handleSessions(){
        if (this.state.sessionsCount === 4){
            
            this.setState({
                sessionsCount: 0
            });
            
            this.longBreak();
        } else { 
            this.shortBreak();
        }
    }
    
    // Work Session Timer
    workStart() {

        this.setState({ 
            time: 1500000,
            play: true,
            title: 'Reset Work Session'
        });
       
        this.interval = setInterval(() => {
            this.setState(prevState => ({
               time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                this.playSound();
                this.setState(prevState =>{
                    return{sessionsCount: prevState.sessionsCount + 1}
                }); 
                this.handleSessions();
            }
        });
    }

    // Five minute break
    shortBreak() { 
        
        this.setState({ 
            time: 300000,
            play: true,
            title: 'Start Work Session'
        });

        this.interval = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                this.playSound();
                this.workStart();
            } 
        });
    }
    
    // Thirty minute break
    longBreak(){
       
        this.setState({ 
            time: 1800000,
            play: true,
            title: 'Start Work Session'
        });
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                this.playSound();
                this.workStart();
            }
        });
    }

    resetWorkSession(){
        clearInterval(this.interval);
        this.setState({ 
            time : 1500000,
            play: false,
            title: 'Start Work Session'
        });
    }

   //audio
   playSound(){
        this.audio.play();
        setTimeout(() => this.audio.pause(), 2000);
    }
   

    // Setting Defaults
    setDefaultTime() {
        let defaultTime = 0;

        this.setState({
            time: defaultTime,
            play: false,
            title: 'Start Work Session',
            sessionsCount: 0
        });
    }
    
    render(){
        return(
            <div> 
                <audio ref={(a) => this.audio = a} src={alarm}/>
                <span className="time">{this.format(this.state.time)}</span> <br/>
                <button className="start" onClick={() =>this.handleToggleClick()}>{this.state.title}</button>
            </div>
        );
    }
}

export default Timer;
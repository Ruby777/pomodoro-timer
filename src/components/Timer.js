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

    // A function to handle button onClick 
    handleToggleClick(){
        if (this.state.title === 'Start Work Session'){
            return this.workStart();
        } 
        if (this.state.title === 'Reset Work Session'){
            return this.resetWorkSession();
        } 
    }

    
    // Start the Work Session Timer
    workStart() {
        const workTime = 1500000;

        this.setState({ 
            time: workTime,
            play: true,
            title: 'Reset Work Session'
        });
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));
        
            if (this.state.time === 0) {
                this.shortBreak();
            } 
        });
    }

    // Five minute break
    shortBreak() {    
        const shortBreakTime = 300000;

        this.setState({ 
            time: shortBreakTime,
            play: true,
            title: 'Start Work Session'
        });

        this.interval = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                this.workStart();
            } 
        });
    } 

    // thirty minute break session
    longBreak(){
        const breakTime = 1800000;
       
        this.setState({ 
            time: breakTime,
            play: true
        });
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time - 1
            }));

            if (this.state.time === 0) {
                this.workStart();
            }
        });
    }

    resetWorkSession(){
        const workTime = 1500000;

        clearInterval(this.interval);
        this.setState({ 
            time : workTime,
            play: false,
            title: 'Start Work Session'
        });
    }

    //Reset Function
    resetLongBreak(){
        if (this.state.play === true){
            clearInterval(this.interval);
            this.setState({
                time: 0,
                play: false 
            });
        }  
    }

    
    // Setting Defaults
    setDefaultTime() {
        const defaultTime = 0;

        this.setState({
            time: defaultTime,
            play: false,
            title: 'Start Work Session' 
        });
    }
    
    render(){
        return(
            <div> 
                <span className="time">{this.format(this.state.time)}</span> <br/>
                <button className="start" onClick={() =>this.handleToggleClick()}>{this.state.title}</button> 
                <button className="break" onClick={() =>this.longBreak()}>Take a 30 minute Break</button> 
            </div>
        );
    }
}

export default Timer;
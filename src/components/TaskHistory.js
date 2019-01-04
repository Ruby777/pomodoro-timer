import React, { Component } from 'react';
import './../assets/TaskHistory.css';

class TaskHistory extends Component {

    constructor(props){
        super(props);

        this.state = {
            tasks: [],
            taskName: ''
        };
    
    this.tasksRef = this.props.firebase.database().ref('tasks');
    }

    componentDidMount() {
        this.tasksRef.on('child_added', snapshot =>{
            const task = snapshot.val();
            task.key = snapshot.key;
            this.setState({ tasks: this.state.tasks.concat( task ) });
        });
    }
     
    handleNewTaskName(e){
        let newTaskName = e.target.value;
        this.setState({ taskName: newTaskName});
    }

    createTask(){
        this.tasksRef.push({name: this.state.taskName});
        this.setState({taskName:""});
    }
  
  render(){
      const template = this.state.tasks.map((task, i) => {
          return(
              <span key={task.key} 
               onClick = {() => {this.props.setActiveTask(task)}}>{task.name}
               <hr/>
               </span>
            )
      });

      return (
            <div className="taskList">
                
                <form className="createTask" onSubmit={(e) => {e.preventDefault(); this.createTask()}}>
                    <input
                        className="taskInput"
                        type="text"
                        placeholder="New Task"
                        value={this.state.taskName}
                        onChange={(e) => this.handleNewTaskName(e)}
                    />
                    <button className="taskBtn">Add Task</button>
                </form>    
                <p className="newTask">Task History</p>
                <ul>{template.reverse()}</ul>      
            </div>
       );
    }
};

export default TaskHistory;


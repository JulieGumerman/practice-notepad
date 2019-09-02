import React from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stuffToDo: [{
        task: "", 
        id: Date.now(),
        completed: false
      }],
      task: ""
    }
  } //close constructor

  //Functions to include...
  //--completed toggle function
  toggleCompletion = id => {
    this.setState({
      stuffToDo: this.state.stuffToDo.map(todo => {
        if (id===todo.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    })//close setState
  }//close toggleCompletion
  //--clearCompleted function filters out completed stuff and erases it
  //addToDo
  addToDo = task => {
    this.setState({
      stuffToDo: [...this.state.stuffToDo, {
        task: task,
        id: Date.now(),
        completed: false
      }] //end stuffToDo
    }) //end setState
  } //end addToDo

  render() {
    return(
      <div>
        <h1>Things list</h1>
        <Form addToDo={this.addToDo} />
        <List state={this.state} toggleCompletion={this.toggleCompletion}/>
      </div>
    ); //close return
  }//close render
} //ends app

export default App;

import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import Config from './Firebase/Config';

class App extends Component {
  constructor(props){
    super(props);

    this.ref = firebase.database().ref('todos/');

    this.state ={
      submit: "",
      toDo : [],
      string: "",
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      submit : event.target.value
    })
  }

  handleCheck(event){
    var a = event.target.value;
    firebase.database().ref('todos/' + a).remove();

  }

  handleKeyDown(e){
    if(e.key == "Enter") {
      this.ref.push({
        todo: e.target.value
      })
      this.setState({
        submit : ''
      })
    }
  }

  handleClick(){
    this.ref.push({
        todo: this.state.submit
    })
    this.setState({
      submit : ''
    })
  }

  componentWillMount(){
    const todos = this.state.toDo;
    this.ref.on('child_added', snap => {
      todos.push({
        id: snap.key,
        todo: snap.val().todo,
      })
      this.setState({
        toDo: todos
      })
    })

    this.ref.on('child_removed', snap => {
      for(var i = 0; i < todos.length; i ++){
        if(todos[i].id === snap.key){
          todos.splice(i,1);
        }
        this.setState({
          toDo: todos
        })
      }
    })
  }


  render() {
    return (
      <div className = "wrapper">
      <input onChange = {this.handleChange} id="textField" value = {this.state.submit} type="text" className="form-control" placeholder="Enter new Task" onKeyDown={this.handleKeyDown}/>
      <button onClick = {this.handleClick} id="submitButton" className= "class12" type="submit" className="btn btn-primary">Submit</button>
      <div className = "todos">
       <p> Your List Of Things To:{
        (this.state.toDo.map(the => (<li key ={the.id}> {the.todo} <button value = {the.id} onClick = {this.handleCheck}> X </button> </li> )))
      }
      </p>

      </div>
      </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import Layout from './Layout.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      delete: "",
      submit: "",
      toDo : [],
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({
      submit : event.target.value
    })
  }

  handleCheck(event){
    let arr = this.state.toDo.filter((item) => {
      return item != event.target.value
    })
    this.setState({
      delete: event.target.value,
      toDo : arr
    })
  }

  handleKeyDown(e){
    if(e.key == "Enter") {
      var newArray = this.state.toDo.slice();
      newArray.push(this.state.submit);
      this.setState({
        submit: "",
        toDo : newArray
      })  
    }
  }
  handleClick(){
    var newArray = this.state.toDo.slice();
    newArray.push(this.state.submit);
    this.setState({
      submit: "",
      toDo : newArray
    })
  }

  render() {
    return (
      <div className = "wrapper">
      <input onChange = {this.handleChange} autofocus="autofocus" id="textField" value = {this.state.submit} type="text" class="form-control" placeholder="Enter new Task" onKeyDown={this.handleKeyDown}/>
      <button onClick = {this.handleClick} id="submitButton" type="submit" class="btn btn-primary">Submit</button>
      <div class = "todos">
      <p> Your List Of Things To Do: {this.state.toDo.map(todo => <li>{todo} <button value = {todo} onClick = {this.handleCheck}> X </button> </li>)}
      </p>
      </div>
      </div>

    );
  }
}

export default App;

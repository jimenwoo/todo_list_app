import React, { Component } from 'react';
import Layout from './Layout.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      submit: "",
      toDo : []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      submit : event.target.value
    })
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
      <input onChange = {this.handleChange} id="textField" value = {this.state.submit} type="text" class="form-control" placeholder="Enter new Task"/>
      <button onClick = {this.handleClick} id="submitButton" type="submit" class="btn btn-primary">Submit</button>
      <div class = "todos">
      <p> Your List Of Things To Do: {this.state.toDo.map(todo => <li>{todo}</li>)}
      </p>
      </div>
      </div>

    );
  }
}

export default App;

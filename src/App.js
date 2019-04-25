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
      <div className = "Testing">
      <Layout></Layout>
      <input onChange = {this.handleChange} type="text" value = {this.state.submit}/>
      <input onClick = {this.handleClick} type = "submit"/>
      <p> This is what you have to do: {this.state.toDo.map(todo => <p>{todo}</p>)}
       </p>
      </div>
    );
  }
}

export default App;

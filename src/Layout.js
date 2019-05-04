import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';
import App from "./App.js";

class Layout extends Component{
  render(){
    return(
      <div className = "container">
      <div className = "title"> To Do List </div>
      <App/>
      </div>
    )
  }
}

export default Layout;

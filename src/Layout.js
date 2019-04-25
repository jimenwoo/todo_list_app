import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';
import App from "./App.js";

class Layout extends Component{
  render(){
    return(
      <body>
      <div class = "container">
      <div class = "title"> To Do List </div>
      <App/>
      </div>
      </body>
    )
  }
}

export default Layout;

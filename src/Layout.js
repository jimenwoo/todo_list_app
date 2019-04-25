import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';


class Layout extends Component{
  render(){
    return(
      <div className = "NavBar">
      <p class = "testing"> What the fuck is this </p>
      <Navbar>
      <Navbar.Brand bsClass = "nav_bar_class" href="#home">Navbar with text</Navbar.Brand>
      <Navbar.Toggle />
      </Navbar>
      </div>
    )
  }
}

export default Layout;

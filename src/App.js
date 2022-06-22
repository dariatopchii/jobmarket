import logo from './logo.svg';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Component} from "react-router-dom";
import Button from '@mui/material/Button';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import Login from './Main/Login.js';  
import Reg from './Main/Reg.js';  
import Dashboard from './Main/Dashboard.js';  

 




export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render(){
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}


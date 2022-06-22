import * as React from 'react';
import ReactDOM from 'react-dom';
import Input from '@mui/material/Input';
import './Main.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Login from './Login.js';  
import Reg from './Reg.js';  
import Dashboard from './Dashboard.js';  
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';  


const ariaLabel = { 'aria-label': 'description' };



export default class Main extends React.Component {
  render() {
    return(
      <div className='container'> 
         <div className='filterContaner'>
        <div>
          <div className='menu-item'>
            <Input placeholder="min" inputProps={ariaLabel} />  
          </div>
          <div className='menu-item'>
            <Input placeholder="max" inputProps={ariaLabel} />  
          </div>
          <div className='menu-item'>
            <Input placeholder="a" inputProps={ariaLabel} />  
          </div>
    
        </div>
        <div className='mainContainer'>
          <Outlet/>
        </div>
      </div>
      </div>
    )
  }
}

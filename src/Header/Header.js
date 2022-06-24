import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Logo from '../logo.png';
import './Header.css';
import Login from '../Main/Login.js';  
import Reg from '../Main/Reg.js';  
import Dashboard from '../Main/Dashboard.js';  
import Cv from '../Cv.js';
import Vacancy from '../Vacancy.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from '../Main/Main.js';

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userLoggedIn: false
        }
    }
    
  componentDidMount() {
      this.waitForUpdates();
  }

    async waitForUpdates(){
      while (true){
          await Header.sleep(1000);
          if(localStorage.getItem('user')){
              this.setState({
                  userLoggedIn: true
              })
          }
      }
    }

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
    return(
      <div className='headerContainer'>
            <div className="logo">
              <img src={Logo} alt="websiteLogo"/>
            </div>
            <div className="nav-item">
              <Link to='/Vacancy' className="nav-link"><p>Вакансії</p></Link>
            </div>
            <div className="nav-item">    
              <Link to='/Cv' className="nav-link"><p>Резюме</p></Link>   
            </div>
          {
              this.state.userLoggedIn
              ? (<div className="nav-item">
                      <Link to='/Logout' className="nav-link"><p>Logout</p></Link>
                  </div>) 
              : <></>
          }
          {
              !this.state.userLoggedIn
                  ? (<div className="nav-item">
                      <Link to='/Login' className="nav-link"><p>Login</p></Link>
                  </div>)
                  : <></>
          }
          {
              !this.state.userLoggedIn
                  ? (<div className="nav-item">
                      <Link to='/Signup' className="nav-link"><p>Sign Up</p></Link>
                  </div>)
                  : <></>

          }
          {/* <Routes>  
            <Route path='/Dashboard' element={<Dashboard />} />    
          </Routes>     */}
    </div>
    )
  }
}

export default Header;
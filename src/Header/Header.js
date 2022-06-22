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
  render() {
    return(
      <div className='headerContainer'>
       <Router>    
            <div className="logo">
              <img src={Logo} alt="websiteLogo"/>
            </div>
            <div className="nav-item">
              <Link to='/Main/Vacancy' className="nav-link"><p>Вакансії</p></Link>
            </div>
            <div className="nav-item">    
              <Link to='/Main/Cv' className="nav-link"><p>Резюме</p></Link>   
            </div>    
            <div className="nav-item">    
              <Link to='/Main/Login' className="nav-link"><p>Login</p></Link>   
            </div> 
            <div className="nav-item">    
              <Link to='/Main/Signup' className="nav-link"><p>Sign Up</p></Link>    
              </div>        
          <Routes>    
            <Route path='/Main' element={<Main/>}>
              <Route path='/Main/Vacancy' element={<Vacancy/>} />    
              <Route path='/Main/Cv' element={<Cv/>} />
              <Route path='/Main/Signup' element={<Reg/>} />
              <Route path='/Main/Signin' element={<Login/>} />
            </Route>  
          </Routes>    
          {/* <Routes>  
            <Route path='/Dashboard' element={<Dashboard />} />    
          </Routes>     */}
        </Router>  
    </div>
    )
  }
}

export default Header;
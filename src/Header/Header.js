import * as React from 'react';
import Logo from '../logo.png';
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    }
  
  render() {
    return(
      <div className='headerContainer'>
            <div>
              <Link to='/Home'className="logo" > 
                <img src={Logo} alt="websiteLogo"/>
              </Link>
            </div>
            <div className="nav-item">
              <Link to='/Vacancy' className="nav-link"><p>Вакансії</p></Link>
            </div>
            <div className="nav-item">    
              <Link to='/Cv' className="nav-link"><p>Резюме</p></Link>   
            </div>    
            <div className="nav-item">    
              <Link to='/Login' className="nav-link"><p>Login</p></Link>   
            </div>
            {/* <div>
              <Button color="light" onClick={() => this.props.clickLogout()}>
                {this.props.isLoggedIn? 'Logout' : 'Login'}
              </Button>
            </div>        */}
          {/* <Routes>  
            <Route path='/Dashboard' element={<Dashboard />} />    
          </Routes>     */}
    </div>
    )
  }
}

export default Header;
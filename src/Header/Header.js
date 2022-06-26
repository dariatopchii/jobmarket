import * as React from 'react';
import Logo from '../logo/logo.png';
import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userLoggedIn: localStorage.getItem('user') !== null
        }
    }
    
  componentDidMount() {
      this.waitForUpdates();
  }

    async waitForUpdates(){
      while (true){
          await Header.sleep(1000);
          if(!this.state.userLoggedIn && localStorage.getItem('user')){
              this.setState({
                  userLoggedIn: true
              })
          }
          if(this.state.userLoggedIn && !localStorage.getItem('user')){
              this.setState({
                  userLoggedIn: false,
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
            <Link to='/Home' className="logo">
              <img src={Logo} alt="websiteLogo"/>
            </Link>
            <div className="nav-item">
              <Link to='/Vacancy' className="nav-link"><p>Вакансії</p></Link>
            </div>
            <div className="nav-item">    
              <Link to='/Cv' className="nav-link"><p>Резюме</p></Link>   
            </div>
            {
              this.state.userLoggedIn
              ? (<div className="nav-item">
                      <Link to='/UserPage' className="nav-link"><p>Профіль</p></Link>
                  </div>) 
              : <></>
          }
          {
              this.state.userLoggedIn
              ? (<div className="nav-item">
                      <Link to='/Home' className="nav-link"><p>Logout</p></Link>
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
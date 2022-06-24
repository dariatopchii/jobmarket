import * as React from 'react';
import Main from './Main/Main.js';
import Login from './Main/Login.js';  
import Reg from './Main/Reg.js';  
import Vacancy from "./Vacancy";
import Cv from "./Cv";
import UserPage from "./UserPage";
import {Layout} from "./Layout";
import { Route, Routes } from 'react-router';
import CreateCv from './CreateCv';
import UserCv from './UserCv'
import EditCv from './EditCv'
import Home from './Home'
import Logout from './Logout'
import GooglePlaceAutocomplete from 'material-ui-autocomplete-google-places';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getCoords(lat, lng){
    console.log(lat, lng);
  }
  
  render(){
    return (
      <div>
         <MuiThemeProvider muiTheme={getMuiTheme()}>
        <GooglePlaceAutocomplete
        	// Function to return lat and lng
        	results={this.getCoords}
        />
      </MuiThemeProvider>
        <Layout>
            <Routes>  
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/Vacancy' element={<Vacancy/>} />
                <Route path='/Cv' element={<Cv/>} />
                <Route path='/Signup' element={<Reg/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Logout' element={<Logout/>} />
                <Route path='/UserPage' element={<UserPage/>} />
                <Route path='/UserPage/CreateCv' element={<CreateCv/>} /> 
                <Route path='/UserPage/UserCv' element={<UserCv/>} /> 
                <Route path='/UserPage/UserCv/Edit' element={<EditCv/>} />
            </Routes>
        </Layout>
      </div>
    );
  }
}


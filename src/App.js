import * as React from 'react';
import Main from './Main/Main.js';
import Login from './Main/Login.js';  
import Reg from './Main/Reg.js';  
import Vacancy from "./Vacancy";
import Cv from "./Cv";
import UserPage from "./UserPage/UserPage";
import {Layout} from "./Layout";
import { Route, Routes } from 'react-router';
import CreateCv from './UserPage/CreateCv';
import CreateVacancy from './UserPage/CreateVacancy';
import UserCv from './UserPage/UserCv'
import UserVacancy from './UserPage/UserVacancy'
import EditCv from './UserPage/EditCv'
import EditVacancy from './UserPage/EditVacancy'
import Home from './Home'
import SendEmail from './SendEmail'
import CvArchive from './UserPage/CvArchive'
import VacArchive from './UserPage/VacArchive'


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <div>
        <Layout>
            <Routes>  
                <Route path='/UserPage/UserVacancy' element={<UserVacancy/>}/>
                <Route path='/UserPage/UserVacancy/EditVacancy' element={<EditVacancy/>}/>
                <Route path='/UserPage/CreateVacancy' element={<CreateVacancy/>} /> 
                <Route path='/UserPage/UserVacancy/Archive' element={<VacArchive/>} /> 
                <Route path='/SendEmail' element={<SendEmail/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/Vacancy' element={<Vacancy/>} />
                <Route path='/Cv' element={<Cv/>} />
                <Route path='/Signup' element={<Reg/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/UserPage' element={<UserPage/>} />
                <Route path='/UserPage/CreateCv' element={<CreateCv/>} /> 
                <Route path='/UserPage/UserCv' element={<UserCv/>} />
                <Route path='/UserPage/UserCv/Archive' element={<CvArchive/>} /> 
                <Route path='/UserPage/UserCv/Edit' element={<EditCv/>} />
            </Routes>
        </Layout>
      </div>
    );
  }
}


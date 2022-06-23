import * as React from 'react';
import Main from './Main/Main.js';
import Login from './Main/Login.js';  
import Reg from './Main/Reg.js';  
import Vacancy from "./Vacancy";
import Cv from "./Cv";
import {Layout} from "./Layout";
import { Route, Routes } from 'react-router';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render(){
    return (
      <div>
        <Layout>
            <Routes>  
                <Route path='/Main' element={<Main/>}/>
                <Route path='/Vacancy' element={<Vacancy/>} />
                <Route path='/Cv' element={<Cv/>} />
                <Route path='/Signup' element={<Reg/>} />
                <Route path='/Login' element={<Login/>} />
            </Routes>
        </Layout>
      </div>
    );
  }
}


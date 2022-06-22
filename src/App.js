import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Component, Routes} from "react-router-dom";
import Main from './Main/Main.js';
import Login from './Main/Login.js';  
import Reg from './Main/Reg.js';  
import Vacancy from "./Vacancy";
import Cv from "./Cv";
import {Layout} from "./Layout";  

 




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


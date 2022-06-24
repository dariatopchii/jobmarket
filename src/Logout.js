import React, { Component } from 'react';

export default class Logout extends React.Component{
    componentDidMount(){
        localStorage.clear();
        console.log(localStorage)
    }

    render () {
        return (
          <div>
              
          </div>
        );
      }
}
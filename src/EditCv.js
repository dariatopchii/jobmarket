import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import './Cv.css';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
  
export default class EditCv extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        userCvs: []
    }

    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv/UserCvs?userId='+JSON.parse(localStorage.getItem('user')).id;
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          userCvs: data
        })
      });
  }

  delete(cvId){
    const apiUrl = 'https://localhost:5001/api/Cv/'+ cvId;
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removeCvFromArray(cvId)
        }
        else{
          console.log('nope')
        }
        
      }
      )
  }


  removeCvFromArray(id){
    console.log(id)
    let result = this.state.userCvs.filter(cv => cv.id !== id);
    this.setState({userCvs: result})
  }


  render() {
    return (
       <div>
         edit
        
         <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
            </div>   
    )
  }
}

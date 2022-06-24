import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import './Cv.css';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
  
class UserCv extends React.Component {
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

  redirect(cv){
    localStorage.setItem('cv', JSON.stringify(cv))
    console.log(localStorage)
  }

  render() {
    console.log(JSON.parse(localStorage.getItem('user')).id)
    const userCvs = this.state.userCvs
    return (
            <div>{userCvs.map(cv => (
              <Row className='cvOutLine'>
                <Col key={'/' + cv.id + '_div'}>
                    <p><b>{cv.occupation}</b></p>
                    <p>{cv.email}</p>
                    <p>{cv.name}</p>
                    <p>{cv.gender}</p>
                    <p>{cv.location}</p>
                    <p>{cv.education}</p>
                    <p>{cv.workplace}</p>
                    <p>{cv.firm}</p>
                    <p>{cv.position}</p>
                    <p>{cv.salary}</p>
                    <p>{cv.description}</p>
                    <p>{cv.requirements}</p>
                </Col>
                <Col>
                  <Link to="/UserPage/UserCv/Edit">
                    <Button onClick={() => this.redirect(cv)}>Редагування</Button>
                  </Link>
                  <Button  onClick={() => this.delete(cv.id)}>Видалення</Button>
                  <Button>Архівація</Button>
                </Col>
              </Row>
            ))}
            </div>   
    )
  }
}
export default UserCv;

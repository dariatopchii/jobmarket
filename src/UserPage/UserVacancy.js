import React from 'react';
import data from "bootstrap/js/src/dom/data";
import { Link } from '@mui/material';
import '../Cv.css';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
  
class Uservac extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        userVacs: []
    }

    this.delete = this.delete.bind(this);
    this.archive = this.archive.bind(this);
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Vacancy/UserVacs?arch=false&userId='+JSON.parse(localStorage.getItem('user')).id;
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          userVacs: data
        })
      });
  }

  delete(vacId){
    const apiUrl = 'https://localhost:5001/api/Vacancy/'+ vacId;
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removevacFromArray(vacId)
        }
        else{
          console.log('nope')
        }
        
      }
      )
  }

  archive(vacId){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({id: vacId})
    };
    const apiUrl = 'https://localhost:5001/api/Vacancy/Archive';
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removeVacFromArray(vacId)
        }
        else{
          console.log('nope')
        }
        
      }
      )
  }


  removeVacFromArray(id){
    console.log(id)
    let result = this.state.userVacs.filter(vac => vac.id !== id);
    this.setState({uservacs: result})
  }


  render() { 
    const uservacs = this.state.userVacs
    return (
      <div>
        <div>
        <Link to="/UserPage">
          <Button color="success" block>Повернутися до останньої сторонки</Button>
        </Link>
        <Link to="/UserPage/Uservacancy/Archive">
          <Button  color="success" padding = '5em' block>Архив вакансій</Button>
        </Link>
        </div>
        <div>{uservacs.map(vac => (
        <Row className='vacOutLine'>
          <Col key={'/' + vac.id + '_div'}>
              <p><b>{vac.occupation}</b></p>
              <p><b>Email: </b> {vac.email}</p>
                    <p><b>Імʼя: </b> {vac.name}</p>
                    <p><b>Місто пошуку: </b> {vac.location}</p>
                    <p><b>Заробітна плата: </b>{vac.salary}</p>
                    <p><b>Вимоги: </b>{vac.requirements}</p>
                    <p><b>Місто: </b>{vac.workplace}</p>
                    <p><b>Фірма: </b> {vac.firm}</p>
                    <p><b>Опис: </b>{vac.description}</p>
          </Col>
          <Col>
          <Row>
              <Button><Link  color="white" underline="none" to="/UserPage/UserVacancy/EditVacancy" state={{vac: vac}}>Редагування</Link></Button>
            
            </Row>
          <Row><Button>Видалення</Button></Row>
            
            <Row><Button onClick={() => this.archive(vac.id)}>Архівація</Button></Row>
          </Col>
        </Row>
        ))}
        </div> 
      </div>
              
    )
  }
}
export default Uservac;

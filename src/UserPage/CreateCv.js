import React, { Component,  TextField, } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';


export default class CreateCv extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      occupation: '',
      education: '',
      workplace: '',
      firm: '',
      position: '',
      salary: '',
      description: '',
      toUser: null,
    }


    this.location = this.location.bind(this);
    this.occupation = this.occupation.bind(this);
    this.education = this.education.bind(this);
    this.workplace = this.workplace.bind(this);
    this.firm = this.firm.bind(this);
    this.position = this.position.bind(this);
    this.salary = this.salary.bind(this);
    this.description = this.description.bind(this);
    this.create = this.create.bind(this);  
  }
  location(event) {
    this.setState({ location: event.target.value })
  }
  occupation(event) {
    this.setState({ occupation: event.target.value })
  }
  education(event) {
    this.setState({ education: event.target.value })
  }
  workplace(event) {
    this.setState({ workplace: event.target.value })
  }
  firm(event) {
    this.setState({ firm: event.target.value })
  }
  position(event) {
    this.setState({ position: event.target.value })
  }

  salary(event) {
    this.setState({ salary: event.target.value })
  }
  
  description(event) {
    this.setState({ description: event.target.value })
  }


  create(event) {
    const sal = this.state.salary
    if(sal > 0){
      fetch('https://localhost:5001/api/Cv', {
        method: 'post',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: JSON.parse(localStorage.getItem('user')).email,
          name: JSON.parse(localStorage.getItem('user')).name,
          location: this.state.location,
          occupation: this.state.occupation,
          education: this.state.education,
          workplace: this.state.workplace,
          firm: this.state.firm,
          position: this.state.position,
          salary: this.state.salary,
          description: this.state.description,
          userId: JSON.parse(localStorage.getItem('user')).id
        })
      }).then((response) => {
          console.log(response)
          if (response.status === 200) {
            this.setState({
              toUser: true
            })
          }
          else if (Response.status === 400) {
            console.log(13141)
            this.setState({
              toUser: false
            })
          }
          else {
            console.log("something is wrong")
            this.setState({
              toUser: false
            })
          }
        }
    )
    }
    else{
      alert('Заробітна плата має буте більше 0!')
    }
  }
  
  render(){

  
    return (
      <div className="app flex-row align-items-center">
          <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                      <Link to="/UserPage">
                        <Button color="success" block>Повернутися до минулої сторонки</Button>
                      </Link> 
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.location} placeholder="Де ви шукаєте роботу?" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                      <Input  type="number" onChange={this.salary} placeholder="Заробітня плата" />
                    </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.occupation} placeholder="Ваша професія" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.education} placeholder="Введіть вашу освіту" />
                      </InputGroup>
                      <b>
                        Інформація про останнє місце працевлаштування
                      </b>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.firm} placeholder="Фірма" />
                      </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.position} placeholder="Посада" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text" aria-multiline onChange={this.workplace} placeholder="Місто"></Input>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.description} placeholder="Додаткова інформація" />
                    </InputGroup>
                    <Button  onClick={() => this.create()}  color="success" block>Створити резюме</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.state.toUser && <Navigate to = '/UserPage' replace={true}/>}
      </div>

    );

  }

}



import React, { Component,  TextField, } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';


export default class CreateVacancy extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      occupation: '',
      firm: '',
      salary: '',
      description: '',
      toUser: null,
    }


    this.location = this.location.bind(this);
    this.occupation = this.occupation.bind(this);
    this.firm = this.firm.bind(this);
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
    fetch('https://localhost:5001/api/Vacancy', {
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
                        <Input type="text"  onChange={this.occupation} placeholder="Позиція"  />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={() => this.firm} placeholder="Фірма" />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.location} placeholder = 'Місто' />
                      </InputGroup>
                      <InputGroup className="mb-3">
                      <Input  type="number" onChange={this.salary} placeholder="Заробітна плата"  />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.description} placeholder="Надайте, будь ласка, інформацію" />
                    </InputGroup>
                    <Button  onClick={() => this.create()}  color="success" block>Створити</Button>
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



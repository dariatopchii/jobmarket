import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Navigate } from 'react-router';

export default class Reg extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      toMain: null,
      error: null
    }
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.name = this.name.bind(this);
    this.register = this.register.bind(this);
  }
  
  email(event) {
     if (!this.isValidEmail(event.target.value)) {
      this.setState({
        error: 'Email is invalid'
      })
     } else {
      this.setState({
          error: null,
          email: event.target.value
      })
    }
  }

  password(event) {
    this.setState({ password: event.target.value })
  }

  name(event) {
    this.setState({ name: event.target.value })
  }

   isValidEmail(email) {
     return /\S+@\S+\.\S+/.test(email);
   }

  register(event) {
    if(this.state.error == null){
      fetch('https://localhost:5001/api/User/Signup', {
        method: 'post',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password,
          email: this.state.email,
        })
      }).then((response) => {
          console.log(response)
          if (response.status === 200) {
            return response.json()
          }
          else if (Response.status === 400) {
            console.log(13141)
            this.setState({
              toMain: false
            })
            return Promise.reject()
          }
          else {
            console.log("ew")
            return Promise.reject()
          }
        }
    )
          .then((data) => {
            localStorage.setItem('user',  JSON.stringify(data))
            this.setState({
              toMain: true
            })
            console.log(localStorage)
              }
          )
    }
    else{
      alert('Неправильно введена електронна пошта')
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
                    <div className="row, mb-2 pageheading">
                    </div>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.name} placeholder="Імʼя та Призвище" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text" onChange={this.email} placeholder="Електронна пошта" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={this.password} placeholder="Пароль" />
                    </InputGroup>
                    <Button  onClick={() => this.register()}  color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.state.toMain && <Navigate to = '/UserPage' replace={true}/>}
      </div>

    );

  }

}



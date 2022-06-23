import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import data from "bootstrap/js/src/dom/data";
export default class Reg extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.name = this.name.bind(this);
    this.register = this.register.bind(this);
  }
  email(event) {
    this.setState({ email: event.target.value })
  }

  password(event) {
    this.setState({ password: event.target.value })
  }

  name(event) {
    this.setState({ name: event.target.value })
  }
  register(event) {
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
    }).then((Response) => Response.json())
      .then((Result) => {
        // if (Result.statusCode === 200) {
          (localStorage.setItem('user', JSON.stringify(Result)))
          console.log(localStorage)
        // }
        // else
        //   alert('Unauthenticated User!')
      })
  }
  render() {
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
                      <Input type="text"  onChange={this.name} placeholder="Enter Employee Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text" onChange={this.email} placeholder="Enter email" />

                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={this.password} placeholder="Enter Password" />
                    </InputGroup>
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    );

  }

}



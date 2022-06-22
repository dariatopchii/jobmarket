import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
export default class Reg extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Email: '',
      Password: '',
    }
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.Name = this.Name.bind(this);
    this.register = this.register.bind(this);
  }
  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

 Name(event) {
    this.setState({ Name: event.target.value })
  }
  register(event) {
    fetch('https://localhost:5001/api/User', {
      method: 'post',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.Name,
        password: this.state.Password,
        email: this.state.Email,
      })
    }).then((resp) => resp.json())
      .then((result) => {
        if (result.status === 'Success')
                alert("yay")
        else
          alert('Unauthenticated User!')
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
                      <Input type="text"  onChange={this.Name} placeholder="Enter Employee Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />

                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />
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



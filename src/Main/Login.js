import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
export default class Login extends Component {
    constructor() {

        super();
        this.state = {
            email: '',
            password: ''
        }
        this.password = this.password.bind(this);
        this.email = this.email.bind(this);
        this.login = this.login.bind(this);
    }
    email(event) {
        this.setState({email: event.target.value })
    }
    password(event) {
        this.setState({password: event.target.value })
    }
    /* constructor(props) {
    super(props)
  }
  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
  */
     
    login(event) {
        fetch('https://localhost:5001/api/User/Login', {
            method: 'post',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: this.state.password,
                email: this.state.email,
            })
        })
            .then(response => {
                if (response.status !== 200)
                    alert('Invalid User')
                else
                    console.log(response.json() );
                    // this.props.history.push("/Dashboard");
            })
    }
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={this.email} placeholder="Enter email" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" onChange={this.password} placeholder="Enter Password" />
                                            </InputGroup>
                                            <Button onClick={this.login} color="success" block>Login</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
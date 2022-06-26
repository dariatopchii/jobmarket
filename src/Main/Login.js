import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {Navigate} from "react-router";
export default class Login extends Component {
    constructor() {

        super();
        this.state = {
            email: '',
            password: '',
            toUser: null,
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
            .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        return response.json()
                    }
                    else if (Response.status === 400) {
                        console.log(13141)
                        this.setState({
                            toUser: false,
                        })
                        return Promise.reject()
                    }
                    else {
                        console.log("ew")
                        this.setState({
                            toMain: false,
                        })
                        return Promise.reject()
                    }
                }
            )
            .then((data) => {
                    localStorage.setItem('user', JSON.stringify(data))
                    this.setState({
                        toUser: true,
                    })
                    console.log(localStorage)
                }
            )
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
                                            <Button onClick={() => this.login()} color="success" block>Login</Button>
                                            <Link to="/Signup">
                                                <Button color="success" block>Signup</Button>
                                            </Link>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
                {this.state.toUser && <Navigate to = '/UserPage' replace={true}/>}
            </div>
        );
    }
}
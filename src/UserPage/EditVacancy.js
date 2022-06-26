import React, { Component,  TextField, } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";

function funcEditVac(Component) {
  return props => <Component {...props} location={useLocation()} />
}

class EditVacancy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      occupation: '',
      firm: '',
      position: '',
      salary: '',
      description: '',
      toUser: null,
    }

    this.location = this.location.bind(this);
    this.occupation = this.occupation.bind(this);
    this.firm = this.firm.bind(this);
    this.salary = this.salary.bind(this);
    this.description = this.description.bind(this);
    this.edit = this.edit.bind(this);
  }

  location(event) {
    this.setState({ city: event.target.value })
  }
  occupation(event) {
    this.setState({ occupation: event.target.value })
  }
  firm(event) {
    this.setState({ firm: event.target.value })
  }
  salary(event) {
    this.setState({ salary: event.target.value })
  }
  description(event) {
    this.setState({ description: event.target.value })
  }


  edit(event) {
    fetch('https://localhost:5001/api/Vacancy', {
      method: 'put',
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
        salary: this.state.salary,
        description: this.state.description,
        userId: JSON.parse(localStorage.getItem('user')).id
      })
    })
    .then((response) => {
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
          console.log('no')
        }
        else {
          console.log("something is wrong")
          this.setState({
            toUser: false
          })
          console.log('no')
        }
      }
  )
  }

  
  render(){
    const vac = this.props.location.state.vac
    console.log(vac)
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                      <Link to="/UserPage/UserVacancy">
                        <Button>Повернутися до останньої сторонки</Button>
                      </Link>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.location} defaultValue= {vac.location} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                      <Input  type="number" onChange={this.salary} defaultValue={vac.salary}  />
                    </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.occupation} defaultValue={vac.occupation}  />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={() => this.firm} defaultValue={vac.firm} />
                      </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.description} defaultValue="Надайте, будь ласка, інформацію" />
                    </InputGroup>
                    <Button  onClick={() => this.edit()}  color="success" block>Змінити</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {this.state.toUser && <Navigate to = '/UserPage/UserVacancy' replace={true}/>}
      </div>

    );

  }

}

export default funcEditVac(EditVacancy)
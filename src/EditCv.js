import React, { Component,  TextField, } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom'

export default class CreateCv extends Component {
  constructor() {
    super();
    this.state = {
      gender: JSON.parse(localStorage.getItem('cv')).gender,
      location: JSON.parse(localStorage.getItem('cv')).location,
      occupation: JSON.parse(localStorage.getItem('cv')).occupation,
      education: JSON.parse(localStorage.getItem('cv')).education,
      workplace: JSON.parse(localStorage.getItem('cv')).workplace,
      firm: JSON.parse(localStorage.getItem('cv')).firm,
      position: JSON.parse(localStorage.getItem('cv')).position,
      salary: JSON.parse(localStorage.getItem('cv')).salary,
      description: JSON.parse(localStorage.getItem('cv')).description,
      toUser: null,
    }


    this.gender = this.gender.bind(this);
    this.location = this.location.bind(this);
    this.occupation = this.occupation.bind(this);
    this.education = this.education.bind(this);
    this.workplace = this.workplace.bind(this);
    this.firm = this.firm.bind(this);
    this.position = this.position.bind(this);
    this.salary = this.salary.bind(this);
    this.description = this.description.bind(this);
    this.edit = this.edit.bind(this);  
  }
  gender(event) {
    this.setState({ gender: event.target.value })
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


  edit(event) {
    fetch('https://localhost:5001/api/Cv', {
      method: 'post',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: JSON.parse(localStorage.getItem('user')).email,
        name: JSON.parse(localStorage.getItem('user')).name,
        gender: this.state.gender,
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
                        <Button>Повернутися до останньої сторонки</Button>
                      </Link>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.location} defaultValue= {this.state.location} />
                      </InputGroup>
                      <InputGroup className="mb-3">
                      <Input  type="number" onChange={this.salary} defaultValue={this.state.salary}  />
                    </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.occupation} defaultValue={this.state.occupation}  />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.education} defaultValue={this.state.education}  />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.gender} defaultValue={this.state.gender}  />
                      </InputGroup>
                      <b>
                        Інформація про останнє місце працевлаштування
                      </b>
                      <InputGroup className="mb-3">
                        <Input type="text"  onChange={this.firm} defaultValue={this.state.firm} />
                      </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.position} defaultValue={this.state.position}  />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text" aria-multiline onChange={this.workplace} defaultValue="Місто"></Input>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.description} defaultValue="Надайте, будь ласка, інформацію про вас" />
                    </InputGroup>
                    <Button  onClick={() => this.create()}  color="success" block>Змінити</Button>
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




// {/* <TextField
//           id="filled-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="filled" */}
          

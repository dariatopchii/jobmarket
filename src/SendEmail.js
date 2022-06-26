import { Button } from 'bootstrap';
import React, { Component,  TextField, } from 'react';
import { Form, Input } from 'reactstrap';
import {useLocation} from "react-router-dom";

function sendEmail(Component) {
    return props => <Component {...props} location={useLocation()} />
  }

class SendEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.message = this.message.bind(this)
  }
  message(event) {
    this.setState({ message: event.target.value })
  }

  // send(event) {
  //   fetch('https://localhost:5001/api/User/Signup', {
  //     method: 'post',
  //     headers: {
  //       'Accept': '*/*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: this.state.name,
  //       password: this.state.password,
  //       email: JSON.parse(localStorage.getItem('user')).email,
  //     })
  //   }).then((response) => {
  //       console.log(response)
  //       if (response.status === 200) {
  //         return response.json()
  //       }
  //       else if (Response.status === 400) {
  //         console.log(13141)
  //         this.setState({
  //           toMain: false
  //         })
  //         return Promise.reject()
  //       }
  //       else {
  //         console.log("ew")
  //         return Promise.reject()
  //       }
  //     }
  // )
  //       .then((data) => {
  //         localStorage.setItem('user',  JSON.stringify(data))
  //         this.setState({
  //           toMain: true
  //         })
  //         console.log(localStorage)
  //           }
  //       )
  // }

  render() { 
    const cv = this.props.location.state.cv
    return (
    <div>
      <Form>
        <b>Ваше електронне повідомлення виглядатиме так:</b>
        <p>Вітаю, {cv.name}</p>
        <p>Хтось зацікавився вашим резюме на {cv.position}, яку ві залишили на платформі JobMarket!</p>

        <p>
        <b>
        Вам залишили повідомлення.
        </b>
        </p>
        <p>
       <Input>type="text"  onChange={this.message} placeholder="залиште ваше повідомлення"</Input>
        </p>
        <p>З повагою,
            команда JobMarket
        </p>
        <Button>
          Відправити
        </Button>
      </Form>
    </div> );
  }
}
 

export default sendEmail(SendEmail)
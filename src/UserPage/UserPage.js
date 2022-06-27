import * as React from 'react';
import { Link } from 'react-router-dom'
import { List } from '@mui/material';
import { Button } from 'reactstrap';


export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: JSON.parse(localStorage.getItem('user')).email
    }
  }

  render(){
    return (
      <div>
        <div>
          <b>Email: {this.state.email}</b>
        </div>
        <div>
          <List>
            <Link to="/UserPage/CreateCv">
              <Button color="success" padding = '5em'block>Створити резюме</Button>
            </Link>
            <Link to="/UserPage/UserCv">
              <Button  color="success" padding = '5em' block>Побачити свої резюме</Button>
            </Link>
            <Link to="/UserPage/CreateVacancy">
              <Button color="success" padding = '5em' block>Створити вакансію</Button>
            </Link>
            <Link to="/UserPage/UserVacancy">
              <Button color="success" padding = '5em' block>Подивитися свої вакансії</Button>
            </Link>
          </List>    
        </div>   
      </div>
    );
  }
}


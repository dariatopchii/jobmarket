import * as React from 'react';
import { Link } from 'react-router-dom'
import { List} from '@mui/material';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


export default class UserPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div>
        <List>
            <Link to="/UserPage/CreateCv">
            <Button color="success" padding = '5em'block>Створити резюме</Button>
            </Link>
          <Link to="/UserPage/UserCv">
          <Button color="success" padding = '5em' block>Побачити свої резюме</Button>
        </Link>
        <Button>Створити вакансію</Button>
        <Button>Подивитися свої вакансії</Button>
        </List>      
      </div>
    );
  }
}


import React from 'react';
import data from "bootstrap/js/src/dom/data";
import { Link } from 'react-router-dom';
import '../Cv.css';
import { Button, Col, Row } from 'reactstrap';
  
class Uservac extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        userVacs: []
    }

    this.delete = this.delete.bind(this);
    this.archive = this.archive.bind(this);
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Vacancy/UserVacs?arch=false&userId='+JSON.parse(localStorage.getItem('user')).id;
    fetch(apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
        userVacs: data
        })
      });
  }

  delete(vacId){
    const apiUrl = 'https://localhost:5001/api/Vacancy/'+ vacId;
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removeVacFromArray(vacId)
        }
        else{
          console.log('nope')
        }
        
      }
      )
  }

  archive(vacId){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({id: vacId})
    };
    const apiUrl = 'https://localhost:5001/api/Vacancy/Archive';
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removeVacFromArray(vacId)
        }
        else{
          console.log('nope')
        } 
      })
  }


  removeVacFromArray(id){
    console.log(id)
    let result = this.state.userVacs.filter(vac => vac.id !== id);
    this.setState({userVacs: result})
  }


  render() { 
    const userVacs = this.state.userVacs
    return (
      <div>
        <div>
          <Link to="/UserPage">
            <Button color="success" block>Повернутися до минулої сторонки</Button>
          </Link>
          <Link to="/UserPage/Uservacancy/Archive">
            <Button  color="success" padding = '5em' block>Архив вакансій</Button>
          </Link>
        </div>
        <div>{userVacs.map(vac => (
          <Row className='cvOutLine'>
            <Col key={vac.id}>
                <p><b>{vac.occupation}</b></p>
                <p><b>Email: </b> {vac.email}</p>
                <p><b>Імʼя: </b> {vac.name}</p>
                <p><b>Місто: </b> {vac.location}</p>
                <p><b>Заробітна плата: </b>{vac.salary}</p>
                <p><b>Вимоги: </b>{vac.requirements}</p>
                <p><b>Фірма: </b> {vac.firm}</p>
                <p><b>Опис: </b>{vac.description}</p>
            </Col>
            <Col>
              <Row>
                <Button><Link color="white" underline="none" to="/UserPage/UserVacancy/EditVacancy" state={{vac: vac}}>Редагування</Link></Button>
              </Row>
              <Row>
                <Button onClick={() => { if (window.confirm('Ви впевнені, що бажаєте видалити вакансію?')) this.delete(vac.id)}}>Видалення</Button>
              </Row>    
              <Row>
                <Button onClick={() => this.archive(vac.id)}>Архівація</Button>
              </Row>
            </Col>
          </Row>
        ))}
        </div> 
      </div>         
    )
  }
}
export default Uservac;

import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import '../Cv.css';
import { Button, Row, Col } from 'reactstrap';
  
class VacArchive extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        userVacs: []
    }

    this.delete = this.delete.bind(this);
    this.unarchive = this.unarchive.bind(this);
    this.removeVacFromArray = this.removeVacFromArray.bind(this)
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Vacancy/UserVacs?arch=true&userId='+JSON.parse(localStorage.getItem('user')).id;
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
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

  unarchive(vacId){
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
        else {
          console.log('nope')
        } 
      }
    )
  }


  removeVacFromArray(vacId){
    let result = this.state.userVacs.filter(vac => vac.id !== vacId);
    this.setState({userVacs: result})
  }


  render() { 
    console.log(localStorage)
    console.log(JSON.parse(localStorage.getItem('user')).id)
    const userVacs = this.state.userVacs
    return (
      <div>
        <div>
          <Link to="/UserPage/UserVacancy">
            <Button color="success" block>Повернутися до останньої сторонки</Button>
          </Link>
        </div>
        <div>{userVacs.map(vac => (
          <Row className='cvOutLine'>
            <Col key={'/' + vac.id + '_div'}>
              <p><b>{vac.occupation}</b></p>
              <p><b>Email: </b> {vac.email}</p>
                    <p><b>Імʼя: </b> {vac.name}</p>
                    <p><b>Освіта: </b> {vac.education}</p>
                    <p><b>Місто пошуку: </b> {vac.location}</p>
                    <p><b>Бажана заробітня плата: </b>{vac.salary}</p>
                    <p><b>Вимоги до нового місця праці: </b>{vac.requirements}</p>
                    <p><b>Інформація щодо останнього працевлаштування</b></p>
                    <p><b>Місто: </b>{vac.workplace}</p>
                    <p><b>Фірма: </b> {vac.firm}</p>
                    <p><b>Посада: </b> {vac.position}</p>
                    <p><b>Опис: </b>{vac.description}</p>
            </Col>
            <Col>
              <Button onClick={() => { if (window.confirm('Ви впевнені, що бажаєте видалити вакансію?')) this.delete(vac.id)}}>Видалення</Button>
              <Button onClick={() => this.unarchive(vac.id)}>Відновлення</Button>
            </Col>
          </Row>
        ))}
        </div> 
      </div>
              
    )
  }
}
export default VacArchive;

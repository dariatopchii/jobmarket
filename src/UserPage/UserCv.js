import React from 'react';
import { Link } from 'react-router-dom';
import '../Cv.css';
import { Button, Col, Row } from 'reactstrap';
  
class UserCv extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        userCvs: []
    }

    this.delete = this.delete.bind(this);
    this.archive = this.archive.bind(this);
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv/UserCvs?arch=false&userId='+JSON.parse(localStorage.getItem('user')).id;
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          userCvs: data
        })
      });
  }

  delete(cvId){
    const apiUrl = 'https://localhost:5001/api/Cv/'+ cvId;
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removeCvFromArray(cvId)
        }
        else{
          console.log('nope')
        }
        
      }
      )
  }

  archive(cvId){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({id: cvId})
    };
    const apiUrl = 'https://localhost:5001/api/Cv/Archive';
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if(response.status === 200){
          console.log('success')
          this.removeCvFromArray(cvId)
        }
        else{
          console.log('nope')
        }
        
      }
      )
  }


  removeCvFromArray(id){
    console.log(id)
    let result = this.state.userCvs.filter(cv => cv.id !== id);
    this.setState({userCvs: result})
  }


  render() { 
    const userCvs = this.state.userCvs
    return (
      <div>
        <div>
        <Link to="/UserPage">
          <Button color="success" block>Повернутися до минулої сторонки</Button>
        </Link>
        <Link to="/UserPage/UserCv/Archive">
          <Button  color="success" padding = '5em' block>Архив резюме</Button>
        </Link>
        </div>
        <div>{userCvs.map(cv => (
          <Row className='cvOutLine'>
            <Col key={cv.id}>
                <p><b>{cv.occupation}</b></p>
                <p><b>Email: </b> {cv.email}</p>
                <p><b>Імʼя: </b> {cv.name}</p>
                <p><b>Освіта: </b> {cv.education}</p>
                <p><b>Місто пошуку: </b> {cv.location}</p>
                <p><b>Бажана заробітня плата: </b>{cv.salary}</p>
                <p><b>Вимоги до нового місця праці: </b>{cv.requirements}</p>
                <p><b>Інформація щодо останнього працевлаштування</b></p>
                <p><b>Місто: </b>{cv.workplace}</p>
                <p><b>Фірма: </b> {cv.firm}</p>
                <p><b>Посада: </b> {cv.position}</p>
                <p><b>Опис: </b>{cv.description}</p>
            </Col>
            <Col>
              <Row>
                  <Button>
                    <Link color="white" underline="none" to="/UserPage/UserCv/Edit" state={{cv: cv}}>Редагування</Link>
                  </Button>
              </Row>
              <Row>
              <Button onClick={() => { if (window.confirm('Ви впевнені, що бажаєте видалити резюме?')) this.delete(cv.id)}}>Видалення</Button>
              </Row>         
              <Row>
                <Button onClick={() => this.archive(cv.id)}>Архівація</Button>
              </Row>
            </Col>
          </Row>
        ))}
        </div> 
      </div>
              
    )
  }
}
export default UserCv;

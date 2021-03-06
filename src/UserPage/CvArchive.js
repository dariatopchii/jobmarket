import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import '../Cv.css';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
  
class CvArchive extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        userCvs: []
    }

    this.delete = this.delete.bind(this);
    this.unarchive = this.unarchive.bind(this);
  }

  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv/UserCvs?arch=true&userId='+JSON.parse(localStorage.getItem('user')).id;
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

  unarchive(cvId){
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
        else {
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
    console.log(localStorage)
    console.log(JSON.parse(localStorage.getItem('user')).id)
    const userCvs = this.state.userCvs
    return (
      <div>
        <div>
          <Link to="/UserPage/UserCv">
            <Button color="success" block>?????????????????????? ???? ?????????????? ????????????????</Button>
          </Link>
        </div>
        <div>{userCvs.map(cv => (
          <Row className='cvOutLine'>
            <Col key={cv.id}>
              <p><b>{cv.occupation}</b></p>
              <p><b>Email: </b> {cv.email}</p>
                    <p><b>????????: </b> {cv.name}</p>
                    <p><b>????????????: </b> {cv.education}</p>
                    <p><b>?????????? ????????????: </b> {cv.location}</p>
                    <p><b>???????????? ?????????????????? ??????????: </b>{cv.salary}</p>
                    <p><b>???????????? ???? ???????????? ?????????? ??????????: </b>{cv.requirements}</p>
                    <p><b>???????????????????? ???????? ???????????????????? ????????????????????????????????</b></p>
                    <p><b>??????????: </b>{cv.workplace}</p>
                    <p><b>??????????: </b> {cv.firm}</p>
                    <p><b>????????????: </b> {cv.position}</p>
                    <p><b>????????: </b>{cv.description}</p>
            </Col>
            <Col>
            <Button onClick={() => { if (window.confirm('???? ????????????????, ???? ?????????????? ???????????????? ?????????????')) this.delete(cv.id)}}>??????????????????</Button>
              <Button onClick={() => this.unarchive(cv.id)}>??????????????????????</Button>
            </Col>
          </Row>
        ))}
        </div> 
      </div>
              
    )
  }
}
export default CvArchive;

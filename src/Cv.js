import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import './Cv.css';
import { Input, Button } from 'reactstrap';

class Cv extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      cvs: [],
      occupationFilter: null,
      minSalaryFilter: null,
      maxSalaryFilter: null,
      locationFilter: null,
      nameFilter: null,
      filter: null,
  }
  this.locationFilter = this.locationFilter.bind(this);
  this.occupationFilter = this.occupationFilter.bind(this);
  this.nameFilter = this.nameFilter.bind(this);
  this.minSalaryFilter = this.minSalaryFilter.bind(this);
  this.maxSalaryFilter = this.maxSalaryFilter.bind(this);
  this.search = this.search.bind(this);
}
  componentDidMount(){
    fetch('https://localhost:5001/api/Cv')
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({
        cvs: data
      })
    });
    
  }

search(event) {
  // const apiUrl = 'https://localhost:5001/api/Cv',
  fetch('https://localhost:5001/api/Cv/FilterCvs', {
      method: 'post',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.nameFilter,
        location: this.state.locationFilter,
        occupation: this.state.occupationFilter,
        minSalary: this.state.minSalaryFilter,
        maxSalary: this.state.maxSalaryFilter,
        
      })
    }
  )
  .then((response) => {
    console.log(response)
    return response.json()
  })
  .then((data) => {
    console.log(data)
    this.setState({
      cvs: data
    })
  });
  
  console.log(JSON.stringify({
    name: this.state.nameFilter,
    location: this.state.locationFilter,
    occupation: this.state.occupationFilter,
    minSalary: this.state.minSalaryFilter,
    maxSalary: this.state.maxSalaryFilter,
  }))

}

  nameFilter(event) {
    this.setState({nameFilter: event.target.value })
}
  occupationFilter(event) {
    this.setState({occupationFilter: event.target.value })
}
  locationFilter(event) {
    this.setState({locationFilter: event.target.value })
}
  minSalaryFilter(event) {
    this.setState( {salaryFilter: event.target.value })
}
  maxSalaryFilter(event) {
  this.setState( {salaryFilter: event.target.value })
}

  render() {
    const cvs = this.state.cvs      
    return (
        <div>
          <div>
          <Input type="text"  onChange={this.nameFilter} placeholder="Імʼя" />
          <Input type="text"  onChange={this.occupationFilter} placeholder="Професія" />
          <Input type="number"  onChange={this.minSalaryFilter} placeholder="Мінімальна бажана заробітна плата" />
          <Input type="number"  onChange={this.maxSalaryFilter} placeholder="Максимальна бажана заробітна плата" />
          <Input type="text"  onChange={this.locationFilter} placeholder="Місто" />
          <Button onClick={this.search} color="success" block>Пошук</Button>
          </div>
          <div> 
            {cvs.map(cv => (
              <div><div key={'/' + cv.id + '_div'} className='cvOutLine'>
                    <p><b>{cv.occupation}</b></p>
                    <p><b>Email: </b> {cv.email}</p>
                    <p><b>Імʼя: </b> {cv.name}</p>
                    <p><b>Стать: </b> {cv.gender}</p>
                    <p><b>Освіта: </b> {cv.education}</p>
                    <p><b>Місто пошуку: </b> {cv.location}</p>
                    <p><b>Бажана заробітня плата: </b>{cv.salary}</p>
                    <p><b>Вимоги до нового місця праці: </b>{cv.requirements}</p>
                    <p><b>Інформація щодо останнього працевлаштування</b></p>
                    <p><b>Місто: </b>{cv.workplace}</p>
                    <p><b>Фірма: </b> {cv.firm}</p>
                    <p><b>Посада: </b> {cv.position}</p>
                    <p><b>Опис: </b>{cv.description}</p>
                </div> <Link to="/SendEmail"  state={{cv: cv}}>
              <Button>Відправити email</Button>
            </Link></div>
                
            ))}
          </div> 
        </div>
    )
  }
}
export default Cv;

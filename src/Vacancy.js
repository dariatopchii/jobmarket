import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import './Cv.css';
import { Input, Button } from 'reactstrap';

class Vacancy extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      vacs: [],
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
    fetch('https://localhost:5001/api/Vacancy')
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({
        vacs: data
      })
    });
    
  }

search(event) {
  const min = this.state.minSalaryFilter
  const max = this.state.maxSalaryFilter
  if ((min && max > 0) && (min && max != null)){     
  // const apiUrl = 'https://localhost:5001/api/Vacancy',
  fetch('https://localhost:5001/api/Vacancy/FilterVacs', {
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
      vacs: data
    })
  });
  }
    else{
      alert('Заробітна плата має буте більше 0!')
    }
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
    const vacs = this.state.vacs     
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
            {vacs.map(vac => (
              <div key={'/' + vac.id + '_div'} className='cvOutLine'>
              <p><b>{vac.occupation}</b></p>
              <p><b>Email: </b> {vac.email}</p>
              <p><b>Імʼя: </b> {vac.name}</p>
              <p><b>Місто пошуку: </b> {vac.location}</p>
              <p><b>Заробітна плата: </b>{vac.salary}</p>
              <p><b>Вимоги: </b>{vac.requirements}</p>
              <p><b>Місто: </b>{vac.workplace}</p>
              <p><b>Фірма: </b> {vac.firm}</p>
              <p><b>Опис: </b>{vac.description}</p>
          </div>      
            ))}
          </div> 
        </div>
    )
  }
}
export default Vacancy;

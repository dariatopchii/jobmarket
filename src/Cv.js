import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";
import './Cv.css';

class Cv extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
        cvs: []
    }
  }
  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cvs: data
        })
      });
  }
  render() {
    const cvs = this.state.cvs
    return (
        <div>
            {cvs.map(cv => (
                <div key={'/' + cv.id + '_div'} className='cvOutLine'>
                    <p><b>{cv.occupation}</b></p>
                    <p>Email {cv.email}</p>
                    <p>Імʼя {cv.name}</p>
                    <p>Стать {cv.gender}</p>
                    <p>Місто пошуку {cv.location}</p>
                    <p>Бажана заробітня плата {cv.salary}</p>
                    <p>Освіта {cv.education}</p>
                    <p>Інформація щодо останнього працевлаштування</p>
                    <p>Місто{cv.workplace}</p>
                    <p>Фірма {cv.firm}</p>
                    <p>Посада {cv.position}</p>
                    <p>{cv.description}</p>
                    <p>{cv.requirements}</p>
                </div>
            ))}
        </div>
    )
  }
}
export default Cv;

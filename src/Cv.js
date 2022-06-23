import React from 'react';
import data from "bootstrap/js/src/dom/data";
import {Link} from "react-router-dom";

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
                <div key={'/' + cv.url + '_div'}>
                    <Link to={'/' + cv.url}>
                        <h4>{cv.position}</h4>
                    </Link>
                    <p>{cv.salary}</p>
                    <p>{cv.location}</p>
                    <p>{cv.userId}</p>
                </div>
            ))}
        </div>
        
        /*{list.map(({ key, value }) => (
    <div key={key}>{value}</div>
    
))}*/
    )
  }
}
export default Cv;

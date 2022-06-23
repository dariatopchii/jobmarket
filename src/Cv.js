import React from 'react';
import data from "bootstrap/js/src/dom/data";

class Cv extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          list: data
        })
      });
  }
  render() {
    const list = this.state.list
    
    return (
        <div>
          {list.map(obj => (
            <h1>{obj.position}</h1>
          ))}
        </div>
    )
  }
}
export default Cv;

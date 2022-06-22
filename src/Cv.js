import React from 'react';

class Cv extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const apiUrl = 'https://localhost:5001/api/Cv';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Cv;

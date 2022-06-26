import * as React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    localStorage.clear();
  }

  componentDidMount(){
    console.log(localStorage)
}
  
  render(){
    return (
      <div>
       <h1>Вітаю на платформі пошуку та розміщення робочих пропозицій JobMarket!  </h1>
      </div>
    );
  }
}


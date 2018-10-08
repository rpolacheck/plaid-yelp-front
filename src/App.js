import React, { Component } from 'react';
import './App.css';

import Yelp from './Yelp';

console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Yelp name="Gary Danko"></Yelp>
      </div>
    );
  }
}

export default App;

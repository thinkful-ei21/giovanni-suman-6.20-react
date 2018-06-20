import React, { Component } from 'react';
import Gif from './Gif'
import example from './example.json';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {
    console.log(example)
    return (
      
      <Gif />
    );
  }
}

export default App;

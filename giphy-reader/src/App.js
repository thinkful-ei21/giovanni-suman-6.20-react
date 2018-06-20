import React, { Component } from 'react';
import Display from './Display'
import example from './example.json';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {    
    return (      
      <Display example={example}/>
    );
  }
}

export default App;

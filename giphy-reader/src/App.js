import React, { Component } from 'react';
import Display from './Display'
import example from './example.json';
import FilterNav from './FilterNav';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {    
    return (
      <div>      
        <FilterNav />
        <Display example={example}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Display from './Display'
import example from './example.json';
import FilterNav from './FilterNav';
import Search from './search';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {    
    return (
      <div className="mainContainer">    
        <Search />  
        <FilterNav />
        <Display example={example}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Display from './Display'
import example from './example.json';
import FilterNav from './FilterNav';
import Search from './search';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Rating: 'rating',
      Limit: 'limit',
      Language: 'language',
      Offset: 'page'
    };
  }

  setRating(Rating){
    console.log(Rating);
    this.setState({Rating});
  }
  render() {    
    return (
      <div className="mainContainer">    
        <Search />  
        <FilterNav Rating={(Rating) => this.setRating(Rating)}/>
        <Display example={example}/>
      </div>
    );
  }
}

export default App;

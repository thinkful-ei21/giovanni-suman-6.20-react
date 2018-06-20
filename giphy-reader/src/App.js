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
      Offset: 'page',
      searchTerm: ''
    };
  }

  setFilter(Filter){
    //console.log(Rating.name, Rating.value);
    this.setState({[Filter.name]: Filter.value});
  }

  setSearchTerm(searchTerm){
    this.setState({searchTerm});
  }

  submitSearch(){
    console.log(this.state);
  }

  render() {    
    return (
      <div className="mainContainer">    
        <Search value={this.state.searchTerm} submitSearch={()=>this.submitSearch()} setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}/>  
        <FilterNav changeFilter={(Filter) => this.setFilter(Filter)}/>
        <Display example={example}/>
      </div>
    );
  }
}

export default App;

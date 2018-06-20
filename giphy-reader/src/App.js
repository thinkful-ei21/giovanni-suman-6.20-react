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
  //  console.log(this.state);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=test&limit=25&offset=0&rating=G&lang=en`, {
    //  headers: {'api_key':'v3ZRvAHR399FBYpBma1qB6aE8ALK5nDn', 'Content-Type': 'application/json'},
      method:"GET"
    //  referrer: 'no-referrer'
    })
      .then(console.log)
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

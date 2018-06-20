import React from 'react';
import './search.css';

export default function Search(props){

  return (
    <div className="search" >
      <label>SEARCH: </label>
      <input type="text"/>
      <input type="button" value="Search" className="btnSearch" />
    </div>   
  );
}
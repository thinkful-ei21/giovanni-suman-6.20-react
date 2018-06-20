import React from 'react';
import './search.css';

export default function Search(props){

  return (
    <div className="search" >
      {/* <label>SEARCH: </label> */}
      <input type="text" value={props.value} onChange={e =>props.setSearchTerm(e.target.value)}/>
      <input type="button" value="Search" className="btnSearch" onClick={()=>props.submitSearch()} />
    </div>   
  );
}
import React from 'react';
import './filter.css';


export default function FilterNav(props){     
    return (    
        <select className="Filter" onChange={event => props.Rating(event.target.value)}>
            {props.data.map(item => {
                return <option value={item}>{item}</option>
            })}
        </select>
    );
};

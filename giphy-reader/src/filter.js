import React from 'react';
import './filter.css';


export default function FilterNav(props){     
    return (    
        <select className="Filter" name={props.name} onChange={event => props.changeFilter(event.target)}>
            {props.data.map(item => {
                return <option value={item}>{item}</option>
            })}
        </select>
    );
};

import React from 'react';
import Filter from './filter.js';
import './FilterNav.css';


export default function FilterNav(props){   

const filterNames = [
    {name: 'rating', data: ['rating','g','pg','pg-13']},
    {name: 'limit', data: ['limit',1,2,3,4,5]},
    {name: 'language', data: ['language','english','spanish','german','esperanto']},
    {name: 'offset', data:['page',1,2,3,4,5]}
];

return (    
    <div className="FilterContainer">
        {filterNames.map(item => {
            return <Filter name={item.name} data={item.data} Rating={props.Rating}/>
        })}
    </div>
);

};


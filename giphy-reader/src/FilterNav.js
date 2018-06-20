import React from 'react';
import Filter from './filter.js';
import './FilterNav.css';


export default function FilterNav(props){   

const filterNames = [
    {name: 'Rating', data: ['rating','g','pg','pg-13']},
    {name: 'Limit', data: ['limit',1,2,3,4,5]},
    {name: 'Language', data: ['language','english','spanish','german','esperanto']},
    {name: 'Offset', data:['page',1,2,3,4,5]}
];

return (    
    <div className="FilterContainer">
        {filterNames.map((item,index) => {
            return <Filter name={item.name} data={item.data} key={index} changeFilter={props.changeFilter}/>
        })}
    </div>
);

};


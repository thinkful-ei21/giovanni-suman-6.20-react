import React from 'react';
import Gif from './Gif';

export default function Display(props){
    console.log(props.example.data);


return (    
    <div>
        {props.example.data.map(item => {
            return <Gif image={item.images.fixed_width.url} title={item.title}/>
        })}
    </div>
);

};

import React from 'react';
import Gif from './Gif';
import './Display.css';

export default function Display(props){
    console.log(props.example.data);


return (    
    <div className="GifContainer">
        {props.example.data.map(item => {
            return <Gif image={item.images.fixed_width.url} title={item.title.trim().length !== 0? item.title : "Gif"}/>
        })}
    </div>
);

};


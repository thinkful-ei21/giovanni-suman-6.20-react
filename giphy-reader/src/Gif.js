import React from 'react';
import './Gif.css';



export default function Gif(props){
//    console.log(props.title);
return (    
    <div className="gif">
        <label>{props.title}</label>
        <img src={props.image} alt=""></img>
    </div>    
    );
};

Gif.defaultProps = {    
    title: "Gif"
};


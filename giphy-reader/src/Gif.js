import React from 'react';
import './Gif.css';

export default function Gif(props){
//    console.log(props.example);
return (    
    <div className="gif">
        <label>{props.title}</label>
        <img src={props.image}></img>
    </div>    
);
// <img src="https://media0.giphy.com/media/95xRbt5dxppWE/200w.gif?cid=e1bb72ff5b2a73224d6e4835512fa36d"></img>
};


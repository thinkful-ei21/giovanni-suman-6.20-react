import React from 'react';

export default function Gif(props){
    console.log(props.example);
return (    
    <div>
        <label>{props.example.data[1].title}</label>
        <img src="https://media0.giphy.com/media/95xRbt5dxppWE/200w.gif?cid=e1bb72ff5b2a73224d6e4835512fa36d"></img>        
    </div>    
);

};
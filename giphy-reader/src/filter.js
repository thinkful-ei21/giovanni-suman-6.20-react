import React from 'react';



export default function FilterNav(props){
    
    console.log(props)
return (    
    <select className="Filter">
        {props.data.map(item => {
            return <option value={item}>{item}</option>
        })}
    </select>
);

};


// <select> <option value="grapefruit">Grapefruit</option>
//  <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//    <option value="mango">Mango</option> </select>
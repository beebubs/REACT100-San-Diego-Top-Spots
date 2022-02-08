import React from 'react';


export default props => (
    //let googleMaps = ("https://maps.google.com/?q=" + ${props.location[0]} + "," + ${props.location[1]}); 
    <div className='well'>
	    <h4>{props.name}</h4>
	    <p>{props.description}</p>
        <a className = "btn btn-info" type= "button" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>Open In Google Maps</a>
    </div>

);
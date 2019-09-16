import React from 'react';
import img from '../images/back.png'
import './css/logout.css';

const Back = ()=>{
    
    const handleClick = ()=>{
        window.location='/home'
    }

    return(
        <a href="#" id="back"><img onClick = {handleClick} src={img}></img></a>
    );
}

export default Back;
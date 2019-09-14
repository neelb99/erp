import React from 'react';
import img from '../images/logout24.png'
import './css/logout.css';

const Logout = ()=>{
    
    const handleClick = ()=>{
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
        window.location='/';
    }

    return(
        <a href="#" id="logout"><img onClick = {handleClick} src={img}></img></a>
    );
}

export default Logout;
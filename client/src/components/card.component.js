import React from 'react';

const Card = props=>{

    const handleClick = ()=>{
        window.location = props.link;
    }
    return(
        <div className="col-md-4 col-12 text-center dashcard">
            <div className="jumbotron" >
                    <img width = '150px' height = '150px' src={props.img}></img>
                    <button onClick={handleClick} className="btn btn-dark">{props.buttonText}</button>
            </div>
        </div>
    );
}

export default Card;
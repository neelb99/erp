import React from 'react';

const Card = props=>{
    return(
        <div className="col-md-4 col-10 offset-1 offset-md-0 text-center dashcard">
            <div className="jumbotron" >
                    <img width = '150px' height = '150px' src={props.img}></img>
                    <button className="btn btn-dark">{props.buttonText}</button>
            </div>
        </div>
    );
}

export default Card;
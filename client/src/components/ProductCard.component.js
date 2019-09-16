import React from 'react';

const ProductCard = props=>{

    const handleClick = ()=>{
        window.location = props.link;
    }
    return(
        <div className="col-md-4 col-12 text-center dashcard">
            <div className="jumbotron" >
                    <h3>{props.title}</h3>
                    <img width = '200px' height = '150px' src={props.link}></img>
                    <p>{props.description}</p>
                    {props.children}
            </div>
        </div>
    );
}

export default ProductCard;
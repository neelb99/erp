import React from 'react';

const BroadcastCard = props=>{
    
    return(
            <div className="jumbotron" >
                    <h6>{props.to.toUpperCase()} BROADCAST<hr /></h6>
                    <p>{props.message}</p>
                    {props.children}
            </div>
    
    );
}

export default BroadcastCard;
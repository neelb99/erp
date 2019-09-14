import React from 'react';
import './css/login.css';

const Loginform = ()=>{
    return(
        <div id="formsection" className="col-12 col-md-8 offset-md-2 text-center">
            <div className="jumbotron">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" className="form-control"></input>
                    <input type="password" placeholder = "Password" className="form-control"></input>
                    <input type="submit" className="btn btn-success text-center"></input>
                </form>
            </div>
        </div>
    );
}

export default Loginform;
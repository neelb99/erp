import React, {useState} from 'react';
import './css/login.css';
import axios from 'axios';

const Loginform = ()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('none');
    const [errorMessage,setErrorMessage] = useState('');

    const handleUsernameChange = e=>{setUsername(e.target.value)}
    const handlePasswordChange = e=>{setPassword(e.target.value)}
    const handleSubmit = e=>{
        e.preventDefault();
        const user = {
            username: username.trim(),
            password: password.trim()
        }
        axios.post('/api/users/login',user)
            .then(res=>{
                if(res.data===null){
                    setError('block');
                    setErrorMessage('User not found')
                }
                else{
                    setError('none');
                    setErrorMessage('')
                    sessionStorage['username']  = res.data.username;
                    sessionStorage['role']=res.data.role;
                    window.location='/home';
                }
            })
    }

    const errorStyle = {
        display: error,
        color: 'red'
    }

    return(
        <div id="formsection" className="col-12 col-md-8 offset-md-2 text-center">
            <div className="jumbotron">
                <h2>Login</h2>
                <p style={errorStyle}>{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="form-control" required onChange={handleUsernameChange}></input>
                    <input type="password" placeholder = "Password" className="form-control" required onChange={handlePasswordChange}></input>
                    <input type="submit" className="btn btn-success text-center form-control"></input>
                </form>
            </div>
        </div>
    );
}

export default Loginform;
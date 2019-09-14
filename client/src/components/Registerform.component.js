import React, {useState} from 'react';
import './css/login.css';
import axios from 'axios';

const Registerform = ()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('none');
    const [role,setRole] = useState('employee');
    const [errorMessage,setErrorMessage] = useState('');
    const [colour,setColour] = useState('green');

    const handleUsernameChange = e=>{setUsername(e.target.value)}
    const handlePasswordChange = e=>{setPassword(e.target.value)}
    const handleRoleChange = e=>{setRole(e.target.value)}
    const handleSubmit = e=>{
        e.preventDefault();
        const user = {
            username: username.trim(),
            password: password.trim(),
            role:role
        }
        axios.post('/api/users/register',user)
            .then(res=>{
                if(res.data===null){
                    setColour('red')
                    setError('block');
                    setErrorMessage('User already exists')
                }
                else{
                    setColour('green')
                    setError('block');
                    setErrorMessage('User added')
                }
            })
    }

    const errorStyle = {
        display: error,
        color: colour
    }

    return(
        <div id="formsection" className="col-12 col-md-8 offset-md-2 text-center">
            <div className="jumbotron">
                <h2>Add User</h2>
                <p style={errorStyle}>{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="form-control" required onChange={handleUsernameChange}></input>
                    <input type="password" className="form-control" placeholder = "Password" required onChange={handlePasswordChange}></input>
                    <select className="form-control" onChange={handleRoleChange}>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                    </select>
                    <input type="submit" className="btn btn-success text-center form-control"></input>
                </form>
            </div>
        </div>
    );
}

export default Registerform;
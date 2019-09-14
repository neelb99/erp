import React,{useEffect,useState} from 'react';
import Registerform from './Registerform.component';
import Logout from './Lougout.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';

const AddUser = ()=>{
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role')
        if(name===null || role!=='admin'){
            window.location = '/';
        }
        else{
            setLoaded(true);
        }
    },[]);

    const checkLoaded = ()=>{
        if(loaded){
        return(
        <div className="landing row text-center">
            <div className="col-12 col-md-6" id="intro">
                <h1>Instructions</h1>
                <ul>
                    <li className="text-left">Enter a unique username which will be used to log in</li>
                    <li className="text-left">Enter a password for the user</li>
                    <li className="text-left">Enter their role in the company, this will affect their permissions</li>
                </ul>
            </div>
            <div className="col-12 col-md-6" id="login">
                <Registerform />
            </div>
            <div id="logout"><Logout /></div>
        </div>
        );}
    }

    return(
        <React.Fragment>
            {checkLoaded()}
        </React.Fragment>
    );
}

export default AddUser;
import React,{useEffect,useState} from 'react';
import Registerform from './Registerform.component';
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
                <h1>Sample ERP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="col-12 col-md-6" id="login">
                <Registerform />
            </div>
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
import React,{useEffect,useState} from 'react';
import Loginform from './Loginform.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';

const Home = ()=>{
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        if(name!==null){
            window.location = '/home';
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
                <p>Welcome to Sample ERP. Please log in to use the system. This system is designed for owners, employees and customers and can be used by any of them using the username and password provided by the administrator. Every user will have different permissions based on their role in the organization. The administrator can create new accounts for new managers, employees or customers.</p>
            </div>
            <div className="col-12 col-md-6" id="login">
                <Loginform/>
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

export default Home;
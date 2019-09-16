import React,{useEffect,useState} from 'react';
import Productform from './Productform.component';
import Logout from './Lougout.component'
import Back from './Back.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';

const AddProduct = ()=>{
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
                    <li className="text-left">Enter the title of the product</li>
                    <li className="text-left">Enter the description of the product</li>
                    <li className="text-left">Enter the link to an image of the product</li>
                </ul>
            </div>
            <div className="col-12 col-md-6" id="login">
                <Productform />
            </div>
            <div id="logout"><Logout /></div>
            <div id="back"><Back /></div>
        </div>
        );}
    }

    return(
        <React.Fragment>
            {checkLoaded()}
        </React.Fragment>
    );
}

export default AddProduct;
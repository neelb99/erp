import React,{useEffect,useState} from 'react';
import Logout from './Lougout.component'
import Back from './Back.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import axios from 'axios';

const ViewBroadcasts = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [broadcasts,setBroadcasts] = useState([]);

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role')
        if(name===null || role===null){
            window.location = '/';
        }
        else{
            if(role==='customer')
                axios.get('/api/broadcasts/view/customers')
                    .then(res=>{setBroadcasts(res.data.reverse());setLoaded(true);})
            else if(role==='employee')
                axios.get('/api/broadcasts/view/employees')
                        .then(res=>{setBroadcasts(res.data.reverse());setLoaded(true);})
            else 
                axios.get('/api/broadcasts/view')
                        .then(res=>{setBroadcasts(res.data.reverse());setLoaded(true);})
        }
    },[]);

    const checkLoaded = ()=>{
        if(loaded){
        return(
        <React.Fragment>
            <div className="landing text-center" id="pastbroadcasts">
                <div id="dashheading">
                <h1 id="dashheading">Broadcasts</h1>
                </div>
                <div className="row">
                    {broadcasts.map(past=>{
                        return (
                        <div key={past._id} className="col-md-4 col-12 text-center dashcard">
                            <div className="jumbotron" >
                                <h6>Broadcast<hr /></h6>
                                <p>{past.message}</p>
                            </div>
                        </div>
                        ); 
                    })}
                </div>
                <div id="logout"><Logout /></div>
                <div id="back"><Back /></div>
            </div>
        </React.Fragment>
        );}
    }

    return(
        <React.Fragment>
            {checkLoaded()}
        </React.Fragment>
    );
}

export default ViewBroadcasts;
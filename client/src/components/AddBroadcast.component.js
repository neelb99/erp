import React,{useEffect,useState} from 'react';
import Logout from './Lougout.component'
import Back from './Back.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import axios from 'axios';
import BroadcastCard from './BroadcastCard.component';

const AddBroadcast = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [pastBroadcasts,setPastBroadcasts] = useState([]);
    const [message,setMessage] = useState('');
    const [error,setError] = useState('none');
    const [role,setRole] = useState('employee');
    const [check,setCheck] = useState(false);

    const handleMessageChange = e=>{setMessage(e.target.value)}
    const handleRoleChange = e=>{setRole(e.target.value)}
    const handleSubmit = e=>{
        e.preventDefault();
        const newMessage = {
            message: message,
            to:role
        }
        setError('none');
        axios.post('/api/broadcasts/new',newMessage)
            .then(res=>{
                setError('block');
            })
        setCheck(!check);
    }

    const errorStyle = {
        display: error,
        color: 'green'
    }
    
    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role')
        if(name===null || role!=='admin'){
            window.location = '/';
        }
        else{
            axios.get('/api/broadcasts/view')
                .then(res=>{setPastBroadcasts(res.data.reverse());setLoaded(true);})
        }
    },[check]);


    const handleDelete = id =>{
        setPastBroadcasts(pastBroadcasts.filter(past=>past._id!==id));
        axios.get('/api/broadcasts/delete/'+id)
            .then(res=>console.log(res.json));
    }

    const checkLoaded = ()=>{
        if(loaded){
        return(
        <React.Fragment>
            <div className="landing row text-center" id="addbroadcastlanding">
                <div className="col-12 col-md-6 offset-md-3" id="login">
                <div id="formsection" className="col-12 col-md-8 offset-md-2 text-center">
                    <div className="jumbotron">
                        <h2>New Broadcast</h2>
                        <p style={errorStyle}>Broadcast Sent</p>
                        <form onSubmit={handleSubmit}>
                            <select className="form-control" onChange={handleRoleChange}>
                                <option value="employee">Employees</option>
                                <option value="customer">Customers</option>
                            </select>
                            <textarea placeholder="Message" className="form-control" required onChange={handleMessageChange}></textarea>
                            <input type="submit" className="btn btn-success text-center form-control"></input>
                        </form>
                    </div>
                </div>
                </div>
                <div id="logout"><Logout /></div>
                <div id="back"><Back /></div>
            </div>
            <div className="landing text-center" id="pastbroadcasts">
                <h1>Past Broadcasts</h1>
                <div className="row">
                    {pastBroadcasts.map(past=>{
                        return (
                        <div className="col-md-4 col-12 text-center dashcard">
                            <BroadcastCard role='admin' message={past.message} to={past.to}>
                            <button onClick={()=>handleDelete(past._id)} className="btn btn-danger text-center form-control">Delete</button>
                            </BroadcastCard>
                        </div>
                        ); 
                    })}
                </div>
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

export default AddBroadcast;
import React,{useEffect,useState} from 'react';
import Logout from './Lougout.component'
import Back from './Back.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import axios from 'axios';

const AddFeedback = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [message,setMessage] = useState('');
    const [error,setError] = useState('none');

    const handleMessageChange = e=>{setMessage(e.target.value)}
    const handleSubmit = e=>{
        e.preventDefault();
        const newMessage = {
            from: sessionStorage.getItem('username'),
            role: sessionStorage.getItem('role'),
            message: message
        }
        setError('none');
        axios.post('/api/feedbacks/add',newMessage)
            .then(res=>{
                setError('block');
            })
    }

    const errorStyle = {
        display: error,
        color: 'green'
    }
    
    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role')
        if(name===null || role===null){
            window.location = '/';
        }
        else{
            setLoaded(true);
        }
    },[]);

    const checkLoaded = ()=>{
        if(loaded){
        return(
        <React.Fragment>
            <div className="landing row text-center" id="addbroadcastlanding">
                <div className="col-12 col-md-6 offset-md-3" id="login">
                <div id="formsection" className="col-12 col-md-8 offset-md-2 text-center">
                    <div className="jumbotron">
                        <h2>Send Feedback</h2>
                        <p style={errorStyle}>Feedback Sent</p>
                        <form onSubmit={handleSubmit}>
                            <textarea placeholder="Message" className="form-control" required onChange={handleMessageChange}></textarea>
                            <input type="submit" className="btn btn-success text-center form-control"></input>
                        </form>
                    </div>
                </div>
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

export default AddFeedback;
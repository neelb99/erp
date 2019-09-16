import React,{useState,useEffect} from 'react';
import Logout from './Lougout.component';
import './css/dashboard.css';
import Back from './Back.component';
import axios from 'axios';

const ViewFeedback = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [feedbacks,setFeedbacks] = useState([]);

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role');
        if(name===null || role!=='admin'){
            window.location='/'
        }
        else{
            axios.get('/api/feedbacks/view')
                .then(res=>{setFeedbacks(res.data);setLoaded(true);})
        }
    },[])

    const checkLoaded = ()=>{
        if(loaded){
            return(
                <div className="landing">
                    
                    <div className="text-center" id="dashheading">
                        <h1>Feedback</h1>
                    </div>
                    <div id="dash">
                        <div className="row">
                            {checkRole()}
                        </div>
                    </div>
                    <div id="logout"><Logout /></div>
                    <div id="back"><Back /></div>
                </div>
            );
        }
    }

    const handleDelete = id=>{
        axios.get('api/feedbacks/delete/'+id)
            .then(res=>console.log(res.data))
        setFeedbacks(feedbacks.filter(feed=>feed._id!==id));
    }

    const checkRole = ()=>{
        return(
            <React.Fragment>
                {feedbacks.map(feedback=>{
                    return(
                        <div className="col-md-4 col-12 text-center dashcard">
                            <div className="jumbotron" >
                                <h5>{feedback.from} ({feedback.role})<hr/></h5>
                                <p>{feedback.message}</p>
                                <button className="btn btn-danger form-control" onClick={()=>handleDelete(feedback._id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }

    return(
        <React.Fragment>
            {checkLoaded()}
        </React.Fragment>
    );
}

export default ViewFeedback;
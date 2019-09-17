import React,{useEffect,useState} from 'react';
import Logout from './Lougout.component'
import Back from './Back.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import axios from 'axios';

const PendingOrders = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role')
        if(name===null || role==='customer'){
            window.location = '/';
        }
        else{
            if(role==='employee' || role ==='admin')
                axios.get('/api/orders/getpending')
                        .then(res=>{setOrders(res.data.reverse());setLoaded(true);})
        }
    },[]);

    const handleExecute = id =>{
        const post = {employee:sessionStorage.getItem('username')};
        axios.post(('/api/orders/execute/'+id),post)
            .then(res=>console.log(res.data))
        setOrders(orders.filter(order=>order._id!==id))
    }

    const handleDelete = id =>{
        axios.get('/api/orders/cancel/'+id)
            .then(res=>console.log(res.data))
        setOrders(orders.filter(order=>order._id!==id));
    }

    const checkLoaded = ()=>{
        if(loaded){
        return(
        <React.Fragment>
            <div className="landing text-center" id="pastbroadcasts">
                <h1>Pending Orders</h1>
                <div className="row">
                    {orders.map(order=>{
                        return (
                        <div key={order._id} id="order" className="col-md-4 col-12 text-center dashcard">
                            <div className="jumbotron" >
                                <h6>{order.customer}<hr /></h6>
                                <p>{order.items.map(item=><span>{item}<br /></span>)}</p>
                                <button className="btn btn-success form-control" onClick={()=>handleExecute(order._id)}>Execute</button>
                                <button className="btn btn-danger form-control" onClick={()=>handleDelete(order._id)}>Cancel</button>
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

export default PendingOrders;
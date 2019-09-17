import React,{useEffect,useState} from 'react';
import Logout from './Lougout.component'
import Back from './Back.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import axios from 'axios';

const ExecutedOrders = ()=>{
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
                axios.get('/api/orders/getexecuted')
                        .then(res=>{setOrders(res.data.reverse());setLoaded(true);})
        }
    },[]);

    const checkLoaded = ()=>{
        if(loaded){
        return(
        <React.Fragment>
            <div className="landing text-center" id="pastbroadcasts">
                <div id="dashheading">
                <h1 id="dashheading">Executed Orders</h1>
                </div>
                <div className="row">
                    {orders.map(order=>{
                        return (
                        <div key={order._id} id="order" className="col-md-4 col-12 text-center dashcard">
                            <div className="jumbotron" >
                                <h6>Customer:{order.customer}<br />Exeucted by: {order.executedBy}<hr /></h6>
                                <p>{order.items.map(item=><span>{item}<br /></span>)}</p>
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

export default ExecutedOrders;
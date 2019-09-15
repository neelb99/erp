import React,{useState,useEffect} from 'react';
import Logout from './Lougout.component';
import './css/dashboard.css';
import Card from './card.component';
import person from '../images/person.png';
import cart from '../images/cart.png';
import tasks from '../images/tasks.png'
import form from '../images/form.png';
import message from '../images/message.png';
import cash from '../images/cash.png'

const Dashboard = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [username,setUsername] = useState('');
    const [userRole,setUserRole] =useState('');

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role');
        if(name===null){
            window.location='/'
        }
        else{
            setUsername(name);
            setUserRole(role);
            setLoaded(true);
        }
    },[])

    const checkLoaded = ()=>{
        if(loaded){
            return(
                <div className="landing">
                    <Logout />
                    <div className="text-center" id="dashheading">
                        <h1>Welcome {username}</h1>
                    </div>
                    <div id="dash">
                        <div className="row">
                            {checkRole()}
                        </div>
                    </div>
                </div>
            );
        }
    }

    const checkRole = ()=>{
        if(userRole==='admin'){
            return(
                <React.Fragment>
                    <Card img={person} buttonText="Manage Users"/>
                    <Card img={cart} buttonText="Manage Products"/>
                    <Card img={tasks} buttonText="Manage Tasks"/>
                    <Card img={cash} buttonText="Manage Finances"/>
                    <Card img={form} buttonText="View Feedback"/>
                    <Card img={message} buttonText="Send Broadcast"/>
                </React.Fragment>
            );
        }
        else if(userRole==='employee'){
            return <h1>Employee</h1>
        }
        else if(userRole==='customer'){
            return <h1>Customer</h1>
        }
    }

    return(
        <React.Fragment>
            {checkLoaded()}
        </React.Fragment>
    );
}

export default Dashboard;
import React,{useState,useEffect} from 'react';
import Logout from './Lougout.component';
import './css/dashboard.css';
import Card from './card.component';
import person from '../images/person.png';
import cart from '../images/cart.png';
import tasks from '../images/tasks.png'
import form from '../images/form.png';
import message from '../images/message.png';
import cash from '../images/cash.png';
import add from '../images/add.png';

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
                    <Card img={person} link="/users" buttonText="Manage Users"/>
                    <Card img={cart} buttonText="Manage Products"/>
                    <Card img={tasks} buttonText="Manage Tasks"/>
                    <Card img={add} link="/adduser" buttonText="Add Users"/>
                    <Card img={form} buttonText="View Feedback"/>
                    <Card img={message} link="/newbroadcast" buttonText="Send Broadcast"/>
                </React.Fragment>
            );
        }
        else if(userRole==='employee'){
            return (
                <React.Fragment>
                    <Card img={person} buttonText="View Customers"/>
                    <Card img={cart} buttonText="Products"/>
                    <Card img={tasks} buttonText="Your Tasks"/>
                    <Card img={cash} buttonText="Executed Orders"/>
                    <Card img={form} buttonText="Send Feedback"/>
                    <Card img={message} buttonText="View Messages"/>
                </React.Fragment>
            );
        }
        else if(userRole==='customer'){
            return (
                <React.Fragment>
                    <Card img={person} buttonText="View Account"/>
                    <Card img={cart} buttonText="Products"/>
                    {/* <Card img={tasks} buttonText="View Orders"/> */}
                    <Card img={cash} buttonText="Transactions"/>
                    <Card img={form} buttonText="Send Feedback"/>
                    <Card img={message} buttonText="View Messages"/>
                </React.Fragment>
            );
        }
    }

    return(
        <React.Fragment>
            {checkLoaded()}
        </React.Fragment>
    );
}

export default Dashboard;
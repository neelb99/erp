import React,{useState,useEffect} from 'react';
import Logout from './Lougout.component';

const Dashboard = ()=>{
    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        if(name===null){
            window.location='/'
        }
        else{
            setLoaded(true);
        }
    },[])

    const checkLoaded = ()=>{
        if(loaded){
            return(
                <div>
                    <h1>Welcome</h1>
                    <Logout />
                </div>
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
import React,{useState,useEffect} from 'react';

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

    const handleClick = ()=>{
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
        window.location='/';
    }

    const checkLoaded = ()=>{
        if(loaded){
            return(
                <div>
                    <h1>Welcome</h1>
                    <button onClick={handleClick}>Logout</button>
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
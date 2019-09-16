import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Logout from './Lougout.component';
import Back from './Back.component';

const Users = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const role = sessionStorage.getItem('role');
        if(role===null || role==='customer')
            window.location='/home';
        if(role==='employee'){
            axios.get('/api/users/viewcustomers')
                .then(res=>{setUsers(res.data);setLoaded(true);});
        }
        else if(role==='admin'){
            axios.get('/api/users/view')
                .then(res=>{setUsers(res.data);setLoaded(true);});
        }
    },[])


    const handleClick = id=>{
        setUsers(users.filter(user=>user._id !== id))
        axios.get('/api/users/delete/'+id)
            .then(res=>console.log(res));
    }

    const checkRole = ()=>{
        if(loaded){
            return(
                <div className="landing text-center">
                    <div id="intro" className="col-12 usertable">
                        <h1>Users</h1>
                        <table className="table table-dark table-bordered">
                            <thead className="thead-dark">
                                <th>Username</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </thead>
                            <tbody>
                                {users.map(user=>{
                                    return(
                                        <tr key={user._id}>
                                            <td>{user.username}</td>
                                            <td>{user.role}</td>
                                            <td><button className="btn btn-danger" onClick={()=>handleClick(user._id)}>Delete</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div id="logout"><Logout /></div>
                    <div id="back"><Back /></div>
                </div>
            );
            
        }
    }

    return(
        <React.Fragment>
            {checkRole()}
        </React.Fragment>
    );
}

export default Users;
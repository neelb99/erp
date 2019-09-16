import React,{useState,useEffect} from 'react';
import Logout from './Lougout.component';
import './css/dashboard.css';
import ProductCard from './ProductCard.component';
import Back from './Back.component';
import axios from 'axios';

const Dashboard = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role');
        if(name===null || role!=='admin'){
            window.location='/'
        }
        else{
            axios.get('/api/products/view')
                .then(res=>{setProducts(res.data);setLoaded(true);})
        }
    },[])

    const checkLoaded = ()=>{
        if(loaded){
            return(
                <div className="landing">
                    
                    <div className="text-center" id="dashheading">
                        <h1>Products</h1>
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
        axios.get('api/products/delete/'+id)
            .then(res=>console.log(res.data))
        setProducts(products.filter(prod=>prod._id!==id));
    }

    const checkRole = ()=>{
        return(
            <React.Fragment>
                {products.map(product=>{
                    return(
                        <ProductCard key={product._id} title={product.title} description={product.description} link={product.link}>
                            <button className="btn btn-danger form-control" onClick = {()=>handleDelete(product._id) }>Delete</button>
                        </ProductCard>
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

export default Dashboard;
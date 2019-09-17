import React,{useState,useEffect} from 'react';
import Logout from './Lougout.component';
import './css/dashboard.css';
import ProductCard from './ProductCard.component';
import Back from './Back.component';
import axios from 'axios';

const ViewProducts = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [products,setProducts] = useState([]);
    const [items,setItems] = useState([]);

    useEffect(()=>{
        const name = sessionStorage.getItem('username');
        const role = sessionStorage.getItem('role');
        if(name===null || role===null){
            window.location='/'
        }
        else{
            axios.get('/api/products/view')
                .then(res=>{setProducts(res.data);setLoaded(true);})
        }
    },[])

    const handleOrder = ()=>{
        if(items.length<1){
            alert('Cart is Empty!')
        }
        else{
            const newOrder = {
                customer: sessionStorage.getItem('username'),
                items:items
            }
            axios.post('/api/orders/new',newOrder)
                .then(res=>console.log(res.data));
            setItems([]);
            alert('Order Placed');
        }
    }

    const checkLoaded = ()=>{
        if(loaded){
            return(
                <React.Fragment>
                <div className="landing">
                    
                    <div className="text-center" id="dashheading">
                        <h1 id="dashheading">Products</h1>
                    </div>
                    <div id="dash">
                        <div className="row">
                            {checkRole()}
                        </div>
                    </div>
                    <div id="logout"><Logout /></div>
                    <div id="back"><Back /></div>
                </div>
                <div className="landing" id="cartsection">
                    <div className="col-md-4 col-12 text-center">
                        <div id="cart" className="jumbotron" >
                            <h3>Cart</h3>
                            <p>{items.map(item=><span>{item}<br /></span>)}</p>
                            <button className="btn btn-warning form-control" onClick={()=>handleOrder()}>Place Order</button>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            );
        }
    }

    const handleAdd = title=>{
        setItems([...items,title]);
    }

    const checkCustomer = title=>{
        if(sessionStorage.getItem('role')==='customer')
            return <button className="btn btn-success form-control" onClick={()=>handleAdd(title)}>Add to cart</button>
    }

    const checkRole = ()=>{
        return(
            <React.Fragment>
                {products.map(product=>{
                    return(
                        <div className="col-md-4 col-12 text-center dashcard">
                            <div className="jumbotron" >
                                <h3>{product.title}</h3>
                                <img width = '200px' height = '150px' src={product.link}></img>
                                <p>{product.description}</p>
                                {checkCustomer(product.title)}
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

export default ViewProducts;
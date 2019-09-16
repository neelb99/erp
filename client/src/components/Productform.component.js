import React, {useState} from 'react';
import './css/login.css';
import axios from 'axios';

const Productform = ()=>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [error,setError] = useState('none');
    const [link,setLink] = useState('');

    const handleTitleChange = e=>{setTitle(e.target.value)}
    const handleDescriptionChange = e=>{setDescription(e.target.value)}
    const handleLinkChange = e=>{setLink(e.target.value)}
    const handleSubmit = e=>{
        e.preventDefault();
        const product = {
            title: title.trim(),
            description: description.trim(),
            link: link.trim()
        }
        setError('none');
        axios.post('/api/products/add',product)
            .then(res=>{
                setError('block')
            })
    }

    const errorStyle = {
        display: error,
        color: 'green'
    }

    return(
        <div id="formsection" className="col-12 col-md-8 offset-md-2 text-center">
            <div className="jumbotron">
                <h2>Add Product</h2>
                <p style={errorStyle}>Product Added</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" className="form-control" required onChange={handleTitleChange}></input>
                    <textarea placeholder = "Description" className="form-control" required onChange={handleDescriptionChange}></textarea>
                    <input type="text" placeholder="Image Link" className="form-control" required onChange={handleLinkChange}></input>
                    <input type="submit" className="btn btn-success text-center form-control"></input>
                </form>
            </div>
        </div>
    );
}

export default Productform;
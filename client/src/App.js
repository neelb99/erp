import React from 'react';
import './App.css';
import Home from './components/Home.component';
import Dashboard from './components/Dashboard.component'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddUser from './components/AddUser.component';
import Users from './components/Users.component';
import AddBroadcast from './components/AddBroadcast.component'
import AddProduct from './components/AddProduct.component';
import ManageProducts from './components/ManageProducts.component';
import ViewFeedback from './components/ViewFeedback.component';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Dashboard}></Route>
      <Route exact path='/adduser' component={AddUser}></Route>
      <Route exact path='/users' component={Users}></Route>
      <Route exact path="/newbroadcast" component={AddBroadcast}></Route>
      <Route exact path="/addproducts" component={AddProduct}></Route>
      <Route exact path="/manageproducts" component={ManageProducts}></Route>
      <Route exact path="/viewfeedback" component={ViewFeedback}></Route>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './components/Home.component';
import Dashboard from './components/Dashboard.component'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddUser from './components/AddUser.component';
import Users from './components/Users.component';
import AddBroadcast from './components/AddBroadcast.component'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Dashboard}></Route>
      <Route exact path='/adduser' component={AddUser}></Route>
      <Route exact path='/users' component={Users}></Route>
      <Route exact path="/newbroadcast" component={AddBroadcast}></Route>
    </Router>
  );
}

export default App;

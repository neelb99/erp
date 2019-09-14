import React from 'react';
import './App.css';
import Home from './components/Home.component';
import Dashboard from './components/Dashboard.component'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddUser from './components/AddUser.component';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route path='/home' component={Dashboard}></Route>
      <Route path='/adduser' component={AddUser}></Route>
    </Router>
  );
}

export default App;

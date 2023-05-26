import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import ListEmployees from './components/ListEmployees';
import Header from './components/Header';
import Createemployee from './components/Createemployee';
import Viewemployee from './components/Viewemployee';
import Updateemployee from './components/Updateemployee'
import ReactDOM from "react-dom";
import React, { useState } from 'react';


function App() {
  return (
  	<div>
    <Router>
  	  <Header/>
        <div className="container">
          <Switch> 
          <Route  path='/Home' component={ Home }></Route>
          <Route  path='/employee' component={ ListEmployees }></Route>
          <Route  path='/add-employee' component={ Createemployee }></Route>
          <Route  path='/view-employee/:id' component={ Viewemployee }></Route>
          <Route  path='/update-employee/:id' component={ Updateemployee }></Route>
          </Switch> 
    </div>
    </Router>
  	</div>
    
  )
}

export default App;

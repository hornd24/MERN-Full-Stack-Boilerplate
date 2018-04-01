import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization'
import './app.scss'
export default props =>
<BrowserRouter>
  <div className="app">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/organization">Organizations</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
  </div>
</BrowserRouter>

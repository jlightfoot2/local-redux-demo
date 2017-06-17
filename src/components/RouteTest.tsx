import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import { Link, Route } from 'react-router-dom';
const RouteTest = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/home">Home</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/home" component={Home} />
    </div>
  </div>
);


export default RouteTest;
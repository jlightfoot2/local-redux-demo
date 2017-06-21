import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppTheme from './AppTheme';
import Products from '../containers/Products';
import Home from './Home';
import Dashboard from './Dashboard';
import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';



const RouteTest = () => (
  <AppTheme leftIcon={<LeftMenuIcon />}>

    <div style={{padding: '10px'}}>
      
      <Route path="/products" component={Products} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Home} />

    </div>
  </AppTheme>
);


export default RouteTest;
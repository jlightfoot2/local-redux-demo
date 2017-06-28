import * as React from 'react';
import AppTheme from './AppTheme';
import CatalogEdit from '../containers/CatalogEdit';
import Home from './Home';
import ShopCatalog from './ShopCatalog';
import LeftMenuIcon from './LeftMenuIcon';
import { Route } from 'react-router-dom';



const RouteTest = () => (
  <AppTheme leftIcon={<LeftMenuIcon />}>

    <div style={{padding: '10px'}}>
      
      <Route path="/products" component={CatalogEdit} />
      <Route path="/shop" component={ShopCatalog} />
      <Route exact path="/" component={Home} />

    </div>
  </AppTheme>
);


export default RouteTest;
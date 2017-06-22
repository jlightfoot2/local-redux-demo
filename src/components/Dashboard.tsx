import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductsCatalog from '../containers/ProductsCatalog';
import FavoritesList from '../containers/FavoritesList';
export interface Props {

}

export interface State {
  
}

export default class Dashboard extends React.Component<Props, State>{
  componentDidMount(){
    /*
    (require as any).ensure([],(require) => {
      require('d3');
    }); */
  }
  render(){

    return <div style={{position: 'relative'}}>
    
              <div style={{float: 'left'}} >
                <ProductsCatalog />
              </div>

              <div style={{position: 'absolute', top: 0, right: 50}} >
                <FavoritesList />
              </div>
              
           </div>;
  }
}
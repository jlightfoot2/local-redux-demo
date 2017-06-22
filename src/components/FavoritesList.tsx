import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductView from '../components/ProductView';
import {ProductInterface} from '../res/data/products';
export interface Props {
  products:ProductInterface[];
  remove(product: ProductInterface): void;
}

export interface State {
 
}

export default class ProductsCatalog extends React.Component<Props, State>{

  constructor(props){
    super(props);
  }
  
  render(){
    const {products,remove} = this.props;
    return <div>
              <h1>Favorites</h1>

              {products.map(product => {
                return  <ProductView bgColor={'#3CB3FF'} product={product} key={product.id}>
                          <input type="button" onClick={() => remove(product)} value="Remove" />
                        </ProductView>;
              })}

           </div>;
  }
}
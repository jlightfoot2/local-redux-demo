import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditProductContainer from '../containers/EditProduct';
import {ProductInterface} from '../res/data/products';
import EditProduct from '../containers/EditProduct';
export interface Props {
  product:ProductInterface;
  bgColor?: string;
}

export interface State {

}

export default class ProductView extends React.Component<Props, State>{

  public static defaultProps: Partial<Props> = {
    bgColor: '#add8e6'
  }
  
  render(){
    const {product, bgColor} = this.props;
    return <div style={{maxWidth: 300,border: '1px solid black',backgroundColor: bgColor, padding: 5, margin: 5}}>
               <h3>{product.title}</h3>
               <div>Price: {product.price}</div>
               <div>{product.description}</div>
               <div style={{padding: 10}}>
                   {this.props.children}
               </div>
           </div>;
  }
}
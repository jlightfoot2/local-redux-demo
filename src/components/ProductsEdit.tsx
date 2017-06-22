import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditProductContainer from '../containers/EditProduct';
import {ProductInterface} from '../res/data/products';
import EditProduct from '../containers/EditProduct';
import ProductView from '../components/ProductView';
export interface Props {
  products:ProductInterface[];
  remove(product: ProductInterface): void;
}

export interface State {
  activeEdit: number;
}

export default class ProductsEdit extends React.Component<Props, State>{

  constructor(props){
    super(props);
    this.state = {
      activeEdit: null
    }
  }

  handleClearActive = () => {
    this.setState({
      activeEdit: null
    })
  }

  handleSetActive = (productId) => {
    this.setState({
      activeEdit: productId
    })
  }

  getProductLine = (product) => {
    const {remove} = this.props;
    const {activeEdit} = this.state;
    if(product.id === activeEdit){
      return  <EditProduct product={product} realtime={true} key={product.id}>
                 <input type="button" value="Done" onClick={() => this.handleClearActive()} />
              </EditProduct>;
    } else {
      return <ProductView product={product}  key={product.id}>

                <input type="button" value="Edit" onClick={() => this.handleSetActive(product.id)} />
                &nbsp;|&nbsp;
                <input type="button" value="Delete" onClick={() => remove(product)} />
               
              </ProductView>;
    }
  }
  
  render(){
    const {products} = this.props;
    const {activeEdit} = this.state;
    return <div>
              <h1>Products List</h1>

              { products.map(product => this.getProductLine(product)) }

              <EditProductContainer realtime={false} />

           </div>;
  }
}
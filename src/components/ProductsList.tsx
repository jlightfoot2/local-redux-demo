import * as React from 'react';
import ProductView from '../components/ProductView';
import EditProduct from '../containers/EditProduct';
import {ProductInterface} from '../res/data/products';

export interface Props {
  products:ProductInterface[];
  addFavorite(product: ProductInterface): void;
}

export interface State {
  mode: number; //0: view, 1: edit
}

export default class ProductsList extends React.Component<Props, State>{

  constructor(props){
    super(props);
    this.state = {
      mode: 0
    }
  }

  toggleEdit = () => {
    this.setState({
      mode: this.state.mode ? 0 : 1
    });
  }
  
  render(){
    const {products,addFavorite} = this.props;
    const {mode} = this.state;
    
    let productsList = null;
    if(mode === 1){

        productsList = products.map(product => <EditProduct realtime={true} product={product} key={product.id} />);

    } else {

        productsList = products.map(product => {
                          return  <ProductView bgColor={'#3CB371'} product={product} key={product.id}>
                                    <input type="button" onClick={() => addFavorite(product)} value="Favorite" />
                                  </ProductView>;
                        });

    }

    const buttonText = mode ? "Done" : "Edit";

    return <div>
              <h1>Catalog <input onClick={() => this.toggleEdit()} type="button" value={buttonText} /></h1>

              {productsList}

           </div>;
  }
}
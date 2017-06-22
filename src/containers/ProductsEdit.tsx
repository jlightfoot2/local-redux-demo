import {connect} from 'react-redux';
import ProductsEditComponent from '../components/ProductsEdit';
import {ProductInterface} from '../res/data/products';
import {deleteProduct} from '../actions';


const stateToProps = (state,ownProps) => {
  return {
    products: state.productIds.map(pid => state.products[pid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    remove: (product: ProductInterface) => {
      dispatch(deleteProduct(product.id));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(ProductsEditComponent);
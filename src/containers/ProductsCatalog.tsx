import {connect} from 'react-redux';
import ProductsCatalogComponent from '../components/ProductsCatalog';
import {ProductInterface} from '../res/data/products';
import {addProductFavorites} from '../actions';


const stateToProps = (state,ownProps) => {
  return {
    products: state.productIds.map(pid => state.products[pid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    addFavorite: (product: ProductInterface) => {
      dispatch(addProductFavorites(product.id));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(ProductsCatalogComponent);
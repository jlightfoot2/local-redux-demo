import {connect} from 'react-redux';
import FavoritesListComponent from '../components/FavoritesList';
import {ProductInterface} from '../res/data/products';
import {removeProductFavorites} from '../actions';


const stateToProps = (state,ownProps) => {
  return {
    products: state.favoriteIds.map(fid => state.products[fid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    remove: (product: ProductInterface) => {
      dispatch(removeProductFavorites(product.id));
    }
  }
}


export default connect(stateToProps,dispatchToProps)(FavoritesListComponent);
import {connect} from 'react-redux';
import ProductsCatalogComponent from '../components/ProductsCatalog';
import {ProductInterface} from '../res/data/products';
import {addProductFavorites} from '../actions';

/**
 * stateToProps
 *
 * this function returns an object which maps the state to
 * properties in the '../components/ProductsCatalog' component
 *
 * I've provided snap shot of an example of the state object used below
 * 
 */
/*

{ products: { '1': { id: 1, title: 'Toy Car', price: 9.99, description: '' },
               '2': { id: 2, title: 'Doll', price: 19.99, description: '' },
               '3': { id: 3, title: 'RC Helicopter', price: 59.99, description: '' },
               '4': { id: 4, title: 'Coffee Grinder', price: 26.99, description: '' },
               '5': { id: 5,title: 'Rigol Oscilloscope',price: 355.99,description: '' },
               '6': { id: 6, title: 'Beach Towel', price: 19.99, description: '' },
               '7': { id: 7, title: 'Ear Plugs', price: 6.99, description: '' },
               '8': { id: 8, title: 'Desk Lamp', price: 15.99, description: '' },
               '9': { id: 9, title: 'Dune Buggy', price: 12000, description: '' },
               '10': { id: 10, title: 'Gift Card', price: 20, description: '' } },

  productIds: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],

  favoriteIds: [ 1 ] }
*/



const stateToProps = (state,ownProps) => {

  return {
    products: state.productIds.map(pid => state.products[pid])
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {
    addFavorite: (product: ProductInterface) => {
      dispatch(addProductFavorites(product.id));
      //The only way to update the redux state is via dispatching "actions".
      //The above line shows a typicall dispatching of an action
    }
  }
}
/**
 * The line below effectivly takes "products" and "addFavorite" defined above
 * and introduces them to ProductsCatalogComponent as properites.
 * Just like any other React properties within "ProductsCatalogComponent" you 
 * can access this props via this.props.addFavorite and this.props.products
 *
 * In addition ProductsCatalogComponent is "listing" for ANY change in this.props.products.
 * This means you only need to worry updating the redux state. Once the state is updated
 * the component will "detect" the state change and update accordingly.
 * 
 */

export default connect(stateToProps,dispatchToProps)(ProductsCatalogComponent);



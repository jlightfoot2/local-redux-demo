import {defaultProducts, defaultProductIds } from '../res/data/products';
import {combineReducers} from 'redux';
import {arrayPushUnique,arrayRemove} from './_helper';
import {
  UPDATE_PRODUCT,
  ADD_PRODUCT_FAVORITES,
  REMOVE_PRODUCT_FAVORITES,
  DELETE_PRODUCT
} from '../actions';
 
 /**
  * Below we have 3 reducers "products","productIds","favoriteIds"
  *
  * Whenever actions are dispatched from components as shown in:
  *  <root>/src/containers/ProductsCatalog
  *  the action gets passed through all of the reducers below.
  *
  *  In the reducers below I use a simple switch statement to decide
  *  if the reducer needs to change/repelace the state.
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


const products = (state = defaultProducts, action) => {

/* below is an example of what the state could be for the "products" reducer 
state = { '1': { id: 1, title: 'Toy Car', price: 9.99, description: '' },
               '2': { id: 2, title: 'Doll', price: 19.99, description: '' },
               '3': { id: 3, title: 'RC Helicopter', price: 59.99, description: '' },
               '4': { id: 4, title: 'Coffee Grinder', price: 26.99, description: '' },
               '5': { id: 5,title: 'Rigol Oscilloscope',price: 355.99,description: '' },
               '6': { id: 6, title: 'Beach Towel', price: 19.99, description: '' },
               '7': { id: 7, title: 'Ear Plugs', price: 6.99, description: '' },
               '8': { id: 8, title: 'Desk Lamp', price: 15.99, description: '' },
               '9': { id: 9, title: 'Dune Buggy', price: 12000, description: '' },
               '10': { id: 10, title: 'Gift Card', price: 20, description: '' } } 
               */



  let product = null
  switch (action.type) {
    case UPDATE_PRODUCT:
      product = action.product;
      state[product.id] = product;
      state = {...state,[product.id]: product};
      break;
    case DELETE_PRODUCT:
      delete state[action.id];
      state = {...state};
      break;
  }
  return state;
}

const productIds = (state = defaultProductIds,action) => {
/* below is an example of what the state could be for the "productIds" reducer 
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 
*/
  let product = null;
  switch (action.type) {
    case UPDATE_PRODUCT:
      product = action.product;
      state = arrayPushUnique(product.id,state);
      break;
    case DELETE_PRODUCT:
      state = arrayRemove(action.id,state);
      break;
  }
  return state;
}

const favoriteIds = (state = [],action) => {
/* below is an example of what the state could be for the "favoriteIds" reducer 
[ 10, 3, 6 ] 
*/
  switch (action.type) {
    case ADD_PRODUCT_FAVORITES:
      state = arrayPushUnique(action.id,state);
      break;
    case REMOVE_PRODUCT_FAVORITES:
      state = arrayRemove(action.id,state);
      break;
    case DELETE_PRODUCT:
      state = arrayRemove(action.id,state);
      break;
  }
  return state;
}


const reducer = combineReducers({
  products,
  productIds,
  favoriteIds
})

export default reducer;


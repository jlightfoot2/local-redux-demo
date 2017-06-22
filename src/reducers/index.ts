import {defaultProducts, defaultProductIds } from '../res/data/products';
import {combineReducers} from 'redux';
import {arrayPushUnique,arrayRemove} from './_helper';
import {
  UPDATE_PRODUCT,
  ADD_PRODUCT_FAVORITES,
  REMOVE_PRODUCT_FAVORITES,
  DELETE_PRODUCT
} from '../actions';
 
const products = (state = defaultProducts, action) => {
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


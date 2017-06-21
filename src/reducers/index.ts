import {makeProduct, defaultProducts, defaultProductIds } from '../res/data/products';
import {combineReducers} from 'redux';
import {UPDATE_PRODUCT} from '../actions';
import {arrayPushUnique} from './_helper';
 
const products = (state = defaultProducts, action) => {
  let product = null
  switch (action.type) {
    case UPDATE_PRODUCT:
      product = action.product;
      state[product.id] = product;
      state = {...state,[product.id]: product};
      break;
    default:
      // code...
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
    default:
      // code...
      break;
  }
  return state;
}


const reducer = combineReducers({
  products,
  productIds
})

export default reducer;


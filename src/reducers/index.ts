import {makeProduct, defaultProducts, defaultProductIds } from '../res/data/products';
import {combineReducers} from 'redux';
 
const products = (state = defaultProducts,action) => {
  switch (action.type) {
    case "value":
      // code...
      break;
    
    default:
      // code...
      break;
  }
  return state;
}

const productIds = (state = defaultProductIds,action) => {
  switch (action.type) {
    case "value":
      // code...
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


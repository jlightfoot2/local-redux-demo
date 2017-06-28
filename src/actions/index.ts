import {ProductInterface} from '../res/data/products';
import {nextId} from './_helper';
export const UPDATE_PRODUCT = 'T2.UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'T2.DELETE_PRODUCT';
export const ADD_PRODUCT_FAVORITES = 'T2.ADD_PRODUCT_FAVORITES';
export const REMOVE_PRODUCT_FAVORITES = 'T2.REMOVE_PRODUCT_FAVORITES';

/**
 * updateProduct
 *
 * This is a typical redux action. It is simply a function that 
 * returns an object with a "type" property and 0 or more payload properties
 *
 * Typically React components will call these function and send the resulting
 * action object to the reducer via the dispatch method.
 * 
 */

export const updateProduct = (product:ProductInterface) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}



export const deleteProduct = (id:number) => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

export const addProductFavorites = (id:number) => {
  return {
    type: ADD_PRODUCT_FAVORITES,
    id
  }
}

export const removeProductFavorites = (id:number) => {
  return {
    type: REMOVE_PRODUCT_FAVORITES,
    id
  }
}

/**
 * saveProduct
 *
 * This is a "special" action called a "thunk" as you 
 * can see it doesn't return an action object but instead 
 * returns a function.
 *
 * To use thunks with redux you must install the "redux-thunk" module
 * @see https://github.com/gaearon/redux-thunk
 */

export const saveProduct = (product:ProductInterface) => {
  return (dispatch,getState) => { 
    if(product.id === 0){
      product.id = nextId(getState().productIds);
    }
    dispatch(updateProduct(product));
  }
}


import {ProductInterface} from '../res/data/products';
import {nextId} from './_helper';
export const UPDATE_PRODUCT = 'T2.UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'T2.DELETE_PRODUCT';


export const updateProduct = (product:ProductInterface) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}


export const saveProduct = (product:ProductInterface) => {
  return (dispatch,getState) => {
    if(product.id === 0){
      product.id = nextId(getState().productIds);
    }
    dispatch(updateProduct(product));
  }
}

export const deleteProduct = (id:number) => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}
import {connect} from 'react-redux';
import EditProductComponent from '../components/EditProduct'
import {makeProduct, ProductInterface} from '../res/data/products';
import {saveProduct} from '../actions';

const stateToProps = (state,ownProps) => {
  console.log(ownProps);
  return {
    product: makeProduct(0,'',0),
    realtime: ownProps.realtime
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    editProduct: (product:  ProductInterface) => {
      dispatch(saveProduct(product));
    }
  }
}

export default connect(stateToProps,dispatchToProps)(EditProductComponent);
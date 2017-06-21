import {connect} from 'react-redux';
import EditProductComponent from '../components/EditProduct'
import {makeProduct, ProductInterface} from '../res/data/products';

const stateToProps = (state,ownProps) => {
  console.log(ownProps);
  return {
    product: typeof ownProps['id'] !== 'undefined' ? state.products[ownProps.id] : undefined,
    realtime: ownProps.realtime
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    editProduct: (product:  ProductInterface) => {
      console.log(product);
    }
  }
}

export default connect(stateToProps,dispatchToProps)(EditProductComponent);
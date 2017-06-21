import {connect} from 'react-redux';
import ProductsComponent from '../components/Products'




const stateToProps = (state,ownProps) => {
  return {
    products: state.productIds.map(pid => state.products[pid])
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {

  }
}

export default connect(stateToProps,dispatchToProps)(ProductsComponent);
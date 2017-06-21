import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface BasicProduct {
  id: number;
  title: string;
  description: string;
  price:number;
}

export interface Props {
  product: BasicProduct
  editProduct(product: BasicProduct): void;
  realtime?: boolean;
}

export interface State {
  product: BasicProduct
}

export default class EditProduct extends React.Component<Props, State>{


  public static defaultProps: Partial<Props> = {
     realtime: false
  }


  constructor(props){
    super(props);
    this.state = {
      product: this.props.product
    }
  }

  handleTextChange = (fieldName) => {
    const {editProduct,realtime} = this.props;
    return (event) => {
      const fieldValue = event.target.value;
      const product = {...this.state.product, [fieldName]: fieldValue};
      if(this.canUpdateRealTime()){
        editProduct(product);
      } else {
        this.setState({
          product: product
        })
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {editProduct} = this.props;
    editProduct(this.state.product);
    this.setState({
      product: this.props.product
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.canUpdateRealTime()){
      this.setState({
        product: nextProps.product
      });
    }
  }

  canUpdateRealTime = (): boolean => {
    const {realtime,product} = this.props;
    return realtime && product.id > 0;
  }

  render(){
    const {realtime} = this.props;
    const {product} = this.state;
    console.log(product);
    const productTitle = product.id ? 'Edit Product' : 'Add Product';
    return <div>
             <h2>{productTitle}</h2>
             <form onSubmit={this.handleSubmit}>

               <div>
                 <label>
                   Title <br />
                   <input type="text" onChange={this.handleTextChange('title')} value={product.title} />
                 </label>
               </div>

               <div>
                 {!this.canUpdateRealTime() && <input type="submit" value="Submit" />}
               </div>

             </form>
          </div>;
  }
}
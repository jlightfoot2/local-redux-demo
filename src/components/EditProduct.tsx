import * as React from 'react';

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
    return (event) => {
      const fieldValue = event.target.value;
      const product = {...this.state.product, [fieldName]: fieldValue};
      this.handleProductUpdate(product);
    }
  }



  handleProductUpdate = (updatedProduct: BasicProduct) => {
    const {editProduct} = this.props;
    if(this.canUpdateRealTime()){
      editProduct(updatedProduct);
    } else {
      this.setState({
        product: updatedProduct
      });
    }
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const {editProduct} = this.props;
    editProduct(this.state.product);
    if(!this.props.product.id){ //if we are submitting a new product then reset
      this.setState({
        product: this.props.product
      })
    }
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
    const {product} = this.state;
    const productTitle = product.id ? product.title : 'Add Product';
    return <div style={{maxWidth: 300,border: '1px solid black',backgroundColor: 'white', padding: 5, margin: 5}} >
             <h2>{productTitle}</h2>
             <form onSubmit={this.handleSubmit}>

               <div>
                 <label>
                   Title <br />
                   <input type="text" onChange={this.handleTextChange('title')} value={product.title} />
                 </label>
               </div>



               <div>
                 <label>
                   Price <br />
                   <input type="text" onChange={this.handleTextChange('price')} value={product.price} />
                 </label>
               </div>

               <div>
                 <label>
                   Description <br />
                   <input type="text" onChange={this.handleTextChange('description')} value={product.description} />
                 </label>
               </div>

               <div style={{padding: 10}}>
                 <div>
                   {!this.canUpdateRealTime() && <input type="submit" value="Submit" />}
                 </div>
                 <div>
                   {this.props.children}
                 </div>
               </div>
             </form>
          </div>;
  }
}
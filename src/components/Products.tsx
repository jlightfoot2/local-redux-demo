import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditProductContainer from '../containers/EditProduct';
export interface Props {
  products:{id: number, title: string}[]
}

export interface State {
  
}

export default class Dashboard extends React.Component<Props, State>{
  constructor(props){
    super(props);
  }
  
  render(){
    const {products} = this.props;
    return <div>
              <h1>Products List</h1>

              {products.map(product => {
                return <div key={product.id}>{product.title}</div>
              })}

              <EditProductContainer realtime={true} />
           </div>;
  }
}
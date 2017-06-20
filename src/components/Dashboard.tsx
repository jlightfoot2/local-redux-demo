import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface Props {

}

export interface State {
  
}

export default class Dashboard extends React.Component<Props, State>{
  componentDidMount(){
    /*
    (require as any).ensure([],(require) => {
      require('d3');
    }); */
  }
  render(){

    return <div>Dash Page</div>;
  }
}
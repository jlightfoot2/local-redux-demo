import * as React from 'react';

export interface Props {

}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{

  render(){

    return <div>
      <h2>Reduc Demo</h2>
      <h3>Modules</h3>
      <div>react</div>
      <div>redux</div>
      <div>react-redux</div>
      <div>react-router V4</div>
    </div>;
  }
}
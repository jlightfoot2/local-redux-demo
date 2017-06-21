import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
export interface Props {
  leftIcon: JSX.Element
}

export interface State {
  
}

export default class AppTheme extends React.Component<Props, State>{

  render(){
    const {leftIcon} = this.props;
    return <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
              <AppBar title="T2 Store" iconElementLeft={leftIcon} />
              {this.props.children}

            </div>
    </MuiThemeProvider>;

  }
}
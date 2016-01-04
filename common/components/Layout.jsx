'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const { Component } = React;

getMuiTheme();

interface IProps {
  children?: React.ReactNode;
  title: string;
  open?: boolean;
}

interface IStates {
  open?: boolean;
}

export default class Layout extends Component<IProps, IStates> {
  state = {
    open: false
  }

  constructor(props){
    super(props);
    // this.setState({open: this.props.open ? this.props.open : false});
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(){
    const newValue = !this.state.open;
    this.setState({
      open: newValue
    })
  }

  render(): JSX.Element {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={`page ${this.state.open ? 'nav-open' : 'nav-close'}`}>
        <div className="main-container">
          {this.props.children}
        </div>
        <div className="row">
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

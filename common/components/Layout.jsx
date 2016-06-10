'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const { Component } = React;

interface IProps {
  children?: React.ReactNode;
  title: string;
  open?: boolean;
}

interface IStates {
  open?: boolean;
}

const darkMuiTheme = getMuiTheme();

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
      <MuiThemeProvider muiTheme={darkMuiTheme}>
      <div className={`page ${this.state.open ? 'nav-open' : 'nav-close'}`}>
      <h1>{this.props.title}</h1>
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

'use strict';

import * as React from 'react';
import {Toolbar, ToolbarGroup, TextField} from 'material-ui';
import {IconMenu, IconButton, FontIcon, MenuItem, FlatButton, LeftNav} from 'material-ui';
const { Component } = React;

interface IProps {
  children?: React.ReactNode;
  title: string;
  open?: boolean;
}

interface IStates {
  open?: boolean;
}

export default class Layout extends Component<IProps, IStates> {
  state= {
    open: false
  }

  constructor(props){
    super(props);
    // this.setState({open: this.props.open ? this.props.open : false});
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(){
    console.log('handleNav');
    const newValue = !this.state.open;
    this.setState({
      open: newValue
    })
  }

  render(): JSX.Element {
    return (
      <div className={`page ${this.state.open ? 'nav-open' : 'nav-close'}`}>
        <LeftNav open={this.state.open}>
          <MenuItem onTouchTap={this.handleNav} index={1}>Menu Item</MenuItem>
          <MenuItem href="/services" index={2}>Menu Item 2</MenuItem>
        </LeftNav>
        <Toolbar className="main-toolbar">
          <ToolbarGroup className="brand-title toolbar-group" firstChild={true} float="left">
            <IconButton onClick={this.handleNav} iconClassName="icon-menu" />
          </ToolbarGroup>
          <ToolbarGroup className="brand-title toolbar-group" float="left">
            <h2>Titesnonce</h2>
          </ToolbarGroup>
          <ToolbarGroup  float="left" className="toolbar-group">
            <TextField hintText="recherche" className="seach"/>
          </ToolbarGroup>
          <ToolbarGroup  float="left" className="toolbar-group">
            <IconButton iconClassName="icon-search" />
          </ToolbarGroup>
          <ToolbarGroup float="right" className="toolbar-group">
            <IconMenu
              iconButtonElement= {
                <IconButton iconClassName="icon-person" />
              }
              targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem index={1} href="/logout" primaryText="Sign out" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        <div className="main-container">
          {this.props.children}
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}

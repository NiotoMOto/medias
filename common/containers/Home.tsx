'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { id } from '../services/util';
import {Paper} from 'material-ui';

import Layout from '../components/Layout';

const { Component } = React;

interface IProps {
  cheers: string;
}

interface IStates {
  textFilter: string;
}

@connect(id)
export default class Home extends Component<IProps, IStates> {
  elements: Array<any>;
  constructor(){
    super();
  }

  onchangeFilter(search) {
    console.log(search);
  }

  render(): JSX.Element {
    return (
      <Layout open={true} title="ok">
        <div className="row">
          <Paper className="col-sm-12 cover-bg" />
        </div>
        <div className="row showcase-list">
          <Paper className="showcase-item col-md-offset-2 col-md-8">
            <div className="shocase-bg col-sm-12 col-md-4"></div>
            <div className="col-sm-12 col-md-8 showcase-text">
              <h4>Des services par des particuliers pour des particuliers</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Paper>
          <Paper className="showcase-item col-md-offset-2 col-md-8">
            <div className="shocase-bg col-sm-12 col-md-4"></div>
            <div className="shocase-bg col-sm-12 col-md-4"></div>
            <div className="shocase-bg col-sm-12 col-md-4"></div>
          </Paper>

          <Paper className="showcase-item col-md-offset-2 col-md-8">
            <div className="shocase-bg col-sm-12 col-md-4"></div>
            <div className="shocase-text col-sm-12 col-md-4">
              <h4>Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ?
              </p>
            </div>
            <div className="shocase-bg col-sm-12 col-md-4"></div>
          </Paper>
        </div>
      </Layout>
    );
  }
}

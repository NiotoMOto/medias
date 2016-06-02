'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { id } from '../services/util';
import RaisedButton from 'material-ui/RaisedButton';

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
        <div className="row showcase-list">
          <div className="showcase-item col-md-offset-2 col-md-8">
            <input type="file" />
          </div>

          <div className="showcase-item col-md-offset-2 col-md-8">
            <RaisedButton label="Default" />
          </div>
        </div>
      </Layout>
    );
  }
}

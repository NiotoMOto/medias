'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { id } from '../services/util';
import RaisedButton from 'material-ui/RaisedButton';
import {Table} from '../components/commons';
import Layout from '../components/Layout';

const { Component } = React;

interface IProps {
  products: Array;
}

interface IStates {
  textFilter: string;
}

@connect(id)
export default class Home extends Component<IProps, IStates> {
  elements: Array<any>;
  constructor(props){
    super(props);
  }

  onchangeFilter(search) {
    console.log(search);
  }

  render(): JSX.Element {
    return (
      <Layout open={true} title="ok">
        <Table
          columns={[
            { name: 'name', title: 'Nom', width: '100%' },
          ]}
          defaultSort="name"
          totalCount={1}
        >
          {this.props.products.map((p) => {
            <tr key={p.id}>
              <td>{p.name}</td>
            </tr>
          })}
        </Table>
      </Layout>
    );
  }
}

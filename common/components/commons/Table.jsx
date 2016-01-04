'use strict';

import React, { Component, PropTypes } from 'react';

import Pagination from './Pagination';
import Icon from './Icon';

export default class Table extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    defaultPage: PropTypes.number,
    defaultPageCount: PropTypes.number,
    defaultSort: PropTypes.string,
    handleFetchTable: PropTypes.func.isRequired,
    noHeader: PropTypes.bool,
    totalCount: PropTypes.number,
  };

  static defaultProps = {
    defaultPage: 1,
    defaultPageCount: 25,
    defaultSort: '',
    noHeader: false,
  };

  state = {
    page: this.props.defaultPage,
    pageCount: this.props.defaultPageCount,
    sort: this.props.defaultSort,
  };

  updateOrder(sort) {
    this.setState({ sort });
    this.props.handleFetchTable(this.state.page, this.state.pageCount, sort);
  }

  handleOrderChange(name) {
    this.updateOrder(this.state.sort === `-${name}` ? name : `-${name}`);
  }

  handlePageChange(page, pageCount) {
    this.setState({ page, pageCount });
    this.props.handleFetchTable(page, pageCount, this.state.sort);
  }

  render() {
    const columns = this.props.columns.map((column, id) => {
      if (column.sortable === true) {
        let sortType = 'sort';

        switch (this.state.sort) {
          case column.name : sortType = 'sort-asc'; break;
          case `-${column.name}`: sortType = 'sort-desc'; break;
        }

        return (
          <th
            className="sortable"
            key={id}
            onClick={this.handleOrderChange.bind(this, column.name)}
            width={column.width}
          >
            <span>{column.title}</span>
            <Icon
              className={`${sortType === 'sort' ? 'sorted' : ''}`}
              type={sortType}
            />
          </th>
        );
      }
      return (
        <th className={column.name === 'actions' ? 'actions' : ''} key={id} width={column.width}>
          <span>{column.title}</span>
        </th>
      );
    });

    return (
      <div>
        <table className="table table-hover">
          {this.props.noHeader ? null : (
            <thead>
              <tr>{columns}</tr>
            </thead>
          )}
          <tbody>
            {this.props.children}
          </tbody>
        </table>

        <Pagination
          forcedTotalCount={this.props.totalCount}
          handlePageChange={::this.handlePageChange}
          options={this.props.options}
          page={this.state.page}
          pageCount={this.state.pageCount}
        />
      </div>
    );
  }
}

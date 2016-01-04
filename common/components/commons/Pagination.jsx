'use strict';

import React, { Component, PropTypes } from 'react';
import { Pagination } from 'react-bootstrap';

export default class PaginationAdvanced extends Component {

  static propTypes = {
    handlePageChange: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired,
    pageCount: PropTypes.number,
    page: PropTypes.number,
  };

  static defaultProps = {
    pageCount: 25,
    page: 1,
  };

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.selectPageCount = this.selectPageCount.bind(this);
  }

  handleSelect(e, selectedEvent) {
    this.props.handlePageChange(selectedEvent.eventKey, this.props.pageCount);
  }

  selectPageCount(e) {
    this.props.handlePageChange(this.props.page, +e.target.value);
  }

  render() {
    return (
      <div className="text-center form-inline">
        <select
          className="form-control pull-right"
          onChange={this.selectPageCount}
          value={this.props.pageCount}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <Pagination
          activePage={this.props.page}
          ellipsis
          first
          items={~~((this.props.totalCount - 1) / this.props.pageCount) + 1}
          last
          maxButtons={8}
          next
          onSelect={this.handleSelect}
          prev
          style={{ margin: 0 }}
        />
      </div>
    );
  }
}

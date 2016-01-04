'use strict';

import React, { Component, PropTypes } from 'react';
import { range } from '../../services/util/number';

export default class Icon extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    fixed: PropTypes.bool,
    rotation: PropTypes.number,
    size: PropTypes.oneOf(range(1, 6)),
  };

  render() {
    const { className, color, fixed, rotation, size, type, style = {}, ...otherProps } = this.props;
    const classNames = ['fa', `fa-${type}`];
    const styles = Object.assign({}, style, {
      color,
      transform: rotation ? `rotate(${rotation}deg)` : rotation,
    });

    if (size) {
      classNames.push(size === 1 ? 'fa-lg' : `fa-${size}x`);
    }

    if (fixed) {
      classNames.push('fa-fw');
    }

    if (className) {
      classNames.push(className);
    }

    return (
      <i
        className={classNames.join(' ')}
        style={styles}
        {...otherProps}
      />
    );
  }
}

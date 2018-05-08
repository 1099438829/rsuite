// @flow

import * as React from 'react';
import classNames from 'classnames';

import { defaultProps, prefix } from './utils/index';

type Props = {
  className?: string,
  fluid?: boolean,
  classPrefix: string,
  componentClass: React.ElementType
};

class Grid extends React.Component<Props> {
  render() {
    const { fluid, componentClass: Component, className, classPrefix, ...props } = this.props;
    const addPrefix = prefix(classPrefix);
    const clesses = classNames(fluid ? addPrefix('fluid') : classPrefix, className);
    return <Component {...props} className={clesses} />;
  }
}

export default defaultProps({
  componentClass: 'div',
  classPrefix: 'grid-container'
})(Grid);

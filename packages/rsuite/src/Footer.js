// @flow

import * as React from 'react';
import classNames from 'classnames';
import setDisplayName from 'recompose/setDisplayName';
import { defaultProps } from './utils/index';

type Props = {
  className?: string,
  classPrefix?: string
};

class Footer extends React.Component<Props> {
  render() {
    const { className, classPrefix, ...props } = this.props;
    const classes = classNames(classPrefix, className);

    return <div {...props} className={classes} />;
  }
}

export default setDisplayName('Footer')(
  defaultProps({
    classPrefix: 'footer'
  })(Footer)
);

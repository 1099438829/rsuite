import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  inline: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  inputRef: PropTypes.func,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any,   // eslint-disable-line react/forbid-prop-types
};

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.checked !== this.props.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  updateCheckedState(checked, callback) {
    this.setState({ checked }, callback);
  }

  handleChange(event) {
    const { value, disabled, onChange } = this.props;
    const target = event.target;

    if (disabled) {
      return;
    }

    this.setState({ checked: target.checked }, () => {
      const nextValue = _.isUndefined(value) ? target.checked : value;
      onChange && onChange(nextValue, event);
    });

  }
  render() {

    const {
      inline,
      title,
      name,
      id,
      className,
      children,
      disabled,
      style,
      inputRef,
      defaultValue,
      value
    } = this.props;

    const { checked } = this.state;
    const classes = classNames({
      'radio-inline': inline
    }, className);

    const radioClasses = classNames('radio', {
      disabled
    });

    const input = (
      <span className={classNames('radio-wrapper', { checked })}>
        <input
          id={id}
          type="radio"
          ref={inputRef}
          value={value}
          defaultValue={defaultValue}
          name={name}
          disabled={disabled}
          onChange={this.handleChange}
        />
      </span>
    );

    return (
      <div
        className={classes}
        style={style}
      >
        <div
          className={radioClasses}
          role="button"
        >
          <label title={title}>
            {input}
            {children}
          </label>
        </div>
      </div>
    );
  }

}

Radio.displayName = 'Radio';
Radio.propTypes = propTypes;

export default Radio;

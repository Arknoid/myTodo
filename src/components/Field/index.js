/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Styles et assets
import './field.sass';

/**
 * Code
 */
class Field extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password']),
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
    type: 'text',
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    const { onInputChange } = this.props;

    onInputChange(name, value);
  }

  render() {
    const {
      name, type, placeholder, value,
    } = this.props;

    return (
      <div className="field">
        <input
          className="field-input"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default Field;

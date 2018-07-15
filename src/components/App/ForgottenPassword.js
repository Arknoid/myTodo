/**
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local Import
 */
import Field from 'src/components/Field';

/**
 * Code
 */
const Password = ({
  data,
  onChangeView,
  emailValue,
  onChangeField,
}) => (
  <div id="password">
    <a
      className="app-link app-link--back"
      onClick={onChangeView('login')}
    >
      {data.link}
    </a>
    <h1 className="app-title">{data.title}</h1>
    <div className="app-desc">{data.desc}</div>
    <form className="form">
      <Field
        value={emailValue}
        placeholder="Adresse e-mail"
        type="email"
        name="email"
        onInputChange={onChangeField}
      />
      <button
        className="form-submit"
      >
        {data.submit}
      </button>
    </form>
  </div>
);

Password.propTypes = {
  data: PropTypes.object.isRequired,
  onChangeView: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Password;

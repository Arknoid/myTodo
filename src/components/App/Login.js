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
const Login = ({
  data,
  emailValue,
  passwordValue,
  onChangeField,
  onSubmitLogin,
}) => (
  <div id="login">
    <h1 className="app-title">{data.title}</h1>
    <div className="app-desc">{data.desc}</div>
    <form
      className="form"
      onSubmit={onSubmitLogin}
    >
      <Field
        value={emailValue}
        placeholder="Adresse e-mail"
        type="email"
        name="email"
        onInputChange={onChangeField}
      />
      <Field
        value={passwordValue}
        placeholder="Mot de passe"
        type="password"
        name="password"
        onInputChange={onChangeField}
      />
      <button className="form-submit form-submit--login">
        {data.submit}
      </button>
    </form>
  </div>
);

Login.propTypes = {
  data: PropTypes.object.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSubmitLogin: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Login;

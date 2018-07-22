/**
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * Local Import
 */
import Field from 'src/components/Field';

/**
 * Code
 */
class Login extends React.Component {
  static propTypes = {
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    onChangeField: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  handleChange = (name, value) => {
    const { onChangeField } = this.props;
    onChangeField(name, value);
  }

  handleLogin = (evt) => {
    evt.preventDefault();
    const { emailValue, passwordValue, onLogin } = this.props;
    axios.post('http://localhost:3000/login', {
      emailValue,
      passwordValue,
    })
      .then((res) => {
        // Ajout du token d'identification
        localStorage.setItem('token', res.data);
        onLogin();
      })
      .catch(() => {
        // this.setState({
        //   message: {
        //     type: 'error',
        //     content: 'Identifian ou mot de pass incorect',
        //   },
      });
  };

  render() {
    const { emailValue, passwordValue } = this.props;
    return (
      <div id="login">
        <h1 className="app-title">Entrez vos identifians</h1>
        <form
          className="form"
          onSubmit={this.handleLogin}
        >
          <Field
            value={emailValue}
            placeholder="Adresse e-mail"
            type="email"
            name="email"
            onInputChange={this.handleChange}
          />
          <Field
            value={passwordValue}
            placeholder="Mot de passe"
            type="password"
            name="password"
            onInputChange={this.handleChange}
          />
          <button className="form-submit form-submit--login">
            Connexion
          </button>
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
export default Login;

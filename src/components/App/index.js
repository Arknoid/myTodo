/**
 * Npm Import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local Import
 */
// Styles
import './app.sass';
// data
import textData from 'src/data/textdata';
// Components
import Todo from 'src/components/Todo';
import Login from './Login';

/**
 * Code
 */
class App extends React.Component {
  /**
   * State
   */
  state = {
    email: '',
    password: '',
    message: false,
    token: localStorage.getItem('token'),
  }

  /**
   * Actions
   */
  handleLogin = (evt) => {
    evt.preventDefault();

    // décomposer le state
    const { email, password } = this.state;

    axios.post('http://localhost:3000/login', {
      email,
      password,
    })
      .then((res) => {
        // Ajout du token d'identification
        localStorage.setItem('token', res.data);
        this.setState({
          token: true,
        });
      })
      .catch(() => {
        this.setState({
          message: {
            type: 'error',
            content: 'Identifian ou mot de pass incorect',
          },
        });
      });
  }

  handleLogout = () => {
    // Suppresion du token d'identification
    localStorage.removeItem('token');
    this.setState({
      token: false,
    });
  }

  changeInputValue = (field, value) => {
    // Modification du state
    this.setState({
      [field]: value,
    });
  }

  // Décode le token dans le localStorage
  parseJwt = () => {
    const tokenFromStorage = localStorage.getItem('token');
    // console.log('parseJwt tokenFromStorage', tokenFromStorage);
    if (tokenFromStorage) {
      const base64Payload = tokenFromStorage.split('.')[1];
      return JSON.parse(window.atob(base64Payload));
    }
    return 'no token to parse';
  }

  /**
   * Rendu
   */
  render() {
    const {
      email, password, message, token,
    } = this.state;

    return (
      <div className="app">
        {message && (
          <div id="message" className={message.type}>
            {message.content}
          </div>
        )}
        {!token && (
          <Login
            onChangeField={this.changeInputValue}
            onChangeView={this.changeView}
            data={textData.login}
            emailValue={email}
            passwordValue={password}
            onSubmitLogin={this.handleLogin}
          />
        )}
        {token && (
          <div>
            <Todo />
            <button className="form-submit form-submit--login" onClick={this.handleLogout}>
              Deconnection
            </button>
          </div>
        )}

      </div>
    );
  }
}


/**
 * Export
 */
export default App;

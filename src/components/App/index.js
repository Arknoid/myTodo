/**
 * Npm Import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local Import
 */
// Styles
import './app.sass';

// Components
import Todo from 'src/components/Todo';
import Login from 'src/containers/Login';

/**
 * Code
 */
class App extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    logged: PropTypes.bool.isRequired,
    onDisconnect: PropTypes.func.isRequired,
    userLogged: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    // Connection de l'utilisateur si possesion d'un Token
    const { userLogged } = this.props;
    if (localStorage.getItem('token') !== null) {
      userLogged();
    }
  }
  /**
   * Actions
   */

  handleLogout = () => {
    const { onDisconnect } = this.props;
    // Suppresion du token d'identification
    localStorage.removeItem('token');
    onDisconnect();
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
      message, logged,
    } = this.props;

    return (
      <div className="app">
        {message && (
          <div id="message" className={message.type}>
            {message.content}
          </div>
        )}
        {!logged && (
          <Login />
        )}
        {logged && (
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

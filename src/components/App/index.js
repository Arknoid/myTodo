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
    view: 'login',
    email: '',
    password: '',
    message: false,
  }

  /**
   * Lifecycle
   */
  // Le composant est construit et rendu
  componentDidMount() {
    // Enregistrement de la vue courante dans l'historique
    this.saveToHistory();
    // Écoute du popstate
    window.addEventListener('popstate', (evt) => {
      console.log(evt.state);
      // setState avec les données présentent dans l'historique
      this.setState(evt.state);
    });
  }

  saveToHistory = () => {
    const { view } = this.state;
    // Ajout à l'historique de changement de vue
    window.history.pushState({ view }, view);
  }

  /**
   * Actions
   */
  handleLogin = (evt) => {
    evt.preventDefault();

    console.log('handleLogin');
    // décomposer le state
    const { email, password } = this.state;

    axios.post('http://localhost:3000/login', {
      email,
      password,
    })
      .then(() => {
        // response.data : prénom de l'utilisateur
        // Modification du state avec la data
        this.setState({
          view: 'logged',
          message: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          message: {
            type: 'error',
            content: 'Désolé, connexion impossible',
          },
        });
      });
  }

  handleLogout = () => {
    console.log('logout');
    this.setState({
      view: 'login',
    });
  }

  changeView = nextView => () => {
    // Je construis un objet avec les modifs que je souhaite
    const view = {
      view: nextView,
    };

    // Modification du state avec la bonne vue
    this.setState(view, () => {
      // Enregistrement de la vue courante dans l'historique
      this.saveToHistory();
    });
  }

  changeInputValue = (field, value) => {
    // Modification du state
    this.setState({
      [field]: value,
    });
  }

  /**
   * Rendu
   */
  render() {
    const {
      view, email, password, message,
    } = this.state;

    return (
      <div className="app">
        {message && (
          <div id="message" className={message.type}>
            {message.content}
          </div>
        )}
        {view === 'login' && (
          <Login
            onChangeField={this.changeInputValue}
            onChangeView={this.changeView}
            data={textData.login}
            emailValue={email}
            passwordValue={password}
            onSubmitLogin={this.handleLogin}
          />
        )}
        {view === 'logged' && (
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

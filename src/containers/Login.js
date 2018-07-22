/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { changePassword, changeEmail, logged } from 'src/store/reducer';

/* === State (données) ===
 * - value de l'input
 *
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  passwordValue: state.passwordInput,
  emailValue: state.emailInput,
});

/* === Actions ===
 * - Changement de l'input
 * - Ajout d'une tache
 *
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  onLogin: () => {
    dispatch(logged());
  },
  onChangeField: (field, value) => {
    // Je dispatch une action : action INPUT_CHANGE en lui passant la value du champ
    // Action fournie par
    // - changeInput(...) => { type: CHANGE_INPUT, input: ...}
    if (field === 'password') {
      dispatch(changePassword(value));
    }
    else if (field === 'email') {
      dispatch(changeEmail(value));
    }
  },

});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

/**
 * Export
 */
export default LoginContainer;

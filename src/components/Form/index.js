/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants

// Styles et assets
import './form.sass';

/**
 * Code
 */
class Form extends React.Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }

  handleSubmit = (evt) => {
    // On empêche le comportement par défaut
    evt.preventDefault();

    // Je décompose les props, je prends ce dont j'ai besoin
    const { onAddTask } = this.props;

    // On execute la prop transmise par App
    onAddTask();
  }

  handleChange = (evt) => {
    // Je pioche ce dont j'ai besoin depuis les props
    const { onInputChange } = this.props;
    // Value provenant du champ
    const { value } = evt.target;
    // J'execute la fonction pour modifier le DOM
    onInputChange(value);
  }

  render() {
    const { inputValue } = this.props;

    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="todo-input"
          placeholder="Ajouter une tâche"
          onChange={this.handleChange}
          value={inputValue}
        />
      </form>
    );
  }
}

// Form.propTypes = {
//   onAddTask: PropTypes.func.isRequired,
// };

// Version Fonction : C'est valable !
// const Form = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     console.log('submit');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="todo-input"
//         placeholder="Ajouter une tâche"
//       />
//     </form>
//   );
// };

/**
 * Export
 */
export default Form;

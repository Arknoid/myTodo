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
import './counter.sass';
/**
 * Code
 */
const Counter = ({ count }) => {
  // Je définis le message
  let message;
  // En fonction de la valeur de count ...
  switch (count) {
    case 0:
      message = 'Aucune tâche';
      break;
    case 1:
      message = `${count} tâche en cours`;
      break;
    default:
      message = `${count} tâches en cours`;
  }

  return (
    <div id="todo-counter">
      {message}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default Counter;

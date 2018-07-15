/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Styles et assets
import './tasks.sass';
// Composants
import Task from './Task';

/**
 * Code
 */
const Tasks = ({ list, actions }) => (
  <ul id="tasks">
    {list.map(task => (
      <Task
        key={task.id}
        // Je vide ici tout le contenu de la tache : task
        {...task}
        // actions={actions} OU {...actions}
        // Les 2 approches sont parfaitement valables
        {...actions}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
/**
 * Export
 */
export default Tasks;

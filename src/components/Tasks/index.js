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
import Task from 'src/containers/Tasks/Task';

/**
 * Code
 */
const Tasks = ({ list }) => (
  <ul id="tasks">
    {list.map(task => (
      <Task
        key={task.id}
        {...task}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default Tasks;

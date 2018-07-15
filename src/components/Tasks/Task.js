/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Trash from 'react-icons/lib/fa/trash-o';
import StarEmpty from 'react-icons/lib/fa/star-o';
import Star from 'react-icons/lib/fa/star';

/**
 * Local import
 */


/**
 * Code
 */
const Task = ({
  id,
  label,
  done,
  fav,
  onTaskCheck,
  onTaskDelete,
  onTaskFav,
}) => {
  // Je génère les classes CSS nécessaires grace à classNames
  // https://github.com/JedWatson/classnames
  const allClassnames = classNames(
    'task',
    {
      'task--done': done,
      'task--fav': fav,
    },
  );

  // Favorite ( composant ) sera soit StarEmpty soit Star
  const Favorite = fav ? Star : StarEmpty;

  return (
    <li className={allClassnames}>
      <input
        type="checkbox"
        checked={done}
        onChange={onTaskCheck(id)}
      />
      <span className="task-label">{label}</span>
      <Trash
        className="task-trash"
        onClick={onTaskDelete(id)}
      />
      <Favorite
        className="task-fav"
        onClick={onTaskFav(id)}
      />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  onTaskCheck: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskFav: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Task;

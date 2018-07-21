/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Tasks from 'src/components/Tasks';
// Selectors
import { getFilteredTasks } from 'src/store/reducer';

// data
const mapStateToProps = state => ({
  list: getFilteredTasks(state.tasks),
});

// Actions
const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);

/**
 * Export
 */
export default TasksContainer;

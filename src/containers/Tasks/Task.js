/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Task from 'src/components/Tasks/Task';

// Action Creators
import { deleteTask, doneTask, favTask } from 'src/store/reducer';

const mapStateToProps = null;

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  onTaskDelete: () => {
    console.log('onTaskDelete', ownProps.id);
    dispatch(deleteTask(ownProps.id));
  },
  onTaskCheck: () => {
    console.log('onTaskCheck', ownProps.id);
    dispatch(doneTask(ownProps.id));
  },
  onTaskFav: () => {
    console.log('onTaskFav', ownProps.id);
    dispatch(favTask(ownProps.id));
  },
});

// Container
const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

/**
 * Export
 */
export default TaskContainer;

/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Counter from 'src/components/Counter';

// Action Creators


// === State (données) ===
const mapStateToProps = state => ({
  count: state.tasks.filter(task => !task.done).length,
});

// === Actions ===
const mapDispatchToProps = {};

// connect(Ce dont j'ai besoin)(Qui en a besoin)
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

/**
 * Export
 */
export default CounterContainer;

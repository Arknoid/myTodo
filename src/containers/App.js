/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators
import { disconnect } from 'src/store/reducer';
// States :
const mapStateToProps = state => ({
  message: state.message,
  logged: state.logged,
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  onDisconnect: () => {
    dispatch(disconnect());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/**
 * Export
 */
export default AppContainer;

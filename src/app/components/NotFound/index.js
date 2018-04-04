
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import NotFound from './NotFound';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: NotFound
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['NotFound'], props);
};

const mapDispatchToProps = (dispatch) => ({
    onMount: () => dispatch(actions.NotFound.onMount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);

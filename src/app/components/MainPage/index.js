
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import MainPage from './MainPage';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: MainPage
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['MainPage'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.MainPage.mount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

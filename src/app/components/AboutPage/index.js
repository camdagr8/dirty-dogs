
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import AboutPage from './AboutPage';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: AboutPage
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['AboutPage'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.AboutPage.mount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

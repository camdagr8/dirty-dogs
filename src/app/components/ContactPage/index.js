
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import ContactPage from './ContactPage';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: ContactPage
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['ContactPage'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.ContactPage.mount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

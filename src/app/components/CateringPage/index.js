
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import CateringPage from './CateringPage';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: CateringPage
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['CateringPage'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.CateringPage.mount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CateringPage);

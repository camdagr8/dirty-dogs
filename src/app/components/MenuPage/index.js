
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import { connect } from 'react-redux';
import { actions } from 'appdir/app';
import MenuPage from './MenuPage';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: MenuPage
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => {
    return Object.assign({}, state['MenuPage'], props);
};

const mapDispatchToProps = (dispatch) => ({
    mount: () => dispatch(actions.MenuPage.mount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);

import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';

export default {
    mount: () => (dispatch, getState) => {
        let state = getState();
        let newState = Object.assign({}, state.MainPage, state.MenuPage);
        return dispatch({type: actionTypes.MENUPAGE_MOUNT, data: newState});
    },
};

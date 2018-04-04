import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';

export default {
    mount: () => (dispatch, getState) => {
        let state = getState();
        let newState = Object.assign({}, state.MainPage, state.AboutPage);
        return dispatch({type: actionTypes.ABOUTPAGE_MOUNT, data: newState});
    },
};

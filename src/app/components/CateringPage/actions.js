import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';

export default {
    mount: (data) => (dispatch, getState) => {
        let state = getState();

        let newState = Object.assign({}, state.MainPage, state.CateringPage);

        return dispatch({type: actionTypes.CATERINGPAGE_MOUNT, data: {...newState, features: undefined}});
    },
};

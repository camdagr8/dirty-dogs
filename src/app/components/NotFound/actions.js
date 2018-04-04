import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';

export default {
    onMount: () => (dispatch, getState) => {
        let state = getState();

        let newState = Object.assign({}, state.MainPage, state.NotFound);

        return dispatch({type: actionTypes.NOTFOUND_MOUNT, data: {...newState, features: undefined}});
    },
};

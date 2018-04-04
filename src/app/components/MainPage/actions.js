import { actionTypes } from 'appdir/app';
import { services } from 'appdir/app';

export default {
    mount: (data) => (dispatch) => {
        return dispatch({type: actionTypes.MAINPAGE_MOUNT, data: data});
    },
};

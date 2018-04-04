import { actionTypes } from 'appdir/app';

export default (state = {}, action) => {

    let newState;

    switch (action.type) {

        case actionTypes.CATERINGPAGE_MOUNT:
            newState = Object.assign({}, state, {...action.data});
            return newState;

        default:
            return state;
    }
};
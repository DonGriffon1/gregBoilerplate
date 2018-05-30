import {TEST_USER} from '../constants/actions';
import Immutable from 'seamless-immutable';

const DEFAULT_STATE = Immutable({
    user: 'Greg'
});

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case TEST_USER:
            return state.set('user', action.payload);
    }
    return state;
}

export default userReducer;
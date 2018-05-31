import {
    put, takeLatest,
} from 'redux-saga/effects';
import {
    TEST_USER,
} from '../constants/actions';

function* console() {
    yield put({
        type: TEST_USER,
        payload: 'test',
    });
}

function* mySaga() {
    yield takeLatest("SAGA_ACTION", console);
}

export default mySaga;
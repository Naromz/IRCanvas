import {call,put,takeLatest }  from 'redux-saga/effects'
import {GlobalActions} from '../Actions/globalActions';
import Axios from 'axios';






function* testSaga(action) {
    try {
        const response = yield call(Axios.get, `http://localhost:3005/getRemoteTypes`);

        yield put({
            type: GlobalActions.TESTSAGA.SUCCESS,
            payload: response.data
        })

    } catch (e) {
        yield put({
            type: GlobalActions.TESTSAGA.FAIL,
            payload: {
                Err: e.message
            }
        });
    }
}

function* mySaga() {
   // yield takeLatest(AppActionTypes.LOAD_CONFIG_REQUEST, loadConfigFile);
    yield takeLatest(GlobalActions.TESTSAGA.START, testSaga);
}

export default mySaga;
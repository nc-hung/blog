
import { call, put, takeLatest } from 'redux-saga/effects';
import postApi from "../api/post.js";
import { GET_POST, GET_POST_SUCCESS } from './POST/post.types';

function* getListPostSaga(action) {
    try {
        const data = yield call(postApi.getPosts);
        yield put({ type: GET_POST_SUCCESS, payload: data.data });
    } catch (error) {
        //handle error
    }
}

function* mySaga() {
    yield takeLatest(GET_POST, getListPostSaga);
}


export default mySaga;


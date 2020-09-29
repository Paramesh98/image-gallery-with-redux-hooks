import { all } from 'redux-saga/effects';
import ImageSaga from './ImageSaga';
import StatSaga from './StatsSaga';

export default function* rootSaga() {
    yield all([ImageSaga(), StatSaga()]);
}

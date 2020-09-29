import { takeEvery } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';
import { fetchImages } from '../api';
import { IMAGES } from '../constants';
import { setImages, setError } from '../actions';

const getPage = state => state.nextPage;
function* handleImageLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}
function* watchImageLoad() {
    yield takeEvery(IMAGES.LOAD, handleImageLoad);
}

export default watchImageLoad;

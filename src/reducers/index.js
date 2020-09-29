import { combineReducers } from 'redux';
import ErrorReducer from './ErrorReducer';
import ImageReducers from './ImageReducers';
import LoadingReducer from './LoadingReducer';
import PageReducer from './PageReducer';
import StatsReducer from './StatsReducer';

const rootReducer = combineReducers({
    isLoading: LoadingReducer,
    images: ImageReducers,
    error: ErrorReducer,
    nextPage: PageReducer,
    imageStats: StatsReducer,
});

export default rootReducer;

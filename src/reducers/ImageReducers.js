import { IMAGES } from '../constants';

const ImageReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        const data = [].concat.apply([], [...state, action.images]);
        // console.log(data);
        return data;
    }
    return state;
};
export default ImageReducer;

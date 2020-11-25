import { fetch } from './csrf'

const RECEIVE_CATEGORY ='session/receiveCategory';
const POST_CATEGORY = 'session/postCategory';

const postCategory = (category) => {
    return {
        type: POST_CATEGORY,
        payload: category,
    };
};

export const receiveCategory = () => async dispatch => {
    const res = await fetch('/api/category');
    dispatch(postCategory(res.data));
};

export const categoryReducer = ( state = { categories: [] }, action) => {
    let newState;
    switch (action.type) {
        case POST_CATEGORY:
            newState = Object.assign({}, state);
            newState.categories = [...action.payload];
            return newState;
        default:
            return state;
    }
}

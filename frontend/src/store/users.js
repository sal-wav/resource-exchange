import { fetch } from './csrf'

const POST_USER = 'session/postUser';

export const postUser = (user) => {
    return {
        type: POST_USER,
        payload: user,
    };
};

export const receiveUsers = () => async dispatch => {
    const res = await fetch('/api/users/');
    dispatch(postUser(res.data));
};

export const usersReducer = (state = { users: [] }, action) => {
    let newState;
    switch (action.type) {
        case POST_USER:
            newState = Object.assign({}, state);
            newState.users = [...action.payload];
            return newState;
        default:
            return state;
    }
}

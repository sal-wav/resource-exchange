import { fetch } from './csrf'

const RECEIVE_FUND ='session/receiveFund';
const POST_FUND = 'session/postFund';
const DELETE_FUND = 'session/deleteFund';

const postFund = (fund) => {
    return {
        type: POST_FUND,
        payload: fund,
    };
};

const deleteFund = () => {
    return {
        type: DELETE_FUND,
    };
};

export const receiveFund = () => async dispatch => {
    const res = await fetch('/api/fund');
    dispatch(postFund(res.data));
};

export const fundReducer = ( state = { funds: [] }, action) => {
    let newState;
    switch (action.type) {
        case POST_FUND:
            newState = Object.assign({}, state);
            newState.funds = [...action.payload];
            return newState;
        default:
            return state;
    }
}

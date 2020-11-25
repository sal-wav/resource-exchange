import { fetch } from './csrf'

const RECEIVE_FUND ='session/receiveFund';
const POST_FUND = 'session/postFund';
const DELETE_FUND = 'session/deleteFund';
const ADD_FUND = 'session/addFund';

export const addFund = (fund) => {
    return {
        type: POST_FUND,
        payload: fund,
    }
}

export const postFund = (fund) => {
    return {
        type: POST_FUND,
        payload: fund,
    };
};

export const deleteFund = () => {
    return {
        type: DELETE_FUND,
    };
};

export const receiveFund = () => async dispatch => {
    const res = await fetch('/api/fund');
    dispatch(postFund(res.data));
};

export const makeFund = (newFund) => async dispatch => {
    const res = await fetch('/api/fund', {
        method: "POST",
        body: JSON.stringify(newFund)
    })
    dispatch(addFund(res.data.fund))
}

export const fundReducer = ( state = { funds: [] }, action) => {
    let newState;
    switch (action.type) {
        case ADD_FUND:
            newState = Object.assign({}, state);
            newState.funds = [state, action.payload];
        case POST_FUND:
            newState = Object.assign({}, state);
            newState.funds = [...action.payload];
            return newState;
        default:
            return state;
    }
}

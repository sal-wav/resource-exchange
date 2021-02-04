import { fetch } from './csrf'

const RECEIVE_FUND ='session/receiveFund';
const POST_FUND = 'session/postFund';
const DELETE_FUND = 'session/deleteFund';
const ADD_FUND = 'session/addFund';

export const addFund = (fund) => {
    // console.log(`fund in addFund: ${fund}`);
    return {
        type: ADD_FUND,
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
    });
    // console.log(`this is res.data: ${JSON.stringify(newFund)}`);
    dispatch(addFund(res.data));
    return res.data;
};

export const fundReducer = (state = { funds: [] }, action) => {
    let newState;
    switch (action.type) {
        case ADD_FUND:
            // console.log(`this is state: ${state}`);
            // console.log(`this is state.funds: ${state.funds}`);
            newState = Object.assign({}, state);
            newState.funds = [state.funds, action.payload];
            return newState;
        case POST_FUND:
            newState = Object.assign({}, state);
            newState.funds = [...action.payload];
            return newState;
        default:
            return state;
    }
}

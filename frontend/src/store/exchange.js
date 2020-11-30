import { fetch } from './csrf'

const POST_EXCHANGE = 'session/postExchange';

export const postExchange = (exchange) => {
    return {
        type: POST_EXCHANGE,
        payload: exchange
    };
};

export const receiveExchanges = () => async dispatch => {
    const res = await fetch('/api/exchange');
    dispatch(postExchange(res.data));
};

export const exchangeReducer = (state = { exchanges: [] }, action) => {
    let newState;
    switch (action.type) {
        case POST_EXCHANGE:
            newState = Object.assign({}, state);
            newState.exchanges = [...action.payload];
            return newState;
        default:
            return state;
    }
}

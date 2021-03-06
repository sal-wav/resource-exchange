import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fundReducer } from './fund';
import sessionReducer from './session';
import { categoryReducer } from './category';
import { usersReducer } from './users';
import { exchangeReducer } from './exchange';

const rootReducer = combineReducers({
    session: sessionReducer,
    fund: fundReducer,
    category: categoryReducer,
    users: usersReducer,
    exchanges: exchangeReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
};

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

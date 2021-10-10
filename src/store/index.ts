import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import currencyReducer from './reducers/currency';

const rootReducer = combineReducers({
  currency: currencyReducer,
});

const middleware =
  process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(applyMiddleware(ReduxThunk))
    : applyMiddleware(ReduxThunk);

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, middleware);

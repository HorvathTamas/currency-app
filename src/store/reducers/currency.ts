import * as actions from '../actions';
import { CurrencyState, CurrencyActionTypes } from '../store.types';
import { setCurrencies } from './utils';

const initialState: CurrencyState = {
  data: null,
  error: null,
  loading: false,
};

const currencyReducer = (state = initialState, action: CurrencyActionTypes): CurrencyState => {
  switch (action.type) {
    case actions.GET_CURRENCIES_STARTED:
      return { ...state, loading: true, error: null };
    case actions.GET_CURRENCIES_SUCCESS:
      return setCurrencies(state, action);
    case actions.GET_CURRENCIES_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default currencyReducer;

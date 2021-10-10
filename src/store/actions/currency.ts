import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import axios from '../../axios/axios-instance';
import { CurrencyResponse } from '../../typings/api';
import * as actions from '../actions';
import { CurrencyActionTypes } from '../store.types';

const getCurrenciesStartedAction = (): CurrencyActionTypes => {
  return {
    type: actions.GET_CURRENCIES_STARTED,
  };
};

export const getCurrenciesSuccessAction = (data: CurrencyResponse): CurrencyActionTypes => {
  return {
    type: actions.GET_CURRENCIES_SUCCESS,
    data,
  };
};

const getCurrenciesFailedAction = (error: AxiosError): CurrencyActionTypes => {
  return {
    type: actions.GET_CURRENCIES_FAILED,
    error,
  };
};

export const getCurrencies = () => (dispatch: Dispatch<CurrencyActionTypes>) => {
  dispatch(getCurrenciesStartedAction());
  axios
    .get<CurrencyResponse>('/c88db14a-3128-4fbd-af74-1371c5bb0343')
    .then((res) => {
      dispatch(getCurrenciesSuccessAction(res.data));
    })
    .catch((error) => {
      dispatch(getCurrenciesFailedAction(error));
    });
};

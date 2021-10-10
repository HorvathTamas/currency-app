import { AxiosError } from 'axios';
import { CurrencyResponse } from '../typings/api';
import * as actions from './actions';

export type GeneralError = AxiosError | null;

export interface CurrencyState {
  data: CurrencyResponse | null;
  loading: boolean;
  error: GeneralError;
}

export interface GetCurrenciesStartedAction {
  type: typeof actions.GET_CURRENCIES_STARTED;
}

export interface GetCurrenciesSuccessAction {
  type: typeof actions.GET_CURRENCIES_SUCCESS;
  data: CurrencyResponse;
}

export interface GetCurrenciesFailedAction {
  type: typeof actions.GET_CURRENCIES_FAILED;
  error: GeneralError;
}

export type CurrencyActionTypes = GetCurrenciesStartedAction | GetCurrenciesSuccessAction | GetCurrenciesFailedAction;

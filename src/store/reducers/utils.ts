import { Fx } from '../../typings/api';
import { CurrencyState, GetCurrenciesSuccessAction } from '../store.types';

const validateString = (text?: string): boolean => {
  if (!text) {
    return false;
  }

  const textTrimmed = text.replace(/\s/g, '');
  return !!textTrimmed.length;
};

const validateFxItems = (item: Fx): boolean => {
  const isFxValid = validateString(item.currency) && validateString(item.nameI18N) && !!item.exchangeRate;
  return isFxValid;
};

export const setCurrencies = (state: CurrencyState, action: GetCurrenciesSuccessAction): CurrencyState => {
  const filteredData = { ...action.data, fx: action.data.fx.filter(validateFxItems) };

  return { ...state, data: filteredData, loading: false };
};

import { createSelector } from 'reselect';
import { RootState } from '..';
import Fuse from 'fuse.js';

const selectCurrencies = (state: RootState) => state.currency;

const makeSelectCurrencies = () => createSelector(selectCurrencies, (substate) => substate.data);

const makeSelectCurrenciesBySearch = (searchParam: string | null) =>
  createSelector(makeSelectCurrencies(), (res) => {
    const options = {
      keys: ['currency', 'nameI18N', 'exchangeRate.buy', 'exchangeRate.middle', 'exchangeRate.sell'],
    };

    if (!res) {
      return null;
    }

    const fuse = new Fuse(res.fx, options);
    if (searchParam) {
      const result = fuse.search(searchParam);
      return result.map((fuseFx) => fuseFx.item);
    }
    return res.fx;
  });

export { makeSelectCurrenciesBySearch };

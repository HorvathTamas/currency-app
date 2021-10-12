import { render, screen } from '@testing-library/react';
import { CurrencyResponse, Fx } from '../../typings/api';
import CurrencyList from './CurrencyList';

describe('CurrencyList component', () => {
  const data: CurrencyResponse = require('../../mocks/fx.json');
  const { fx: currencies, baseCurrency } = data;
  const emptyData: Fx[] = [];
  describe('with data', () => {
    beforeEach(() => render(<CurrencyList currencies={currencies} baseCurrency={baseCurrency} />));
    test('display base currency correctly', () => {
      const baseCurrencyText = screen.queryByTestId('baseCurrency');
      expect(baseCurrencyText).toHaveTextContent(`Base Currency: 1 ${baseCurrency}`);
    });
    test('display result number correctly', () => {
      const resultNumber = screen.queryByTestId('resultNumber');
      expect(resultNumber).toHaveTextContent('Result(s): 13');
    });
    test('display results correctly', () => {
      const currencyItem = screen.queryAllByTestId('currencyItem');
      expect(currencyItem.length).toBe(currencies.length);
    });
  });
  describe('with empty data', () => {
    beforeEach(() => render(<CurrencyList currencies={emptyData} baseCurrency={baseCurrency} />));
    test('display base currency correctly', () => {
      const baseCurrencyText = screen.queryByTestId('baseCurrency');
      expect(baseCurrencyText).toHaveTextContent(`Base Currency: 1 ${baseCurrency}`);
    });
    test('display result number correctly', () => {
      const resultNumber = screen.queryByTestId('resultNumber');
      expect(resultNumber).toHaveTextContent('Result(s): 0');
    });
    test('display results correctly', () => {
      const currencyItem = screen.queryAllByTestId('currencyItem');
      expect(currencyItem.length).toBe(emptyData.length);
    });
  });
});

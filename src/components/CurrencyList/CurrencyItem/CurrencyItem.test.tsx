import { render, screen } from '@testing-library/react';
import { CurrencyResponse } from '../../../typings/api';
import { roundNum } from '../../../utils';
import CurrencyItem from './CurrencyItem';

describe('CurrencyItem component', () => {
  const data: CurrencyResponse = require('../../../mocks/fx.json');
  const currencyItem = data.fx[0];
  const { nameI18N, exchangeRate, currency } = currencyItem;
  beforeEach(() => render(<CurrencyItem currencyItem={currencyItem} />));
  test('renders flag', () => {
    const flagContainer = screen.getByTestId('flagContainer');
    expect(flagContainer).toBeInTheDocument();
  });
  test('renders name', () => {
    const currencyName = screen.getByTestId('currencyName');
    expect(currencyName).toBeInTheDocument();
    expect(currencyName).toHaveTextContent(nameI18N);
  });
  test('renders exchange rate buy', () => {
    const currencyBuy = screen.getByTestId('currencyBuy');
    expect(currencyBuy).toBeInTheDocument();
    expect(currencyBuy).toHaveTextContent(`Buy: ${roundNum(exchangeRate.buy)} ${currency}`);
  });
  test('renders exchange rate mid', () => {
    const currencyMid = screen.getByTestId('currencyMid');
    expect(currencyMid).toBeInTheDocument();
    expect(currencyMid).toHaveTextContent(`Mid: ${roundNum(exchangeRate.middle)} ${currency}`);
  });
  test('renders exchange rate sell', () => {
    const currencySell = screen.getByTestId('currencySell');
    expect(currencySell).toBeInTheDocument();
    expect(currencySell).toHaveTextContent(`Sell: ${roundNum(exchangeRate.sell)} ${currency}`);
  });
});

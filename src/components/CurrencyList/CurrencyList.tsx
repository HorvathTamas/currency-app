import { FunctionComponent } from 'react';
import { Fx } from '../../typings/api';
import CurrencyItem from './CurrencyItem/CurrencyItem';
import Paper from '@material-ui/core/Paper';
import './CurrencyList.scss';

interface CurrencyListProps {
  currencies: Fx[];
  baseCurrency: string;
}

const CurrencyList: FunctionComponent<CurrencyListProps> = ({ currencies, baseCurrency }) => {
  return (
    <div className="currency-list">
      <Paper elevation={6} className="currency-list__title-container">
        <div data-testid="resultNumber" className="currency-list__title">{`Result(s): ${currencies.length}`}</div>
        <div data-testid="baseCurrency" className="currency-list__title">{`Base Currency: 1 ${baseCurrency}`}</div>
      </Paper>
      {currencies.map((item) => (
        <CurrencyItem key={item.currency} currencyItem={item} />
      ))}
    </div>
  );
};

export default CurrencyList;

import { FunctionComponent } from 'react';
import { Fx } from '../../../typings/api';
import Paper from '@material-ui/core/Paper';
import './CurrencyItem.scss';
import { roundNum } from '../../../utils';
import FlagIcon from '../../FlagIcon/FlagIcon';

interface CurrencyItemProps {
  currencyItem: Fx;
}

const CurrencyItem: FunctionComponent<CurrencyItemProps> = ({ currencyItem }) => {
  const { currency, exchangeRate, nameI18N } = currencyItem;
  return (
    <Paper elevation={6} className="currency-item">
      <div className="currency-item__flag-container">
        <FlagIcon currency={currency} />
      </div>
      <div className="currency-item__name">{nameI18N}</div>
      <div className="currency-item__rates">
        <div>{`Buy: ${roundNum(exchangeRate.buy)} ${currency}`}</div>
        <div>{`Mid: ${roundNum(exchangeRate.middle)} ${currency}`}</div>
        <div>{`Sell: ${roundNum(exchangeRate.sell)} ${currency}`}</div>
      </div>
    </Paper>
  );
};

export default CurrencyItem;

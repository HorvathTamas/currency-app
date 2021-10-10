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
      <FlagIcon currency={currency} />
      <div>{nameI18N}</div>
      <div>{`Buy: ${roundNum(exchangeRate.buy)} ${currency}`}</div>
      <div>{`Mid: ${roundNum(exchangeRate.middle)} ${currency}`}</div>
      <div>{`Sell: ${roundNum(exchangeRate.sell)} ${currency}`}</div>
    </Paper>
  );
};

export default CurrencyItem;

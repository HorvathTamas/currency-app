import { FunctionComponent } from 'react';
import { Fx } from '../../../typings/api';
import Paper from '@material-ui/core/Paper';
import './CurrencyItem.scss';
import { roundNum } from '../../../utils';

interface CurrencyItemProps {
  currencyItem: Fx;
}

const CurrencyItem: FunctionComponent<CurrencyItemProps> = ({ currencyItem }) => {
  const { currency, exchangeRate, nameI18N } = currencyItem;
  return (
    <Paper elevation={6} className="currency-item">
      <img
        className="currency-item__flag"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png"
      />
      <div>{nameI18N}</div>
      <div>{`Buy: ${roundNum(exchangeRate.buy)} ${currency}`}</div>
      <div>{`Mid: ${roundNum(exchangeRate.middle)} ${currency}`}</div>
      <div>{`Sell: ${roundNum(exchangeRate.sell)} ${currency}`}</div>
    </Paper>
  );
};

export default CurrencyItem;

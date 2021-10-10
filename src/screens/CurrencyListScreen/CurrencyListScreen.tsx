import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import './CurrencyListScreen.scss';
import * as actions from '../../store/actions/index';
import { SearchParams } from '../../typings/common';

const CurrencyListScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queryParam = useQuery(SearchParams.FILTER);

  useEffect(() => {
    dispatch(actions.getCurrencies());
  }, []);

  return (
    <div className="currencies-page">
      <div>{queryParam || 'CurrencyListScreen'}</div>
      <button
        onClick={() => {
          history.push('/currencies?filter=USD');
        }}
      >
        Search for USD
      </button>
    </div>
  );
};

export default CurrencyListScreen;

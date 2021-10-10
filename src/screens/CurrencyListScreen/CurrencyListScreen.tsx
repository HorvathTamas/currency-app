import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import './CurrencyListScreen.scss';
import * as actions from '../../store/actions/index';
import { SearchParams } from '../../typings/common';
import { debounce } from 'lodash';
import { RootState } from '../../store';
import { makeSelectBaseCurrency, makeSelectCurrenciesBySearch } from '../../store/selectors/currency.selectors';
import TextInput from '../../components/input/TextInput/TextInput';
import CurrencyList from '../../components/CurrencyList/CurrencyList';

const CurrencyListScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queryParam = useQuery(SearchParams.Filter);

  const [searchParam, setSearchParam] = useState('');
  const { loading } = useSelector((state: RootState) => state.currency);
  const currencyData = useSelector(makeSelectCurrenciesBySearch(queryParam));
  const baseCurrency = useSelector(makeSelectBaseCurrency());

  useEffect(() => {
    dispatch(actions.getCurrencies());
  }, []);

  useEffect(() => {
    if (queryParam && queryParam !== searchParam) {
      setSearchParam(queryParam);
    }
  }, [queryParam]);

  const search = useCallback(
    debounce((value: string) => {
      history.push(`/currencies?filter=${value}`);
    }, 1200),
    []
  );

  const handleSearchChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
    search(event.target.value);
  };

  const renderContent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (currencyData && baseCurrency) {
      return <CurrencyList currencies={currencyData} baseCurrency={baseCurrency} />;
    }
  };

  return (
    <div className="currencies-page">
      <div className="currencies-page__search-bar-container">
        <TextInput withIcon disabled={loading} value={searchParam} onChangeHandler={handleSearchChanged} />
      </div>
      {renderContent()}
    </div>
  );
};

export default CurrencyListScreen;

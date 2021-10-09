import { useHistory } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import './CurrencyListScreen.scss';

const CurrencyListScreen = () => {
  const history = useHistory();
  const queryParam = useQuery('filter');

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

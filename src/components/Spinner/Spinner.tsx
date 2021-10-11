import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <CircularProgress className="spinner-container__spinner" size={90} />
    </div>
  );
};

export default Spinner;

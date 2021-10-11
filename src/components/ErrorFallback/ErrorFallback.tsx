import { FunctionComponent } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './ErrorFallback.scss';

const ErrorFallback: FunctionComponent = () => {
  return (
    <div className="error-fallback">
      <ErrorMessage />
    </div>
  );
};

export default ErrorFallback;

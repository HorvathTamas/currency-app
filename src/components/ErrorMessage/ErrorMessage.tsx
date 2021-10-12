import { FunctionComponent } from 'react';
import './ErrorMessage.scss';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message">
      <div data-testid="errorMessage" className="error-message__box">
        {message || 'Something went wrong :('}
      </div>
    </div>
  );
};

export default ErrorMessage;

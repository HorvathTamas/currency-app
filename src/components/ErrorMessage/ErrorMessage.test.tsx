import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  const message = 'custom error message';
  describe('with message', () => {
    beforeEach(() => render(<ErrorMessage message={message} />));
    test('display custom message', () => {
      const errorMessage = screen.getByTestId('errorMessage');
      expect(errorMessage).toHaveTextContent('custom error message');
    });
  });
  describe('without message', () => {
    beforeEach(() => render(<ErrorMessage />));
    test('display the default message', () => {
      const errorMessage = screen.getByTestId('errorMessage');
      expect(errorMessage).toHaveTextContent('Something went wrong :(');
    });
  });
});

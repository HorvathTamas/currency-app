import { render, screen } from '@testing-library/react';
import FlagIcon from './FlagIcon';

describe('FlagIcon component', () => {
  const validCurrency = 'huf';
  const invalidCurrency = 'xx';
  describe('with valid currency', () => {
    beforeEach(() => render(<FlagIcon currency={validCurrency} />));
    test('renders flag icon', () => {
      const flag = screen.queryByTestId('flag');
      expect(flag).toBeInTheDocument();
    });
    test('should not render placeholder', () => {
      const placeholder = screen.queryByTestId('placeholder');
      expect(placeholder).not.toBeInTheDocument();
    });
  });
  describe('with invalid currency', () => {
    beforeEach(() => render(<FlagIcon currency={invalidCurrency} />));
    test('should not render flag icon', () => {
      const flag = screen.queryByTestId('flag');
      expect(flag).not.toBeInTheDocument();
    });
    test('renders placeholder with No Flag text', () => {
      const placeholder = screen.queryByTestId('placeholder');
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveTextContent('No Flag');
    });
  });
});

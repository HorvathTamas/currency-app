import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput component', () => {
  const value = '';
  const onChangeHandler = jest.fn();
  describe('enabled without icon', () => {
    beforeEach(() => render(<TextInput onChangeHandler={onChangeHandler} value={value} />));
    test('renders input element', () => {
      const inputElement = screen.getByPlaceholderText('Search Currencies');
      expect(inputElement).toBeInTheDocument();
    });
    test('should not render icon', () => {
      const searchIcon = screen.queryByTestId('searchIcon');
      expect(searchIcon).not.toBeInTheDocument();
    });
    test('should not disable', () => {
      const inputElement = screen.getByPlaceholderText('Search Currencies');
      expect(inputElement).not.toBeDisabled();
    });
  });
  describe('disabled with icon', () => {
    beforeEach(() => render(<TextInput disabled withIcon onChangeHandler={onChangeHandler} value={value} />));
    test('renders input element', () => {
      const inputElement = screen.getByPlaceholderText('Search Currencies');
      expect(inputElement).toBeInTheDocument();
    });
    test('renders icon', () => {
      const searchIcon = screen.queryByTestId('searchIcon');
      expect(searchIcon).toBeInTheDocument();
    });
    test('should be disable', () => {
      const inputElement = screen.getByPlaceholderText('Search Currencies');
      expect(inputElement).toBeDisabled();
    });
  });
});

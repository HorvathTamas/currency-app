import { ChangeEvent, FunctionComponent } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import './TextInput.scss';

interface TextInputProps {
  value: string;
  disabled?: boolean;
  withIcon?: boolean;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FunctionComponent<TextInputProps> = ({ value, disabled, withIcon, onChangeHandler }) => {
  return (
    <Paper className="text-input">
      <InputBase
        className="text-input__field"
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}
        placeholder="Search Currencies"
      />
      {withIcon && (
        <>
          <div className="text-input__divider">
            <Divider orientation="vertical" />
          </div>

          <div className="text-input__icon-container" aria-label="search">
            <SearchIcon className="text-input__icon" />
          </div>
        </>
      )}
    </Paper>
  );
};

export default TextInput;

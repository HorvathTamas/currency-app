import { ChangeEvent, FunctionComponent } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import './TextInput.scss';

interface TextInputProps {
  value: string;
  disabled: boolean;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FunctionComponent<TextInputProps> = ({ value, disabled, onChangeHandler }) => {
  return (
    <Paper component="form" className="text-input">
      <InputBase
        className="text-input__field"
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}
        placeholder="Search Currencies"
      />
      <div className="text-input__divider">
        <Divider orientation="vertical" />
      </div>

      <div className="text-input__icon-container" aria-label="search">
        <SearchIcon className="text-input__icon" />
      </div>
    </Paper>
  );
};

export default TextInput;

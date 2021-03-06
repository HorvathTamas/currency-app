import { FunctionComponent } from 'react';
import { getFlagId } from '../../utils';
import './FlagIcon.scss';

interface FlagIconProps {
  currency: string;
}

const FlagIcon: FunctionComponent<FlagIconProps> = ({ currency }) => {
  const flagId = getFlagId(currency);

  const tryRequire = () => {
    try {
      return require('../../assets/flags/' + flagId + '.png');
    } catch (err) {
      return null;
    }
  };

  if (tryRequire()) {
    return <img data-testid="flag" className="flag-icon" src={tryRequire().default} alt="flag" />;
  }

  return (
    <div data-testid="placeholder" className="flag-icon flag-icon--placeholder">
      No Flag
    </div>
  );
};

export default FlagIcon;

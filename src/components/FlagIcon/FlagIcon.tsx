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
    return <img className="flag-icon" src={tryRequire().default} alt="flag" />;
  }

  return <div className="flag-icon flag-icon--placeholder">No Flag</div>;
};

export default FlagIcon;

import { FunctionComponent } from 'react';
import './Header.scss';

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return <div className="header-container">{title}</div>;
};

export default Header;

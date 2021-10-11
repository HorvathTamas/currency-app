import './Layout.scss';
import { FunctionComponent } from 'react';
import Header from './Header/Header';

const Layout: FunctionComponent = ({ children }) => {
  const title = 'Exchange';
  return (
    <div className="layout">
      <Header title={title} />
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;

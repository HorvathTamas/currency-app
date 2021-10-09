import { Route, Switch, Redirect } from 'react-router-dom';
import CurrencyListScreen from '../screens/CurrencyListScreen/CurrencyListScreen';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/currencies" component={CurrencyListScreen} />
      <Redirect to="/currencies" />
    </Switch>
  );
};

export default Routes;

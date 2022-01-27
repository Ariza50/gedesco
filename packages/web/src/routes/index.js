import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/home" exact={true} component={Home} />
      <Route path="/404" exact={true} component={NotFoundPage} />
    </Switch>
  );
}

export default Router;

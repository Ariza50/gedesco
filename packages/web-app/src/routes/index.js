import { Route, Switch } from 'react-router-dom';
import HomeApp from '../pages/HomeApp';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomeApp} />
      <Route path="/home" exact={true} component={HomeApp} />
    </Switch>
  );
}

export default Router;

import { Router, Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import { createBrowserHistory } from 'history';
import SelectAlbum from 'pages/SelectAlbum';
import Album from 'pages/Album';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact component={Main} path="/" />
        <Route exact component={SelectAlbum} path="/:album" />
        <Route exact component={Album} path="/album/:id" />
      </Switch>
    </Router>
  );
};

export default AppRouter;

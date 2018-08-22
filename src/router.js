import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import SiderDemo from './routes/SiderDemo/SiderDemo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SiderDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

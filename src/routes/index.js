import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Main from '../pages/Main';

import Dashboard from '../pages/Dashboard';
import NovaAcao from '../pages/Acoes/Nova';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/nova" component={NovaAcao} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}

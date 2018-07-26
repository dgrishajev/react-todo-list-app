import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todos from './containers/todos';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Todos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

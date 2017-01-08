import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Main from './Main';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';

const routes = (
  <Route path='/' component={Main} >
    <IndexRoute component={Homepage} />
    <Route path='login' component={Login} />
    <Route path='signup' component={Signup} />

    <Redirect from='*' to='/' />
  </Route>
)

export default routes;
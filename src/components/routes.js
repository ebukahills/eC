import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Main from './Main';
import Homepage from './Homepage';

const routes = (
  <Route path='/' component={Main} >
    <IndexRoute component={Homepage} />

    <Redirect from='*' to='/' />
  </Route>
)

export default routes;
import { IndexRoute, Route }  from 'react-router';
import React                  from 'react';
import MainLayout             from '../layouts/main';
import HomeIndexView          from '../views/home';

export default (
  <Route component={ MainLayout }>
    <IndexRoute component={ HomeIndexView } />
  </Route>
);

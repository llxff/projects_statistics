import { IndexRoute, Route }  from 'react-router';
import React                  from 'react';
import MainLayout             from '../layouts/main';
import HomeIndexView          from '../views/home';
import NewVersionView         from '../views/versions/new';
import NewProjectView         from '../views/projects/new';

export default (
  <Route component={ MainLayout }>
    <Route path="/" component={ HomeIndexView } />
    <Route path="/versions/new" component={ NewVersionView } />
    <Route path="/projects/new" component={ NewProjectView } />
  </Route>
);

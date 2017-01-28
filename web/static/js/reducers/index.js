import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import projects            from './projects';
import versions            from './versions';

export default combineReducers({
  routing: routerReducer,
  projects: projects,
  versions: versions
});

import Constants from '../constants';

const initialState = {
  projects: [],
  data_types: [],
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_PROJECTS:
      return { ...state, projects: action.projects };

    case Constants.SET_DATA_TYPES:
      return { ...state, data_types: action.data_types };

    case Constants.PROJECT_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

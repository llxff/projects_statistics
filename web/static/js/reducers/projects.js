import Constants from '../constants';

const initialState = {
  projects: [],
  data_types: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_PROJECTS:
      return { projects: action.projects };

    case Constants.SET_DATA_TYPES:
      return { data_types: action.data_types };

    default:
      return state;
  }
}

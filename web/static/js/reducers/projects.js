import Constants from '../constants';

const initialState = {
  projects: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_PROJECTS:
      return { projects: action.projects };

    default:
      return state;
  }
}

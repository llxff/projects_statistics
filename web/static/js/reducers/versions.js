import Constants from '../constants';

const initialState = {
  error: null,
  versions: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_VERSIONS:
      return { ...initialState, versions: action.versions }

    case Constants.VERSION_ERROR:
      return { ...initialState, error: action.error };

    case Constants.VERSION_CREATED:
      return { ...initialState, error: null };

    default:
      return state;
  }
}

import Constants from '../constants';

const initialState = {
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.VERSION_ERROR:
      return { error: action.error };

    case Constants.VERSION_CREATED:
      return { error: null };

    default:
      return state;
  }
}

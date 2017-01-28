import { pushPath }  from "react-router-redux";
import { httpPost }  from "../utils";
import Constants     from "../constants";


const Actions = {};

Actions.createVersion = (projectId, name) => {
  return dispatch => {
    httpPost(`/api/projects/${ projectId }/versions`, { name: name })
      .then(() => {
        dispatch({ type: Constants.VERSION_CREATED });
      })
      .catch((error) => {
        error.response.json()
        .then((errorJSON) => {
          console.log(errorJSON.error);
          dispatch({
            type: Constants.VERSION_ERROR,
            error: errorJSON.error,
          });
        });
    });
  }
};

export default Actions;

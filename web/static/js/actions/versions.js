import { httpGet, httpPost }      from "../utils";
import Constants                  from "../constants";
import { routerActions }          from "react-router-redux";

const Actions = {
  loadVersions(projectId) {
    return dispatch => {
      httpGet(`/api/projects/${ projectId }/versions`)
        .then(function(data) {
          dispatch({
            type: Constants.SET_VERSIONS,
            versions: data.versions
          });
        });
    };
  },

  createVersion(projectId, name) {
    return dispatch => {
      httpPost(`/api/projects/${ projectId }/versions`, {name: name})
        .then(() => {
          dispatch({type: Constants.VERSION_CREATED});
          dispatch(routerActions.push(`/projects/${ projectId }`));
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
  }
};

export default Actions;

import Constants         from "../constants";
import { httpPost }      from "../utils";
import { routerActions } from "react-router-redux";

const Actions = {
  createProject(project) {
    return dispatch => {
      httpPost("/api/projects", project)
        .then(() => {
          dispatch({ type: Constants.PROJECT_CREATED });
          dispatch(routerActions.push("/"));
        })
        .catch((error) => {
          error.response.json()
            .then((errorJSON) => {
              console.log(errorJSON.error);
              dispatch({
                type: Constants.PROJECT_ERROR,
                error: errorJSON.error,
              });
            });
        });
    };
  }
};

export default Actions;

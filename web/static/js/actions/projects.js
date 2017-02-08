import Constants   from "../constants";
import { httpGet, httpPost } from "../utils";
import { routerActions } from "react-router-redux";

const Actions = {
  loadProjects() {
    return dispatch => {
      httpGet("/api/projects")
        .then(function(data) {
          dispatch({
            type: Constants.SET_PROJECTS,
            projects: data.projects
          });
        });
    };
  },

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

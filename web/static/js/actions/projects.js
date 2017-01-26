import Constants   from "../constants";
import { httpGet } from "../utils";

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
  }
};

export default Actions;

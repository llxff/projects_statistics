import Constants   from "../constants";
import { httpGet } from "../utils";

const Actions = {
  loadDataTypes() {
    return dispatch => {
      httpGet("/api/data_types")
        .then(function(data) {
          dispatch({
            type: Constants.SET_DATA_TYPES,
            data_types: data.data_types
          });
        });
    };
  }
};

export default Actions;

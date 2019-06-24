
import data from './storage.json'
export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

export function loadFromLocalJson() {
    return function (dispatch) {
         dispatch({
           type: "LOAD_LOCAL_DATA",
           payload: data
         });


    }

}

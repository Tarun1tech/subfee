import { feedData } from '../queries';
import { checkResponse } from "../../constants/index";


/* LISTCLIENT */
export const get_feed_data = payload => async dispatch => {
    let response = await feedData(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "FEED_DATA",
            payload: response.data.data
        });
    } else {
        dispatch(
            {
                type: "ERROR_OCCURED",
                payload: response.error
            }
        )
    }

};


export const reset_app = payload => async dispatch => {
    console.log("dsfsdfsdf", payload)
    dispatch({
        type: "RESET_APP",
        payload: {}
    });
};


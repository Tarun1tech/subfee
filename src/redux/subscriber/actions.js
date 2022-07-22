import { subscriberData, subscriberDelete, subscriberSearch } from '../queries';
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";


/* Profile */
export const get_subscriber_data = payload => async dispatch => {
    let response = await subscriberData(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "SUBSCRIBER_DATA",
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
export const get_subscriber_data_search = payload => async dispatch => {
    let response = await subscriberSearch(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "SUBSCRIBER_SEARCH",
            payload: response
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
export const subscriber_delete = payload => async dispatch => {
    let response = await subscriberDelete(payload);
    response = checkResponse(response);

    if (response.success) {
        toast.success(response.message)
        dispatch({
            type: "SUBSCRIBER_DELETE",
            payload: response
        });
    } else {
        toast.error(response.message)
        dispatch(
            {
                type: "ERROR_OCCURED",
                payload: response.error
            }
        )
    }

};
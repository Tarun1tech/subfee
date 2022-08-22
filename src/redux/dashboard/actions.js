import { getDashboard } from "../queries";
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";

export const get_dashboard_data = payload => async dispatch => {
    let response = await getDashboard(payload);
    response = checkResponse(response);
    
    if (response.success) {
        dispatch({
            type: "GET_DASHBOARD",
            payload: response.data.data
        });
    } else {
        dispatch({
            type: "ERROR_OCCURED",
            payload: response.error
        })
    }
};
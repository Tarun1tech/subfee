import { getFinancial } from "../queries";
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";

/* get financial data api */
export const get_Financial_Data = payload => async dispatch => {
    let response = await getFinancial(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "FINANCIAL_DATA",
            payload: response.data.data
        });
    } else {
        dispatch({
            type: "ERROR_ACCURED",
            payload: response.error
        });
    }
}
import { doLogin } from "../queries";
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";


/* Login */
export const do_login = payload => async dispatch => {
    let response = await doLogin(payload);
    response = checkResponse(response);
    console.log(response, "response")
    if (response.success === true) {
        toast.success(response.message)
        dispatch({
            type: "LOGIN_SUCCESSFUL",
            payload: response.data
        });
        localStorage.setItem("access_token", response.data.data.access_token);
        localStorage.setItem("success", response.data.data.success)
    } else {
        toast.error(response.error)
        dispatch({
            type: "LOGIN_FAILED",
            payload: response.error
        });
        console.log(response.success)
        localStorage.clear();

        localStorage.setItem("success", response.success)
    }
};


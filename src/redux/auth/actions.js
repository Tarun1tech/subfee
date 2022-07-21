import { doLogin, emailVerify, forgotPassword } from "../queries";
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";


/* Login */
export const do_login = payload => async dispatch => {
    let response = await doLogin(payload);
    response = checkResponse(response);
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
        localStorage.clear();
        localStorage.setItem("success", response.success)
    }
};

/* Email Verification */
export const email_verify = payload => async dispatch => {
    let response = await emailVerify(payload);
    response = checkResponse(response);
    if (response.success === true) {
        toast.success(response.message)
        dispatch({
            type: "EMAIL_VERIFY",
            payload: response.data
        });

    } else {
        toast.error(response.error)
        dispatch({
            type: "EMAIL_VERIFY_FAILED",
            payload: response.error
        });
    }
};

/* Forgot password */
export const forgot_password = payload => async dispatch => {
    let response = await forgotPassword(payload);
    response = checkResponse(response);
    if (response.success === true) {
        toast.success(response.message)
        dispatch({
            type: "FORGOT_PASSWORD",
            payload: response.data
        });

    } else {
        toast.error(response.error)
        dispatch({
            type: "FORGOT_PASSWORD_FAILED",
            payload: response.error
        });

    }
};
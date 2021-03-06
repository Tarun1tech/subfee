import { profileData, createProfile,createTheme,themeData } from '../queries';
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";


/* Profile */
export const get_profile_data = payload => async dispatch => {
    let response = await profileData(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "PROFILE_DATA",
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

export const create_profile = payload => async dispatch => {
    let response = await createProfile(payload);
    response = checkResponse(response);

    if (response.success) {
        toast.success(response.message)
        dispatch({
            type: "CREATE_PROFILE",
            payload: response
        });
    } else {
        toast.error(response.error)
        dispatch(
            {
                type: "ERROR_OCCURED",
                payload: response.error
            }
        )
    }

};

export const create_theme = payload => async dispatch => {
    let response = await createTheme(payload);
    response = checkResponse(response);

    if (response.success) {
        toast.success(response.message)
        dispatch({
            type: "CREATE_THEME",
            payload: response
        });
    } else {
        toast.error(response.error)
        dispatch(
            {
                type: "ERROR_OCCURED",
                payload: response.error
            }
        )
    }

};

export const get_theme_data = payload => async dispatch => {
    let response = await themeData(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "THEME_DATA",
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
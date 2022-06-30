import { contentData, uploadFile } from '../queries';
import { checkResponse } from "../../constants/index";

/* LISTCLIENT */
export const get_content_data = payload => async dispatch => {
    console.log(payload, "pa")
    let response = await contentData(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "CONTENT_DATA",
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

export const upload_file = payload => async dispatch => {
    let response = await uploadFile(payload);
    response = checkResponse(response);

    if (response.success) {

        dispatch({
            type: "UPLOAD_FILE",
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
export const create_content = payload => async dispatch => {
    let response = await uploadFile(payload);
    response = checkResponse(response);

    if (response.success) {

        dispatch({
            type: "CREATE_CONTENT",
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
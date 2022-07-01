import { contentData, uploadFile, createContent } from '../queries';
import { checkResponse } from "../../constants/index";
import { toast } from "react-toastify";


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

export const reset_app = payload => async dispatch => {
    console.log("dsfsdfsdf", payload)
    dispatch({
        type: "RESET_APP",
        payload: {}
    });


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
    let response = await createContent(payload);
    response = checkResponse(response);

    if (response.success) {
        toast.success(response.message)
        dispatch({
            type: "CREATE_CONTENT",
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
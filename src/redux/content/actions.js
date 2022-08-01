import { contentData, uploadFile, createContent, createDelete, contentDataById, updateContent } from '../queries';
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

    dispatch({
        type: "RESET_APP",
        payload: {}
    });


};

export const reset_content = payload => async dispatch => {

    dispatch({
        type: "RESET_CONTENT",
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
export const upload_edit_file = payload => async dispatch => {
    let response = await uploadFile(payload);
    response = checkResponse(response);

    if (response.success) {

        dispatch({
            type: "UPLOAD_EDIT_FILE",
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
export const update_content = payload => async dispatch => {
    let response = await updateContent(payload);
    response = checkResponse(response);

    if (response.success) {
        toast.success(response.message)
        dispatch({
            type: "CONTENT_UPDATE",
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
export const create_delete = payload => async dispatch => {
    let response = await createDelete(payload);
    response = checkResponse(response);

    if (response.success) {
        toast.success(response.message)
        dispatch({
            type: "CONTENT_DELETE",
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
export const get_content_by_id_data = payload => async dispatch => {
    let response = await contentDataById(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "CONTENT_BY_ID_DATA",
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

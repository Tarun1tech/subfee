import { feedData, getNaarData, listCommentByPost } from '../queries';
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



export const get_Naar = payload => async dispatch => {
    let response = await getNaarData(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "NAAR_DATA",
            payload: response.data.data
        });
    } else {
        dispatch(
            {
                type: "ERROR_NAAR",
                payload: response.error
            }
        )
    }
};

export const list_Comment = payload => async dispatch => {
    let response = await listCommentByPost(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "COMMENT_LIST",
            payload: response.data.data
        });
    } else {
        dispatch(
            {
                type: "ERROR_COMMENT_LIST",
                payload: response.error
            }
        )
    }
};
import { feedData, getNaarData, listCommentByPost, createComment, createCommentDelete, editComment } from '../queries';
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

/* create comment */
export const create_feed_comment = payload => async dispatch => {
     let response = await createComment(payload);
     response = checkResponse(response);

     if (response.success) {
         dispatch({
            type: "CREATE_FEED_COMMENT",
             payload: response.data.data,
             create_comment:response.data.data
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

 /* comment delete */
 export const create_comment_delete = payload => async dispatch => {
    let response = await createCommentDelete(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "COMMENT_DELETE",
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

/* edit comment */
export const edit_comment = payload => async dispatch => {
    let response = await editComment(payload);
    response = checkResponse(response);

    if (response.success) {
        dispatch({
            type: "EDIT_COMMENT",
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
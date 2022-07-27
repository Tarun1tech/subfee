const INIT_STATE = {
    content_list: {},
    create_content: null,
    error: "",
    upload_file: {},
    content_delete: {},
    contentlistbyid: {}
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'RESET_APP':
            return {
                ...state,
                // upload_file: {},
                contentlistbyid: {},

                error: ""
            };
        case "CONTENT_DATA":
            return {
                ...state,
                content_list: action.payload,
                error: "",
            };
        case "CONTENT_BY_ID_DATA":
            return {
                ...state,
                contentlistbyid: action.payload,
                error: "",
            };
        case "CONTENT_DELETE":
            return {
                ...state,
                content_delete: action.payload,
                error: "",
            };
        case "CREATE_CONTENT":
            return {
                ...state,
                create_content: action.payload,
                error: "",
            };
        case "CONTENT_UPDATE":
            return {
                ...state,
                update_content: action.payload,
                error: "",
            };
        case "UPLOAD_FILE":
            return {
                ...state,
                upload_file: action.payload,
                error: ""
            }
        case "UPLOAD_EDIT_FILE":
            return {
                ...state,
                upload_files: action.payload,
                error: ""
            }
        case 'RESET_CONTENT':
            return {
                ...state,
                create_content: null,
                // contentlistbyid: {},

                error: ""
            };

        default:
            return state;
    }
};

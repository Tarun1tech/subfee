const INIT_STATE = {
    content_list: {},
    create_content: {},
    error: "",
    upload_file: {}
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'RESET_APP':
            return {
                ...state,
                upload_file: {},
                error: ""
            };
        case "CONTENT_DATA":
            return {
                ...state,
                content_list: action.payload,
                error: "",
            };
        case "CREATE_CONTENT":
            return {
                ...state,
                create_content: action.payload,
                error: "",
            };
        case "UPLOAD_FILE":
            return {
                ...state,
                upload_file: action.payload,
                error: ""
            }

        default:
            return state;
    }
};

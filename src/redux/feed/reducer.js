const INIT_STATE = {
    feed_list: {},
    create_feed: {},
    feed_comment_list: {},
    error: "",
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'RESET_APP':
            return {
                ...state,
                error: ""
            };
        case "FEED_DATA":
            return {
                ...state,
                feed_list: action.payload,
                error: "",
            };
        case "CREATE_FEED":
            return {
                ...state,
                create_feed: action.payload,
                error: "",
            };
        case "CREATE_FEED_COMMENT":
            return {
                ...state,
                create_comment: action.payload,
                error: '',
            }
        case "FEED_COMMENT_DATA":
            return {
                ...state,
                feed_comment_list: action.payload,
                error: ''
            }
        case "CREATE_FEED_LIKE":
            return {
                ...state,
                create_like: action.payload,
                error: '',
            }
        case "CREATE_FEED_COUNT":
            return {
                ...state,
                create_count: action.payload,
                error: '',
            }
        default:
            return state;
    }
};

const INIT_STATE = {
    subscriber_data: {},
    subscriber_delete: {},
    error: ""
};

const subscriber = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SUBSCRIBER_DATA":
            return {
                ...state,
                subscriber_data: action.payload,
                error: "",
            };
        case "SUBSCRIBER_SEARCH":
            return {
                ...state,
                subscriber_data: action.payload,
                error: "",
            };
        case "SUBSCRIBER_DELETE":
            return {
                ...state,
                subscriber_delete: action.payload,
                error: "",
            };
        default:
            return state;
    }
};
export default subscriber;
const INIT_STATE = {
    profile_data: {},
    create_profile: {},
    error: ""
};

const settings = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "PROFILE_DATA":
            return {
                ...state,
                profile_data: action.payload,
                error: "",
            };

        case "CREATE_PROFILE":
            return {
                ...state,
                create_profile: action.payload,
                error: "",
            };

        default:
            return state;
    }
};
export default settings;
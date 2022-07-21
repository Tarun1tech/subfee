const INIT_STATE = {
    profile_data: {},
    create_profile: {},
    create_theme: {},
    theme_data: {},
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
            case "CREATE_THEME":
                return {
                    ...state,
                    create_theme: action.payload,
                    error: "",
                };
                case "THEME_DATA":
                    return {
                        ...state,
                        theme_data: action.payload,
                        error: "",
                    };
        default:
            return state;
    }
};
export default settings;
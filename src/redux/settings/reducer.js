const INIT_STATE = {
    profile_data: {},
    create_profile: {},
    create_theme: {},
    theme_data: {},
    error: "",
    faq_data: {},
    create_contact: {},
    create_ups: {},
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
        case "FAQ_DATA":
            return {
                ...state,
                faq_data: action.payload,
                error: "",
            };

        case "CREATE_CONTACT_US":
            return {
                ...state,
                create_contact: action.payload,
                error: "",
            };
        case "CHECK_USER_NAME":
            return {
                ...state,
                check_user_name: action.payload,
                error: "",
            }
        case "CREATE_UPS":
            return {
                ...state,
                create_ups: action.payload,
                error: "",
            }
        default:
            return state;
    }
};
export default settings;
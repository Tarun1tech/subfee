const INIT_STATE = {
    dashboard_data: {},
    error: {},

}

const dashboard = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "GET_DASHBOARD":
            return {
                ...state,
                dashboard_data: action.payload,
                error: "",
            };
        default:
            return state;
    }
};
export default dashboard;
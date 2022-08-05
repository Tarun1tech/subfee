const INIT_STATE = {
    financial_data: {},
    error: {},

}

const financial = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "FINANCIAL_DATA":
            return {
                ...state,
                financial_data: action.payload,
                error: "",
            };
        default:
            return state;
    }
};
export default financial;
const INIT_STATE = {
  user: {},
  isLogin: false,
  isEmailSend: false,
  error: "",

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESSFUL":
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        isOtp: true,
        isEmailSend: true,
        error: ""
      };
    case "EMAIL_VERIFY":
      return {
        ...state,
        user: action.payload,
      };
    case "FORGOT_PASSWORD":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

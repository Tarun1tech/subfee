import axios from "axios";
let token = localStorage.getItem("accessToken");

//For Login
export const doLogin = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}login`, data)
    .then((response) => response)
    .catch((err) => err.response);
};

//For Email verify
export const emailVerify = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}forgot-password`, data)
    .then((response) => response)
    .catch((err) => err.response);
};

//For Forgot password
export const forgotPassword = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}reset-password`, data)
    .then((response) => response)
    .catch((err) => err.response);
};

// Content API

export const contentData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getcontentlist/?page=${data.page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const contentDataById = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/getcontentdetails`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const uploadFile = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/upload-file`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const createContent = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/create-content`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const updateContent = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/editcontent`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const createDelete = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/deletecontent`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};

// Profile API
export const createProfile = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/updateprofile`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const profileData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getprofile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};

// THEME API
export const createTheme = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/themesetting`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};

export const themeData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getthemesetting`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};

// Comment API

export const feedData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getfeedsbycreator`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};


export const getNaarData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/getcontentdetails`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
}
//  Subscriber API

export const subscriberData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getsubscribers/?page=${data.page}&&status=${data.status}`, {

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};


export const listCommentByPost = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/list-comments-bypost`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const subscriberDelete = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/deletesubscribers`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};


/* create comment */
export const createComment = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/addcomments`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
// COntact us API
export const createContact = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/support`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};



/* DELETE COMMENT */
export const createCommentDelete = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/deletecomment`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const subscriberSearch = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/getsubscribersbyserach/?page=${data.page}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};



/* edit comment */
export const editComment = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}creator/editcomment`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
export const faqData = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/faqs`, {

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);

};

/* username availability API in setting page */
export const checkUsername = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
  .post(`${process.env.REACT_APP_API_ENDPOINT}creator/checkusername`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => response)
  .catch((err) => err.response);
}


/* financial page get financial data api integration */
export const getFinancial = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
  .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getfinanical`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },    
  })
  .then((response) => response)
  .catch((err) => err.response);
}

/* get dashboard data api */
export const getDashboard = (data) => {
  let token = localStorage.getItem("access_token");
  return axios
  .post(`${process.env.REACT_APP_API_ENDPOINT}creator/getdashboard`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => response)
  .catch((err) => err.response);
}
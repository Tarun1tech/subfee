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
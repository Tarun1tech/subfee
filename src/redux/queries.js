import axios from "axios";
let token = localStorage.getItem("access_token");

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
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}creator/getprofile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
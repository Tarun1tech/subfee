import axios from "axios";
let token = localStorage.getItem("accessToken");

var headertoken = {
  Authorization: `Bearer ${token}`,
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

//For Login
export const doLogin = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}login`, data)
    .then((response) => response)
    .catch((err) => err.response);
};

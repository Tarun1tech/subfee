const Auth = {
  isAuthorization: false,

  authenticate() {
    if (localStorage.getItem("access_token")) {
      this.isAuthorization = true;
    }
  },
  signout() {
    return (this.isAuthorization = false);
  },
  getAuth() {
    return this.isAuthorization;
  },
  checkAuth() {
    this.authenticate();
    return this.isAuthorization;
  },
};

export default Auth;

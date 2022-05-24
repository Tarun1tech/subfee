import React from "react";
import WhiteLogo from "../assets/images/light-logo.png";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleSubmit = () => {
    localStorage.setItem("access_token", "token");
    history.push("/dashboard");
  };

  return (
    <div>
      <div className="login_back">
        <div>
          <img className="light_logo" src={WhiteLogo} alt="logo" />
          <div className="login_card">
            <h4 className="small_heading">
              <Link to="/sidebar">Creator login</Link>
            </h4>
            <p className="text">Zie hoe je kanaal weer verder gegroeid is!</p>
            <form onSubmit={handleSubmit}>
              <label>E-mailadres*</label>
              <input type="text" name="username" />
              <label>Wachtwoord*</label>
              <input type="password" name="password" />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <label className="mark-container">
                    <input type="checkbox" />
                    Onthoud mij<span className="checkmark"></span>
                  </label>
                </div>
                <div>
                  <p className="end-text">Wachtwoord vergeten?</p>
                </div>
              </div>
              <input type="submit" className="submit" value="Inloggen" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

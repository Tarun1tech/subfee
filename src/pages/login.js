import React, { useState, useEffect } from "react";
import WhiteLogo from "../assets/images/light-logo.png";
import { useHistory } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { do_login } from "../redux/auth/actions";

const userInputs = {
  email: "",
  password: "",
}

const Login = (props) => {
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [inputs, setInputs] = useState(userInputs);
  const validate = (values) => {
    let errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!values.email || !regexEmail.test(values.email)) {
      errors.email = `Email enter valid email`;
    }

    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    if (!values.password) {
      errors.password = "password is required";
    }
    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setFormErrors(validate(inputs));
    e.preventDefault();
    if (Object.keys(validate(inputs)).length === 0) {
      props.do_login({
        "email": inputs.email,
        "password": inputs.password
      });
    }
  }
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [props]);

  return (
    <div>
      <div className="login_back">
        <ToastContainer />
        <div>
          <img className="light_logo" src={WhiteLogo} alt="logo" />
          <div className="login_card">
            <h4 className="small_heading">
              Creator login
            </h4>
            <p className="text">Zie hoe je kanaal weer verder gegroeid is!</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label>E-mailadres*</label>
                <input type="text" name="email" onChange={handleChange} />
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>
              <label>Wachtwoord*</label>
              <input type="password" name="password" onChange={handleChange} />
              {formErrors.password && (
                <span className="error">{formErrors.password}</span>
              )}
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
              {/* <button className="submit" onClick={handleSubmit} disabled={loading}>
                {loading && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                )}
                {loading && <span>Loading..............</span>}
                {!loading && <span>Inloggen</span>}
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { do_login })(Login);

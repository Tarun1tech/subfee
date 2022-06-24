import React, { useState } from "react";
import WhiteLogo from "../assets/images/light-logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";



const userInputs={
  email:"",
  password:"", 
}

const Login = () => {  

  const history = useHistory();
  const [inputs,setInputs] = useState(userInputs);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };


    const  makeLogin=(e)=> {
      e.preventDefault();
      axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}api/login`, {
          "email":inputs.email,
          "password":inputs.password
      })
        .then((response) => {
        if (response.data.success === true) {
          toast.success(response.data.message);
          localStorage.setItem("access_token", response.data.access_token);
          history.push("/dashboard");       
          }
          else {
            toast.error(response.data.message);
          }
        });
    }       

  return (
    <div>
      <ToastContainer />
      <div className="login_back">      
        <div>
          <img className="light_logo" src={WhiteLogo} alt="logo" />
          <div className="login_card">
            <h4 className="small_heading">
              Creator login
            </h4>
            <p className="text">Zie hoe je kanaal weer verder gegroeid is!</p>
            <form onSubmit={makeLogin}>
              <label for="emailAddress">E-mailadres*</label>
              <input type="text" name="email" onChange={handleInputChange} required/>
              <label for="password">Wachtwoord*</label>
              <input type="password" name="password" onChange={handleInputChange} required/>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <label className="mark-container">
                    <input type="checkbox" />
                    Onthoud mij<span className="checkmark"></span>
                  </label>
                </div>
                <div>
                <Link to="/email-verification"><p className="end-text">Wachtwoord vergeten?</p></Link>
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

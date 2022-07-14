import React from "react";
import "./assets/style/style.css";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import RouterComp from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import Auth from "./Auth";
function App() {
  function clearStorage() {
    let session = sessionStorage.getItem("ref");
    if (session == null) {
      Auth.signout();
      sessionStorage.clear();
      localStorage.clear();
    }
    sessionStorage.setItem("ref", 1);
  }
  window.addEventListener("load", clearStorage);
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <RouterComp />
          <ToastContainer />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./assets/style/style.css";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import RouterComp from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <RouterComp />
          <ToastContainer/>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

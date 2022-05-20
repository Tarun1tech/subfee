import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/style/style.css';
import Login from "./pages/login";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import DashSidebar from "./layouts/sidebar/sidebar";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Login/>} />
        <Route path="/sidebar" element={<DashSidebar/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

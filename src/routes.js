import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import Sidebar from "./layouts/sidebar/sidebar";
import ContentPage from "./pages/dashboard/content/content";
import Dashboard from "./pages/dashboard/dashboard";
import Finanical from "./pages/dashboard/finanical";
import Naar from "./pages/dashboard/naar";
import DashContentSide from "./pages/dashboard/settings";
import Statistics from "./pages/dashboard/statistics/index";
import Subscribers from "./pages/dashboard/subscribers";
import EmailVerification from "./pages/email-verification";
import ForgotPassword from "./pages/forgot-password";

import Login from "./pages/login";

const Router = (data) => {
  return (
    <Switch>
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/" component={Login} />
      <PublicRoute exact path="/email-verification" component={EmailVerification} />
      <PublicRoute exact path="/forgot-password/:id" component={ForgotPassword} />
      <PrivateRoute exact path="/subscribers" component={Subscribers} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/settings" component={DashContentSide} />
      <PrivateRoute exact path="/content" component={ContentPage} />
      <PrivateRoute exact path="/statistics" component={Statistics} />
      <PrivateRoute exact path="/finanical" component={Finanical} />
      <PrivateRoute exact path="/naar" component={Naar}/>
    </Switch>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.checkAuth() ? (
          <>
            <div className="min-h-screen flex">
              <Sidebar />
              <div>
                <div className="main">
                  <Component {...props} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ componeusernt: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.checkAuth() === false ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/dashboard" }} />
      )
    }
  />
);

export default Router;
